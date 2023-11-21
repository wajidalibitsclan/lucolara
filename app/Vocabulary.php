<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vocabulary extends Model
{
	use Sluggable;

	protected $table = 'vocabularies';
	protected $fillable = ['title', 'body', 'slug'];

	public function terminiVocabolario(){
		//dd($this);
		$termini =  $this->hasMany('\App\Term',  'vocabulary_id', 'id')->orderBy('termine', 'asc')->get();
		if($termini){
			return $termini;
		}else{
			return false;
		}

	}


	/**
	 * Gestione slug su title
	 * @return array
	 */
	public function sluggable() : array
	{
		return [
			'slug' => [
				'source' => 'title'
			]
		];
	}

}
