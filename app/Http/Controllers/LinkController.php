<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Link;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
class LinkController extends Controller
{



    public function ajaxUpdate(Request $request, $id)
    {
    	$link = Link::find($id);
	    if($request->has('title')){
	    	$link->title = $request->input('title');
	    }
	    if($request->has('youtubeCode')){
		    $link->youtubeCode = trim($request->input('youtubeCode'));
	    }
	    $link->save();
	    return response()->json($link);
    }

}
