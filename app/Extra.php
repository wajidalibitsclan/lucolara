<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;
class Extra extends Article
{
	public $tipologia = 'extra';


	public static function boot() {
		parent::boot();
		Extra::observe(new ArticleObservers());
	}

}
