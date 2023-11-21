<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Http\Requests\VideocategoryFrmRequest;
use App\VideoCategory;

class VideoCategoryController extends Controller
{
    public function index(){
        $categories = VideoCategory::paginate(15);
        return view('admin.videos.categories.index',compact('categories'));
    }
    public function create(){
        return view('admin.videos.categories.create');
    }
    public function store(VideocategoryFrmRequest $request){
        $data = [
            'name'=>$request->name,
            'order'=>$request->order,
        ];
        VideoCategory::create($data);
        Session::flash('success','Video category created successfully');
        return redirect()->route('admin.video_categories.index');
    }
    public function edit($id){
        $category = VideoCategory::find($id);
        return view('admin.videos.categories.edit',compact('category'));
    }
    public function update(VideocategoryFrmRequest $request, $id){
        $data = [
            'name'=>$request->name,
            'order'=>$request->order,
        ];
        $video = VideoCategory::find($id);
        $video->update($data);
        Session::flash('success','Video category updated successfully');
        return redirect()->route('admin.video_categories.index');
    }
    public function destroy($id){
        $video = VideoCategory::find($id);
        $video->delete();
        Session::flash('success','Video category deleted successfully');
        return response()->json(['success'=>true,'msg'=>'Video category deleted successfully']);
    }
}
