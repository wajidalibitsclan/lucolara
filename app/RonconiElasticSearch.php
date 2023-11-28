<?php

namespace App;

use Elastic\Elasticsearch\ClientBuilder;

class RonconiElasticSearch
{
	var $client;
	public function __construct()
	{
		$hosts = [env('EL_HOST', 'localhost:9200')];
		$clientBuilder = ClientBuilder::create();   // Instantiate a new ClientBuilder
		$clientBuilder->setHosts($hosts);           // Set the hosts
		$this->client = $clientBuilder->build();
		// Build the client object
	}


	public function CreateIndex()
	{
		$params = [
			'index' => env('EL_INDEX', 'ronconiTest'),
			'body' => [
				'settings' => [
					'number_of_shards' => 3,
					'number_of_replicas' => 2
				],
				'mappings' => [
					'articles' => [
						'_source' => [
							'enabled' => true
						],
						'properties' => [
							'body' => [
								'type' => 'text',
								'analyzer' => 'standard'
							],
							'riassunto' => [
								'type' => 'text',
								'analyzer' => 'standard'
							],
							'title' => [
								'type' => 'text',
								'analyzer' => 'standard'
							],
							'citta' => [
								'type' => 'text',
							],
							'persone' => [
								'type' => 'keyword',
							],
							'teatro' => [
								'type' => 'text',
							],
							'data_di_pubblicazione' => [
								'type' => 'date',
							],
							'interviste_e_dichiarazioni' => [
								'type' => 'nested',
							],
							'rassegna_stampa' => [
								'type' => 'nested',
							],
						]
					]
				]
			]
		];
		$response = $this->client->indices()->create($params);
	}

	public function deleteDocument($id)
	{
		$params = [
			'index' => env('EL_INDEX', 'ronconiTest'),
			'type' => 'articles',
			'id' => $id
		];
		$response = $this->client->delete($params);
		return $response;
	}

	public function indexArticle($object)
	{
		$id = $object->id;
		$body = $object->toArray();

		if (isset($object->persone) && !empty(json_decode($object->persone))) {
			$persone = [];
			foreach (json_decode($object->persone) as $item) {
				$persone[] = $item;
			}
			$body['persone'] = $persone;
		}

		unset($body['id']);
		unset($body['locandina']);
		unset($body['gallery']);

		if (isset($body['data_di_pubblicazione']) && !empty($body['data_di_pubblicazione'])) {

			if (is_array($body['data_di_pubblicazione'])) {
				$data = explode(' ', $body['created_at']['$date']);
				$body['data_di_pubblicazione'] = $data[0];
			} else {
				$data = explode(' ', $body['data_di_pubblicazione']);
				$body['data_di_pubblicazione'] = $data[0];
			}
			// dd(json_decode($body['data_di_pubblicazione']));
		}
		$params = [
			'index' => env('EL_INDEX', 'ronconiTest'),
			'type' => 'articles',
			'id' => $id,
			'body' => $body
		];

		// $this->client->indices()->delete(['index' => 'ronconi']);

		// dd("done");

		$response = $this->client->index($params);

		// dd($response);
	}

	public function fullSerach($term)
	{
		$items = $this->client->search([
			'index' => env('EL_INDEX', 'ronconiTest'),
			'type' => 'articles',
			'body' => [
				"from" => 0,
				"size" => 100,
				"sort" => [
					"_score",
					["data_di_pubblicazione" => ["unmapped_type" => "date", "order" => "desc"]],
				],
				'query' => [
					'bool' => [
						'must' => [
							'multi_match' => [
								'query' => $term,
								"fields" => ["title^5", "persone^4", "_all"]
							],
						],
						'filter' => [
							'bool' => [
								'should' => [
									"term" => [
										'status' => 1
									]
								],
								'must_not' => [
									"term" => [
										'type' => 'biografia'
									]
								]
							],
						],
					]
				]
			]
		]);
		return $items['hits']['hits'];
	}

	public function matchAllSearch()
	{
		$items = $this->client->search([
			'index' => env('EL_INDEX', 'ronconiTest'),
			'type' => 'articles',
			'body' => [
				"from" => 0,
				"size" => 1000,
				"sort" => [
					"_score",
					["data_di_pubblicazione" => ["unmapped_type" => "date", "order" => "desc"]],
				],
				'query' => [
					'match_all' => (object)[]
				]
			]
		]);
		return $items['hits']['hits'];
	}

	public function setMappings()
	{
		$params = [
			'index' =>  env('EL_INDEX', 'ronconiTest'),
			'type' => 'articles',
			'body' => [
				'articles' => [
					'_source' => [
						'enabled' => true
					],
					'properties' => [
						'body' => [
							'type' => 'text',
							'analyzer' => 'standard'
						],
						'riassunto' => [
							'type' => 'text',
							'analyzer' => 'standard'
						],
						'title' => [
							'type' => 'text',
							'analyzer' => 'standard'
						],
						'citta' => [
							'type' => 'text',
						],
						'persone' => [
							'type' => 'keyword',
						],
						'teatro' => [
							'type' => 'text',
						],
						'data_di_pubblicazione' => [
							'type' => 'date',
						],
						'interviste_e_dichiarazioni' => [
							'type' => 'nested',
						],
						'rassegna_stampa' => [
							'type' => 'nested',
						],
					]
				]
			]
		];

		// Update the index mapping
		$this->client->indices()->putMapping($params);
	}

	public function removeIndex()
	{
		$params   = ['index' => env('EL_INDEX', 'ronconiTest')];
		$response = $this->client->indices()->delete($params);
	}
}
