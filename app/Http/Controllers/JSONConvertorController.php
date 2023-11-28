<?php

namespace App\Http\Controllers;

use App\Article;
use App\Link;
use App\Media;
use App\Page;
use App\Term;
use App\User;
use App\Video;
use App\VideoCategory;
use App\Vocabulary;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;



class JSONConvertorController extends Controller
{
    public function videos()
    {
        ini_set('max_execution_time', 1060);

        $jsonFileContents = file_get_contents(public_path('json/videos.json'));
        $data = json_decode($jsonFileContents, true);

        $jsonFileContent = file_get_contents(public_path('json/categories.json'));
        $other = json_decode($jsonFileContent, true);

        $array = [];

        foreach ($other as $key => $cat) {
            $array[$cat['_id']['$oid']] = $key + 1;
        }

        foreach ($data as $video) {
            // dd($array[$video['category_id']]);
            $result = Video::where(['title' => $video['title']])->update([
                'category_id' => $array[$video['category_id']]
            ]);
        }

        dd("done");


        // $jsonFileContents = file_get_contents(public_path('json/terms.json'));
        // $data = json_decode($jsonFileContents, true);

        // $jsonCate =  file_get_contents(public_path('json/categories.json'));
        // $dataCate = json_decode($jsonCate, true);

        // $jsonMedia =  file_get_contents(public_path('json/media.json'));
        // $dataMedia = json_decode($jsonMedia, true);

        // $jsonFileContentsArticle = file_get_contents(public_path('json/article.json'));
        // $articles = json_decode($jsonFileContentsArticle, true);

        // $jsonFileContentsLink = file_get_contents(public_path('json/link.json'));
        // $links = json_decode($jsonFileContentsLink, true);

        // $jsonFileContentsPage = file_get_contents(public_path('json/page.json'));
        // $pages = json_decode($jsonFileContentsPage, true);

        // $dateArray = [];
        // $publish = null;

        // $termArray = [];
        // $cateArray = [];
        // $mediaArray = [];


        // foreach($data as $key => $value){
        //     $termArray[$value['_id']['$oid']] = $key + 1;
        // }

        // foreach($dataCate as $key => $value){
        //     $cateArray[$value['_id']['$oid']] = $key + 1;
        // }

        // foreach($dataMedia as $key => $value){
        //     $mediaArray[$value['_id']['$oid']] = $key + 1;
        // }


        // // dd($mediaArray);

        // foreach ($articles as $key => $value) {


        //     // array_push($termArray, $array);
        //     // dd($value);

        //     if(isset($value['data_di_pubblicazione'])){
        //         try{
        //             $iso8601Datetime = $value['data_di_pubblicazione']['$date'];

        //             if(is_array($iso8601Datetime)){
        //                 $datetime = new DateTime($value['created_at']['$date']);
        //                 $publish = $datetime->format('Y-m-d H:i:s');
        //             }else{
        //                 $datetime = new DateTime($iso8601Datetime);
        //                 $publish = $datetime->format('Y-m-d H:i:s');
        //             }

        //         }catch(\Exception $error){
        //             dd($error);
        //         }
        //     }

        //     $category = null;
        //     $persone = null;
        //     $locandina = null;
        //     $gallery = null;
        //     $altri_file = null;
        //     $interviste_e_dichiarazioni = null;
        //     $rassegna_stampa = null;
        //     $sotto_titolo = null;
        //     $citta = null;
        //     $riassunto = null;
        //     $teatro = null;
        //     $testo_libero_locandina = null;
        //     $body = null;
        //     $immagine_in_evidenza = null;

        //     if(isset($value['categorie']) && !empty($value['categorie'])){
        //         foreach($value['categorie'] as $keycategory => $categor){

        //             if(isset($termArray[$categor])){
        //             $value['categorie'][$keycategory] = $termArray[$categor];

        //             }else{
        //                 $value['categorie'][$keycategory] = 1;
        //             }
        //         }
        //         // $category = json_encode($value['categorie']);

        //         $category = $value['categorie'][0];

        //         // dd($category);
        //     }

        //     // if(isset($value['locandina'])){
        //     //     $locandina = json_encode($value['locandina']);
        //     // }

        //     if(isset($value['locandina'])){

        //         if(count($value['locandina']) > 0){
        //             foreach ($value['locandina'] as $keyloc => $loca){
        //                 if(isset($loca['etichetta-personaggi']) && !empty($loca['etichetta-personaggi'])){
        //                     foreach($loca['etichetta-personaggi'] as  $keyeti => $eti){
        //                         if(!empty($eti["etichetta"])){
        //                             $value['locandina'][$keyloc]['etichetta-personaggi'][$keyeti]['etichetta'] = $termArray[$eti['etichetta']];
        //                         }
        //                         foreach($eti['persone'] as $kerperso => $perso){
        //                             if(isset($perso['persone']) && !empty($perso['persone'])){
        //                                 $value['locandina'][$keyloc]['etichetta-personaggi'][$keyeti]['persone'][$kerperso]['persone'] =  $termArray[$perso['persone']];
        //                             }
        //                             // dd($perso);
        //                         }
        //                     }
        //                 }

        //             }
        //             $locandina = json_encode($value['locandina']);
        //         }

        //     }

        //     if(isset($value['persone']) && !empty($value['persone'])){

        //         foreach ($value['persone'] as $keyperson => $perso){
        //             if(isset($termArray[$perso])){
        //             $value['persone'][$keyperson] = $termArray[$perso];

        //             }else{
        //                 $value['persone'][$keyperson] = 1;
        //             }
        //         }

        //         $persone = json_encode($value['persone']);
        //     }



        //     // dd($value);

        //     // if(isset($value['persone'])){
        //     //     $persone = json_encode($value['persone']);
        //     // }

        //     if(isset($value['gallery']) && !empty($value['gallery'])){
        //         foreach($value['gallery'] as $keygallery => $gallry){
        //             if(isset($mediaArray[$gallry['id_media']])){
        //                 $value['gallery'][$keygallery]['id_media'] = $mediaArray[$gallry['id_media']];
        //             }else{
        //                 $value['gallery'][$keygallery]['id_media'] = 1;
        //             }
        //         }
        //         $gallery = json_encode($value['gallery']);
        //     }

        //     if(isset($value['altri_file']) && !empty($value['altri_file'])){
        //         foreach($value['altri_file'] as $keyaltri => $altri){

        //             if(isset($altri['id']) && isset($mediaArray[$altri['id']])){
        //                 $value['altri_file'][$keyaltri]['id'] = $mediaArray[$altri['id']];
        //             }else{
        //                 $value['altri_file'][$keyaltri]['id'] = 1;
        //             }
        //         }
        //         $altri_file = json_encode($value['altri_file']);
        //     }

        //     if(isset($value['interviste_e_dichiarazioni'])){
        //         $interviste_e_dichiarazioni = json_encode($value['interviste_e_dichiarazioni']);
        //     }

        //     if(isset($value['rassegna_stampa']) && !empty($value['rassegna_stampa'])){
        //         if(isset($value['rassegna_stampa']['file'])){
        //          foreach($value['rassegna_stampa']['file'] as $keyfile => $file){
        //             if(array_key_exists($file['id'], $mediaArray)){
        //                 $value['rassegna_stampa']['file'][$keyfile]['id'] = $mediaArray[$file['id']];
        //             }
        //          }
        //         }
        //        $rassegna_stampa = json_encode($value['rassegna_stampa']);
        //     }

        //     if(isset($value['sotto_titolo'])){
        //         $sotto_titolo = $value['sotto_titolo'];
        //     }

        //     if(isset($value['citta'])){
        //         $citta = $value['citta'];
        //     }

        //     if(isset($value['riassunto'])){
        //         $riassunto = $value['riassunto'];
        //     }

        //     if(isset($value['teatro'])){
        //         $teatro = $value['teatro'];
        //     }

        //     if(isset($value['testo_libero_locandina'])){
        //         $testo_libero_locandina = $value['testo_libero_locandina'];
        //     }

        //     if(isset($value['body'])){
        //         $body = $value['body'];
        //     }

        //     if(isset($value['immagine_in_evidenza']) && !empty($value['immagine_in_evidenza'])){
        //         $immagine_in_evidenza = $mediaArray[$value['immagine_in_evidenza']];
        //         // dd($value['immagine_in_evidenza']);
        //     }

        //     if(isset($value['old_id'])){
        //         $old_id = $value['old_id'];
        //     }

        //     if(isset($value['status'])){
        //         $status = $value['status'];
        //     }

        //     if(isset($value['slug'])){
        //         $slug = $value['slug'];
        //     }

        //     if(isset($value['title'])){
        //         $title = $value['title'];
        //     }

        //     if(isset($value['type'])){
        //         $type = $value['type'];
        //     }

        //     Article::create([
        //         "type" => $type,
        //         "title" => $title,
        //         "citta" => $citta,
        //         "data_di_pubblicazione" => $publish,
        //         "immagine_in_evidenza" => $immagine_in_evidenza,
        //         "status" => $status,
        //         "old_id" => $old_id,
        //         "slug" => $slug,
        //         "updated_at" => $value['updated_at']['$date'],
        //         "created_at" => $value['created_at']['$date'],
        //         "body" => $body,
        //         "locandina" => $locandina,
        //         "persone" => $persone,
        //         "interviste_e_dichiarazioni" => $interviste_e_dichiarazioni,
        //         "rassegna_stampa" => $rassegna_stampa,
        //         "sotto_titolo" => $sotto_titolo,
        //         "riassunto" => $riassunto,
        //         "teatro" => $teatro,
        //         "testo_libero_locandina" => $testo_libero_locandina,
        //         "altri_file" => $altri_file,
        //         "categorie" => $category,
        //         "gallery" => $gallery
        //     ]);

        //         // $type = null;
        //         // $filename = null;
        //         // $file_path = null;
        //         // $extension = null;
        //         // $update = null;
        //         // $create = null;

        //         // if(isset($value['type'])){
        //         //     $type = $value['type'];
        //         // }
        //         // if(isset($value['filename'])){
        //         //     $filename = $value['filename'];
        //         // }
        //         // if(isset($value['file_path'])){
        //         //     $file_path = $value['file_path'];
        //         // }
        //         // if(isset($value['extension'])){
        //         //     $extension = $value['extension'];
        //         // }
        //         // if(isset($value['update_at'])){
        //         //     $update = $value['update_at']['$date'];
        //         // }

        //         // if(isset($value['update_at'])){
        //         //     $create = $value['created_at']['$date'];
        //         // }


        //     //  Media::create([
        //     //     'type' => $type,
        //     //     'filename' => $filename,
        //     //     'file_path' => $file_path,
        //     //     'extension' => $extension,
        //     //     'updated_at' => $update,
        //     //     'created_at' => $create
        //     //  ]);



        //     // $title = null;
        //     // $slug = null;
        //     // $body = null;
        //     // $create = null;
        //     // $update = null;


        //     // if(isset($value['title'])){
        //     //     $title = $value['title'];
        //     // }

        //     // if(isset($value['slug'])){
        //     //     $slug = $value['slug'];
        //     // }

        //     // if(isset($value['body'])){
        //     //     $body = $value['body'];
        //     // }

        //     // if(isset($value['created_at'])){
        //     //    $create = $value['created_at']['$date'];
        //     // }
        //     // if(isset($value['updated_at'])){
        //     //     $update = $value['updated_at']['$date'];
        //     //  }


        //     // Page::create([
        //     //     'title' => $title,
        //     //     'slug' => $slug,
        //     //     'updated_at' => $update,
        //     //     'created_at' => $create,
        //     //     'body' => $body
        //     // ]);

        //     // $vab_id = 0;


        //     // if($value['vocabulary_id'] === '586689f602a5390b26267224'){
        //     //     $vab_id = 1;
        //     // }else if($value['vocabulary_id'] === '586689ec02a53903f0653055'){
        //     //     $vab_id = 2;
        //     // }else if($value['vocabulary_id'] === '586689f602a5390b26267225'){
        //     //     $vab_id = 3;
        //     // }else if($value['vocabulary_id'] === '586689f602a5390b26267223'){
        //     //     $vab_id = 4;
        //     // }


        //     // $create = null;
        //     // $update = null;
        //     // $termin = null;
        //     // $slug = null;

        //     // if(isset($value['created_at'])){
        //     //    $create = $value['created_at']['$date'];
        //     // }
        //     // if(isset($value['updated_at'])){
        //     //     $update = $value['updated_at']['$date'];
        //     //  }

        //     // if(isset($value['termine'])){
        //     //     $termin = $value['termine'];
        //     // }
        //     // if(isset($value['slug']) && !empty($value['slug'])){
        //     // // dd($value['slug']);
        //     //     $slug = $value['slug'];
        //     // }


        //     // Term::create([
        //     //     'termine' => $termin,
        //     //     'vocabulary_id' => $vab_id,
        //     //     'slug' => $slug,
        //     //     'created_at' => $create,
        //     //     'updated_at' => $update
        //     // ]);

        //     // Vocabulary::create([
        //     //     'title' => $value['title'],
        //     //     'slug' => $value['slug'],
        //     //     'created_at' => $value['created_at']['$date'],
        //     //     'updated_at' => $value['updated_at']['$date']
        //     // ]);

        //     // User::create([
        //     //     'name' => $value['name'],
        //     //     'email' => $value['email'],
        //     //     'password' => $value['password'],
        //     //     'slug' => $value['slug'],
        //     //     'remember_token' => $value['remember_token'],
        //     //     'created_at' => $value['created_at']['$date'],
        //     //     'updated_at' => $value['updated_at']['$date']
        //     // ]);
        //     // VideoCategory::create([
        //     //     'name' => $value['name'],
        //     //     'order' => $value['order'],
        //     //     'created_at' => $value['created_at']['$date'],
        //     //     'updated_at' => $value['updated_at']['$date']
        //     // ]);
        //     // Video::create([
        //     //     'title' => $value['title'],
        //     //     'link' => $value['link'],
        //     //     'description' => $value['description'],
        //     //     'category_id' => $key + 1,
        //     //     'order' => $value['order'],
        //     //     'update_at' => $value['updated_at']['$date'],
        //     //     'created_at' => $value['created_at']['$date']
        //     // ]);




        //     //  $type = null;
        //     //  $title = null;
        //     //  $descrizione = null;
        //     //  $youtubeCode = null;

        //     // if(isset($value['type'])){
        //     //     $type = $value['type'];
        //     // }

        //     // if(isset($value['title'])){
        //     //     $title = $value['title'];
        //     // }

        //     // if(isset($value['descrizione'])){
        //     //     $descrizione = $value['descrizione'];
        //     // }

        //     // if(isset($value['youtubeCode'])){
        //     //     $youtubeCode = $value['youtubeCode'];
        //     // }


        //     // Link::create([
        //     //     "type" => $type,
        //     //     "title" => $title,
        //     //     "descrizione" => $descrizione,
        //     //     "youtubeCode" => $youtubeCode
        //     // ]);

        // }



        // dd("done");
        // // dd($articles);

    }
}
