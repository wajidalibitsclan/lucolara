<?php

namespace App;

use App\Observers\ArticleObservers;

class Other extends Article
{
    public $tipologia = 'other';


    public static function boot()
    {
        parent::boot();
        Other::observe(new ArticleObservers());
    }
}
