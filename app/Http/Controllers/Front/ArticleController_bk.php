<?php

namespace App\Http\Controllers\Front;

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
		    $results = $objects::where('type', $object)->where('data_di_pubblicazione','<',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
	    }
	    $results->object = $object;

	    if($request->has('page')){
	    	return view('layouts.page.paginationList')->with(compact('results'));
	    } elseif (View::exists('layouts.page.' . $object . 'List')) {
		    return view('layouts.page.' . $object . 'List')->with(compact('results'));
	    } else {
		    return view('layouts.page.defaultList')->with(compact('results'));
	    }
    }
	public function dopo( Request $request, $object, $taxonomy = false, $termine = false)
    {
	    $class = ucfirst($object);
	    $class = "\App\\$class";
	    $objects = new $class;
	    if($taxonomy && $termine){
	    	$term = \App\Term::where('slug', $termine)->first();
		    $results = $objects::where('type', $object)->where($taxonomy, $term->id)->where('data_di_pubblicazione','>',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
			$results->taxonomy = $taxonomy;
		    $results->termine = $termine;
	    }else{
		    $results = $objects::where('type', $object)->where('data_di_pubblicazione','>',$this->dec_2015)->where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->paginate(7);
	    }
	    $results->object = $object;
		$is_dopo = true;

	    if($request->has('page')){
	    	return view('layouts.page.paginationList')->with(compact('results'));
	    } elseif (View::exists('layouts.page.' . $object . 'List')) {
		    return view('layouts.page.' . $object . 'List')->with(compact('results'));
	    } else {
		    return view('layouts.page.defaultList')->with(compact('results','is_dopo'));
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
		    foreach ($post->gallery as $gallery_field){
				$media_type = ucfirst($gallery_field['media_type']);
			    $media_class = $class = "\App\\$media_type";
			    $media_add = $media_class::find($gallery_field['id_media']);
			    if($media_add){
			    	$media[] = $media_add;
			    }
		    }
		    $post->gallery = $media;
	    }
	    $post->object = $object;
	    if (View::exists('layouts.single.' . $object . 'Single')) {
		    return view('layouts.single.' . $object . 'Single')->with(compact('post'));
	    }else{
		    return view('layouts.single.defaultSingle')->with(compact('post'));
	    }
    }


    public function termList($vocabulary, $slug){
    	$vocabulary_id = \App\Vocabulary::where('slug', $vocabulary)->first();
    	$term = \App\Term::where('vocabulary_id', $vocabulary_id->id)->where('slug', $slug)->first();
    	$results = $term->getArticle($vocabulary);
    	$results->term = $term;
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
