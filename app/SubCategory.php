<?php

namespace App;

use App\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'object', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
