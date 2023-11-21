<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;

class Santacristina extends Article
{
    public $tipologia = 'santacristina';


	public static function boot() {
		parent::boot();
		Santacristina::observe(new ArticleObservers());
	}
}
