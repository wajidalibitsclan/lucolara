<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;
class Lirica extends Article
{
	public $tipologia = 'lirica';
	public static function boot() {
		parent::boot();
		Lirica::observe(new ArticleObservers());
	}
}
