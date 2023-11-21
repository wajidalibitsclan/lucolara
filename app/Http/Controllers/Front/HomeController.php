<?php

namespace App\Http\Controllers\Front;

use App\Article;
use App\Http\Controllers\Controller;
use App\Page;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articoli = Article::where('status', 1)->orderBy('data_di_pubblicazione', 'desc')->get();
        $biografia = Page::where('slug', 'biografia-di-luca-ronconi')->first();
        if(!$biografia){
	        $biografia = new Page();
	        $biografia->title = "Biografia di Luca Ronconi";
	        $biografia->save();
        }
	    $articoli->biografia = $biografia;
    	return view('layouts.page.home')->with(compact('articoli'));
    }
}
