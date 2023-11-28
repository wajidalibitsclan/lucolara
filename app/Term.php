<?php

namespace App;

use App\Vocabulary;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Term extends Model
{
	use Sluggable;
	use HasFactory;

	protected $table = 'terms';
	protected $fillable = ['termine', 'body', 'vocabulary_id', 'slug', 'no_menu'];


	// public function getArticle($field){
	// 	return $this->hasMany(Article::class, $field, 'id')->orderBy('data_di_pubblicazione', 'desc')->get();
	// }

	public function getArticle($termId)
	{

		return Article::whereJsonContains('persone', $termId)->orderBy('data_di_pubblicazione', 'desc')->get();
		// dd($termId);
		return $this->hasMany(Article::class)
			->whereJsonContains('persone', $termId)
			->orderBy('data_di_pubblicazione', 'desc')
			->get();
	}



	/**
	 * Gestione slug su title
	 * @return array
	 */
	public function sluggable(): array
	{
		return [
			'slug' => [
				'source' => 'termine'
			]
		];
	}


	public function articles()
	{
		return $this->belongsToMany(Article::class);
	}
}
