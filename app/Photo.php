<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use App\Media;
// use Intervention\Image\Facades\Image as ImageManager;
// use Intervention\Image\ImageManagerStatic as ImageManager;



class Photo extends Media
{
	public $classSlug = 'photo';
	var $path = 'original';
	var $tipologia = 'photo';
	var $placeholder = 'Immagine';



	public function getPhotoUrl($size){
		if(Storage::exists('public/'. $size.'/'.$this->filename)){
			$url = Storage::url('public/'. $size.'/'.$this->filename);
			return asset($url);
		}else{
			if($size == 'locandina'){
				$size = '1920x720';
			}
			try{
                $this->resize($this->filename, $size);
                $url = Storage::url('public/'. $size.'/'.$this->filename);
                return asset($url);
            }catch (\Exception $exception){
			    return false;
            }
		};
	}

	public function resize($filename, $size){
		$manager = new ImageManager();
		try{
			$img = $manager->make(storage_path('app/public/original/' . $filename));
		}catch (\Exception $e){
			error_log($e);
		}
		if($img){
			$dimension = explode('x', $size);
			$resize = false;
			if($dimension[0] == '9999'){
				$width = null;
				$resize = true;
			}else{
				$width = $dimension[0];
			}

			if($dimension[1] == '9999'){
				$height = null;
				$resize = true;
			}else{
				$height = $dimension[1];
			}

			// prevent possible upsizing
			if($resize){
				$img->resize($width, $height, function ($constraint) {
					$constraint->aspectRatio();
					$constraint->upsize();
				});
			}else{
				$img->fit($width, $height);
			}

			if(!Storage::exists(storage_path('app/public/' . $size))){
				Storage::makeDirectory('public/' . $size);
			}
			$img->save(storage_path('app/public/' . $size .'/' . $filename));
		}

	}


	public function cropLocandina($filename, $size){
		$manager = new ImageManager();
		try{
			$img = $manager->make(storage_path('app/public/original/' . $filename));
		}catch (\Exception $e){
			error_log($e);
		}
		if($img){
			$dimension = explode('x', $size);
			$resize = false;
			if($dimension[0] == '9999'){
				$width = null;
				$resize = true;
			}else{
				$width = $dimension[0];
			}

			if($dimension[1] == '9999'){
				$height = null;
				$resize = true;
			}else{
				$height = $dimension[1];
			}

			// prevent possible upsizing
			if($resize){
				$img->resize($width, $height, function ($constraint) {
					$constraint->aspectRatio();
					$constraint->upsize();
				});
			}else{
				$img->fit($width, $height);
			}

			if(!Storage::exists(storage_path('app/public/' . $size))){
				Storage::makeDirectory('public/' . $size);
			}
			$img->save(storage_path('app/public/' . $size .'/' . $filename));
		}

	}

}
