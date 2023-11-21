<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;
class Scuola extends Article
{
	public $tipologia = 'scuola';
	public static function boot() {
		parent::boot();
		Scuola::observe(new ArticleObservers());
	}
}
