<?php

namespace App;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $table = 'videos';
    protected $dates = ['updated_at', 'created_at'];
    protected $fillable = ['title','link','description','category_id','order'];
    public function category(){
        return $this->belongsTo(VideoCategory::class, 'category_id');
    }
}
