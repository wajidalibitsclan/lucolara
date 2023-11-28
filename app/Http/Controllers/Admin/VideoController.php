<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Http\Requests\VideoFrmRequest;
use App\Video;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::with('category')->paginate(15);

        // dd($videos->toArray());
        return view('admin.videos.index', compact('videos'));
    }
    public function create()
    {
        $categories = video_categories();
        /*\LucaRonconi\User::create([
            'name' => 'olivier',
            'email' => 'olivieropdp@gmail.com',
            'password' => bcrypt('Manager2022@#'),
        ]);*/
        return view('admin.videos.create', compact('categories'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'link' => 'required|url',
            'order' => 'required|integer',
        ]);

        $data = [
            'title' => $request->title,
            'link' => $request->link,
            'description' => $request->description,
            'category_id' => $request->category,
            'order' => $request->order,
        ];
        Video::create($data);
        Session::flash('success', 'Video created successfully');
        return redirect()->route('admin.videos.index');
    }
    public function edit($id)
    {
        $video = Video::find($id);
        $categories = video_categories();
        return view('admin.videos.edit', compact('video', 'categories'));
    }
    public function update(VideoFrmRequest $request, $id)
    {
        $data = [
            'title' => $request->title,
            'link' => $request->link,
            'description' => $request->description,
            'category_id' => $request->category,
            'order' => $request->order,
        ];
        $video = Video::find($id);
        $video->update($data);
        Session::flash('success', 'Video updated successfully');
        return redirect()->route('admin.videos.index');
    }
    public function destroy($id)
    {
        $video = Video::find($id);
        $video->delete();
        Session::flash('success', 'Video deleted successfully');
        return response()->json(['success' => true, 'msg' => 'Video deleted successfully']);
    }
}
