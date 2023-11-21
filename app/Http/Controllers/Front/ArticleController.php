<?php

namespace App\Http\Controllers\Front;

use App\Article;
use Carbon\Carbon;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
	protected $dec_2015;
	public function __construct(){
        $this->dec_2015 = Carbon::createFromDate(2015, 12, 31);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request, $object, $taxonomy = false, $termine = false)
    {

	    $class = ucfirst($object);
	    $class = "\App\\$class";
	    $objects = new $class;
	    if($taxonomy && $termine){
	    	$term = \App\Term::where('slug', $termine)->first();
			$results = $objects::where('type', $object)->where($taxonomy, $term->id)->where('data_di_pubblicazione','<',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
			$results->taxonomy = $taxonomy;
			$results->termine = $termine;
	    }else{
			if($object == 'biografia'){
				$results = $objects::where('type', $object)->where('status', 1)->orderBy('data_di_pubblicazione', 'asc')->paginate(7);
			}else{
				$results = $objects::where('type', $object)->where('data_di_pubblicazione','<',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
			}
	    }
		if($results){
	    	$results->object = $object;
		}
		$results->color = 'scuola';
	    if($request->has('page')){
	    	return view('layouts.page.paginationList')->with(compact('results'));
	    } elseif (View::exists('layouts.page.' . $object . 'List')) {
		    return view('layouts.page.' . $object . 'List')->with(compact('results'));
	    } else {
		    return view('layouts.page.defaultList',compact('results'));
	    }
    }
	public function dopo( Request $request, $object, $taxonomy = false, $termine = false)
    {
	    $class = ucfirst($object);
	    $class = "\App\\$class";
	    $objects = new $class;

        // dd($termine);
	    if($taxonomy && $termine){
	    	$term = \App\Term::where('slug', $termine)->first();


    		$results = $objects::where('type', $object)->where($taxonomy, $term->id)->where('data_di_pubblicazione','>',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
			$results->taxonomy = $taxonomy;
		    $results->termine = $termine;
	    }else{
		    $results = $objects::where('type', $object)->where('data_di_pubblicazione','>',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
	    }
	    $results->object = $object;
	    $results->is_dopo = true;
		$results->color = 'extra';
	    if($request->has('page')){
	    	return view('layouts.page.paginationList')->with(compact('results'));
	    } elseif (View::exists('layouts.page.' . $object . 'List')) {
		    return view('layouts.page.' . $object . 'List')->with(compact('results'));
	    } else {

		    return view('layouts.page.defaultList')->with(compact('results'));
	    }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($object, $slug)
    {
	    $class = ucfirst($object);
	    $class = "\App\\$class";
	    $objects = new $class;

	    $post = $objects::where('slug',$slug)->first();

	    if(isset($post->gallery) && !empty($post->gallery)){
            $media = [];
		    foreach (json_decode($post->gallery) as $gallery_field){
                // dd($gallery_field);
				$media_type = ucfirst($gallery_field->media_type);
			    $media_class = $class = "\App\\$media_type";

			    $media_add = $media_class::find($gallery_field->id_media);
                // dd($media_add);
			    if($media_add){
			    	$media[] = $media_add;
			    }
		    }
		    $post->gallery = $media;
	    }
		if($post->data_di_pubblicazione < $this->dec_2015){
			$post->color = 'scuola';
		}elseif($post->data_di_pubblicazione > $this->dec_2015){
			$post->color = 'extra';
		}elseif(isset(biografia_submenus()[$object])){
			$post->color = 'biografia';
		}
	    $post->object = $object;

	    if (View::exists('layouts.single.' . $object . 'Single')) {

            // dd('Upper');
		    return view('layouts.single.' . $object . 'Single')->with(compact('post'));
	    }else{

            // dd($post);
		    return view('layouts.single.defaultSingle')->with(compact('post'));
	    }
    }


    public function termList($vocabulary, $slug){
        // dd($vocabulary);
    	$vocabulary_id = \App\Vocabulary::where('slug', $vocabulary)->first();
        // dd($vocabulary_id);
    	$term = \App\Term::where('vocabulary_id', $vocabulary_id->id)->where('slug', $slug)->first();


        // $articles = Article::whereJsonContains('persone', $term)

        // $article = Article::find(4); // Replace $articleId with the actual ID of the article

        // $personneTerms = $article->terms()->whereIn('id',json_decode($article->persone))->get();

        // dd($personneTerms);

    	$results = $term->getArticle($term->id);
    	$results->term = $term;

        // dd($results);
	    return view('layouts.page.defaultTermList')->with(compact('results'));
    }

	public function search(Request $request){
        if($request->has('s')){
        	$search = new \App\RonconiElasticSearch();
            //echo 'here we are';exit;
        	$risultati = $search->fullSerach($request->input('s'));
        	$termine = $request->input('s');
        	return view('layouts.page.search')->with(compact('risultati', 'termine'));
        }
	}
}
