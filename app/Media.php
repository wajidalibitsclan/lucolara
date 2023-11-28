<?php

namespace App;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Media extends Model
{
	protected $fillable = ['title', 'description', 'bozzetto', 'file_path', 'filename', 'type', 'extension', 'size'];
	protected $table = 'medias';
	var $path = 'default';
	var $tipologia = 'media';
	var $placeholder = 'Media allegato';


	public function __construct(array $attributes = array())
	{
		$this->type = $this->tipologia;
		parent::__construct($attributes);
	}


	/**
	 * Funzione per il savataggio del file su fil system
	 * @param $file
	 * @param string $title
	 *
	 * @return mixed
	 */
	public function storeUploadedFile($file)
	{
		if ($file->isValid()) {
			$nomefileCompleto = $file->getClientOriginalName();
			$extension = $file->getClientOriginalExtension();
			$nomefile = Str::slug(str_replace('.' . $extension, '', $nomefileCompleto));
			$nomefile = $this->verificaNomeMedia(storage_path('app/public/' . $this->path), $nomefile, $extension);
			$store = $file->storeAs('public/' . $this->path, $nomefile);
			return $store;
		} else {
			return $file->getErrorMessage();
		}
	}

	public function storeAndCreate($file, $title = false, $description = false, $bozzetto = false)
	{
		$store_path = $this->storeUploadedFile($file);
		$filename = explode('/', $store_path);
		$filename = end($filename);
		if ($title) {
			$this->title = $title;
		}
		if ($description) {
			$this->description = $description;
		}
		if ($bozzetto && !empty($bozzetto)) {
			$this->bozzetto = 1;
		}

		$this->filename     = $filename;
		$this->file_path    = $store_path;
		$this->extension    = $file->getMimeType();
		$this->size         = $file->getSize();
		$this->save();
		return $this->id;
	}


	/**
	 * Funzione per generare un nome file univoco ed evitare sostituzioni
	 * @param $path
	 * @param $nomefile
	 * @param $extension
	 *
	 * @return string
	 */
	public function verificaNomeMedia($path,  $nomefile, $extension)
	{
		$nomefileCompleto = $nomefile . "." . $extension;
		$i = 1;
		//Verifco se esite il nome del file
		while (file_exists($path . '/' . $nomefileCompleto)) {
			$nomeTemporaneo = (string)$nomefile . '-' . $i;
			$nomefileCompleto = $nomeTemporaneo . "." . $extension;
			$i++;
		}
		return $nomefileCompleto;
	}

	/**
	 * Recupro il titolo del media
	 * @return mixed|string
	 */
	public function getTitle()
	{
		if (isset($this->title) && !empty($this->title)) {
			return $this->title;
		} else {
			return $this->placeholder;
		}
	}

	/**
	 * recupero la url del file verificandone la presenza
	 * @return string
	 */
	public function getPublicUrl()
	{
		if (Storage::exists($this->file_path)) {
			$url = Storage::url($this->file_path);
			// dd(asset($url));
			return asset($url);
		}
	}

	public function getObject()
	{
		$value = $this->toArray();
		foreach ($value as $key =>  $field) {
			if (in_array($key, $this->fillable)) continue;
			unset($value[$key]);
		}
		$class = ucfirst($this->type);
		$class = "\App\\$class";
		$media = new $class($value);
		return $media;
	}
}
