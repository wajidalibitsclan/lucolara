<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;
use App\VideoCategory;

class VideoController extends Controller
{
    public function index(){
        $categories = VideoCategory::orderBy('order','asc')->get();
        return view('videos.index',compact('categories'));
    }
}
