<?php

namespace App\Http\Controllers;


use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Photo;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Illuminate\Support\Str;


class PhotoController extends Controller
{

    public $original_path;
    public $public_path;

	public function __construct() {
		$this->original_path = storage_path('app/public/original/');
		$this->public_path =  storage_path('app/public/');
	}

	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($array_dati)
    {
	    $new_photo = new Photo();
	    $new_photo->filename = $array_dati['filename'];
	    $new_photo->path = $array_dati['path'];
	    $new_photo->extension = $array_dati['path'];
	    $new_photo->size = $array_dati['size'];
	    $new_photo->save();
	    if(isset($new_photo->id) && !empty($new_photo->id)){
		    return $new_photo->id;
	    }else{
		    return false;
	    }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($file, $size, $create = false)
    {

	    if($file->isValid()){
		    //Registro Il nome originale del file
		    $nomefileCompleto = $file->getClientOriginalName();
		    $extension = $file->getClientOriginalExtension();
		    $nomefile = Str::slug(str_replace('.' . $extension, '', $nomefileCompleto));

		    $i = 1;
		    //Verifco se esite il nome del file
		    while(file_exists($this->original_path.$nomefileCompleto))
		    {
			    $nomeTemporaneo = (string)$nomefile.'-'.$i;
			    $nomefileCompleto = $nomeTemporaneo.".".$extension;
			    $i++;
		    }
		    $new_file = $file->move($this->original_path, $nomefileCompleto);

		    if($size == 'original' && $create == true){
			    $photo_create = [
				    'filename' => $nomefileCompleto,
			        'path' => $this->original_path,
			        'extension' => $new_file->getMimeType(),
			        'size' => $new_file->getSize()
			    ];
			    return $this->create($photo_create);
		    }else{
			    return true;
		    }

	    }else{
		    return false;
	    }

    }


	public function storeLocal($path,  $size, $create = false)
	{

			$file = File::get($path);
			$nomefile = File::name($path);
			$extension = File::extension($path);
			$file_size = File::size($path);
			$mime_type = File::mimeType($path);

			$nomefileCompleto = $nomefile . '.' .$extension;

			$i = 1;
			//Verifco se esite il nome del file
			while(file_exists($this->original_path.$nomefileCompleto))
			{
				$nomeTemporaneo = (string)$nomefile.'-'.$i;
				$nomefileCompleto = $nomeTemporaneo.".".$extension;
				$i++;
			}
			$new_file = File::move($path, $this->original_path . $nomefileCompleto);

			if($size == 'original' && $create == true){
				$photo_create = [
					'filename' => $nomefileCompleto,
					'path' => $this->original_path,
					'extension' => $mime_type,
					'size' => $file_size
				];
				return $this->create($photo_create);
			}else{
				return true;
			}
	}


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, $size)
    {
	    $photo = Photo::find($id);
	    if($photo){
		    return $photo->getPhotoUrl($size);
	    }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $photo = Photo::find($id);

    }

    public function ajaxUpdate(Request $request, $id)
    {

    	$photo = Photo::find($id);
	    if($request->has('title')){
	    	$photo->title = $request->input('title');
	    }
	    $photo->save();
	    return response()->json($photo);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function ajaxLocandina($id, Request $request){

    	$photo = Photo::find($id);

	    $targ_w = 1920;
	    $targ_h = 720;
	    $jpeg_quality = 90;

	    $src = storage_path('app/public/original/' . $photo->filename);

	    $type = exif_imagetype($src); // [] if you don't have exif you could use getImageSize()
	    $allowedTypes = array(
		    1,  // [] gif
		    2,  // [] jpg
		    3,  // [] png
	    );
	    if (!in_array($type, $allowedTypes)) {
		    return false;
	    }
	    switch ($type) {
		    case 1 :
			    $img_r = imagecreatefromgif($src);
			    break;
		    case 2 :
			    $img_r = imagecreatefromjpeg($src);
			    break;
		    case 3 :
			    $img_r = imagecreatefrompng($src);
			    break;
	    }

	    $dst_r = ImageCreateTrueColor( $targ_w, $targ_h );

	    imagecopyresampled($dst_r,$img_r,0,0, $request->input('x'),$request->input('y'),
		    $targ_w,$targ_h,$request->input('w'),$request->input('h'));

	    header('Content-type: image/jpeg');
	    imagejpeg($dst_r, storage_path('app/public/locandina/' . $photo->filename), $jpeg_quality);


    	return response()->json($request);
    }
}
