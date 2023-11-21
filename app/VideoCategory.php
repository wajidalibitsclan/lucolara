<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoCategory extends Model
{
    protected $table = 'video_categories';
    protected $dates = ['updated_at', 'created_at'];
    protected $fillable = ['name','order'];
    public function videos(){
        return $this->hasMany(Video::class,'category_id');
    }
}
