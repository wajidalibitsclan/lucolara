<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Http\Controllers\PhotoController;
use Cviebrock\EloquentSluggable\Sluggable;




class Page extends Model
{
	use Sluggable;
	protected $table = 'pages';
    protected $fillable = ['title', 'slug', 'body'];
	protected $dates = ['updated_at', 'created_at', 'data_di_pubblicazione'];

	public function getPermalink(){
		return route('dettaglioPagina', ['slug' => $this->slug]);
	}


	public function sluggable(): array
	{
		return [
			'slug' => [
				'source' => 'title'
			]
		];
	}
}
