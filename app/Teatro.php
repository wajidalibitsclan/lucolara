<?php

namespace App;

use App\Article;
use App\Observers\ArticleObservers;
class Teatro extends Article
{
	public $tipologia = 'teatro';

	public static function boot() {
		parent::boot();
		Teatro::observe(new ArticleObservers());
	}

}
