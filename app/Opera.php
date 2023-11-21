<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;
class Opera extends Article
{
	public $tipologia = 'opera';
	public static function boot() {
		parent::boot();
		Opera::observe(new ArticleObservers());
	}
}
