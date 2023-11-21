<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;

class Santacristina_2015 extends Article
{
    public $tipologia = 'santacristina';


	public static function boot() {
		parent::boot();
		Santacristina_2015::observe(new ArticleObservers());
	}
}
