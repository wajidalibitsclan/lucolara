<?php

namespace App;

class Link extends Media
{
	public $classSlug = 'link';
	protected $table = 'links';
	protected $fillable = ["type","title","descrizione","youtubeCode"];
	public function getPreviewMedia(){
		return 'http://img.youtube.com/vi/' . trim($this->youtubeCode) .'/0.jpg';
	}
}
