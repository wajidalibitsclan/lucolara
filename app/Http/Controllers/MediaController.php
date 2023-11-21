<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Media;
use App\Photo;
use App\Link;
use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function addMediaToGallery(Request $request){
		error_log(print_r($request->input(), true));
	    $media_type = $request->input('tipologia_media');
	    if($media_type == 'link'){
		    $media_gallery_object = new Link();
		    $media_gallery_object->title = $request->input('title_media');
		    $media_gallery_object->descrizione = $request->input('descrizione_media');
		    $media_gallery_object->youtubeCode = trim($request->input('link_media'));
		    $media_gallery_object->save();
			$this->addMediaToArticle($media_gallery_object->id, $media_type, $request->input('postid'), $request->input('postObject'), $request->input('field'));
			return view('admin.page.edit.partials.galleryVideo')->with(compact('media_gallery_object'));
	    }elseif($media_type == 'photo' && $request->input('id_immagine_galleria')){
		    $this->addMediaToArticle($request->input('id_immagine_galleria'), 'photo', $request->input('postid'), $request->input('postObject'), $request->input('field'));
		    $media_gallery_object = Photo::find($request->input('id_immagine_galleria'));
		    return view('admin.page.edit.partials.galleryPhoto')->with(compact('media_gallery_object'));
	    }
    }


    public function addMediaToArticle($id_media, $media_type, $id_article, $type_article, $field){

		//Recupero il post
	    $class = ucfirst($type_article);
	    $ArticleObject = "\App\\$class";
	    $ArticleObject = new $ArticleObject;
	    $article = $ArticleObject::find($id_article);
	    //Verifico se esiste il campo
		if(isset($article->{$field}) && !empty($article->{$field})){
			$array_field = $article->{$field};

			if($key = array_search($id_media, array_column($array_field, 'id_media'))){
				return false;
			}

			$array_field[] = [
				'id_media' => $id_media,
				'media_type' => $media_type
			];
			$article->{$field} = $array_field;
		}else{
			$article->{$field} = [
				[
					'id_media' => $id_media,
				    'media_type' => $media_type
				]
			];
		}
		$article->save();
	    return true;
    }

    public function index(){
    	$photos = Photo::paginate(15);
    	return view('admin.page.photoList')->with(compact('photos'));

    }
}
