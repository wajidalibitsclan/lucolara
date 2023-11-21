<?php
namespace App\Observers;

use App\Article;
use App\Extra;
use App\RonconiElasticSearch;
use Illuminate\Http\Request;
class ArticleObservers
{
	/**
	 * Listen to the User created event.
	 *
	 * @param  User  $user
	 * @return void
	 */
	public function saved($model)
	{

		$el = new RonconiElasticSearch();
        $el->indexArticle($model);
		return $model;
		//return redirect()->route('adminEdit', ['object' => $model->type, 'id' =>$id]);
	}


	public function deleted($model) {
	}
}


