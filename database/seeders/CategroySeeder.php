<?php

namespace Database\Seeders;

use App\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategroySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Luca Ronconi 1933-2015'],
            ['name' => 'Biografia'],
            ['name' => 'Santacristina'],
            ['name' => 'Dopo']
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
