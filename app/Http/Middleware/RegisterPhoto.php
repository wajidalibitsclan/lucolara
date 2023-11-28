<?php

namespace App\Http\Middleware;

use App\Http\Controllers\PhotoController;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RegisterPhoto
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasFile('immagine_in_evidenza')) {
            $file = $request->file('immagine_in_evidenza');
            $uploaded_file = new PhotoController;
            if ($file->isValid()) {
                $file_id = $uploaded_file->store($file, 'original', true);
                if ($file_id) {
                    $request->merge([
                        'immagine_in_evidenza_id' => $file_id
                    ]);
                }
            }
        } elseif ($request->hasFile('immagine_galleria')) {
            $photo = new \App\Photo();
            $id_file = $photo->storeAndCreate($request->file('immagine_galleria'), $request->input('title_media'), $request->input('descrizione_media'), $request->input('bozzetto'));
            if ($id_file) {
                $request->merge([
                    'id_immagine_galleria' => $id_file
                ]);
            }
        }
        return $next($request);
    }
}
