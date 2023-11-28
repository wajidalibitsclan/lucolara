<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
    }

    public function add()
    {
        $categories = Category::get();
        return view('admin.page.categories.add', compact('categories'));
    }

    public function store(Request $request)
    {

        foreach (getVocabolario('Categorie') as $categoria) {
            // $submenus[$categoria->slug] = $categoria->toArray();
            $submenus[$categoria->slug] = ['object' => 'extra', 'taxonomy' => 'categorie', 'termine' => $categoria->slug, 'name' => $categoria->termine];
        }

        dd($submenus);
        // $submenus['santacristina_2002'] = ['object'=>'santacristina_2002','name'=>'Santacristina 2002-2014'];
        // return ['biografia'=>['name'=>'biografia']];

    }
}
