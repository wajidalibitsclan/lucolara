<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\User;
use App\Media;
use Carbon\Carbon;
use App\Article;
use App\Term;


class AdminController extends Controller
{
	/**
	 * AdminController constructor.
	 * Tutti i controller sono protetti da password
	 */
	public function __construct() {
        $this->middleware('auth');
    }

	/**
	 * Controller per la gestione della dashboard
	 */
	public function dashboard(){
		return view('admin.page.dashboard');
    }

    public function index($object){
		$class = ucfirst($object);
	    $class = "\App\\Article";
		$dec_2015 = Carbon::createFromDate(2015, 12, 31);
		$objects = new $class;
		if($object == 'lucaronconi1933_2015'){
			$results = $objects::whereIn('type', article_types())->where('data_di_pubblicazione','<',$dec_2015)->orderBy('data_di_pubblicazione', 'desc')->paginate(15);
		}elseif($object == 'santacristina'){
			$results = $objects::whereIn('type', santacristina_types())->orderBy('data_di_pubblicazione', 'desc')->paginate(15);
		}elseif($object == 'dopo'){
			$results = $objects::whereIn('type', article_types())->where('data_di_pubblicazione','>',$dec_2015)->orderBy('data_di_pubblicazione', 'desc')->paginate(15);
		}elseif($object == 'biografia'){
			$results = $objects::where('type', $object)->orderBy('data_di_pubblicazione', 'desc')->paginate(15);
		}
	    $results->object = $object;
	    if (View::exists('admin.page.' . $object . 'List')) {
		    return view('admin.page.' . $object . 'List')->with(compact('results'));
	    }else{
		    return view('admin.page.defaultList')->with(compact('results'));
	    }
    }
    public function edit($object, $id){
		$dec_2015 = Carbon::createFromDate(2015, 12, 31);
	    $class = ucfirst($object);
	    $class = "\App\\Article";
	    $class = new $class;
	    $result = $class::find($id);
	    if(isset($result->gallery) && !empty($result->gallery)){
		    $media = [];
		    foreach ($result->gallery as $gallery_field){
			    $media_type = ucfirst($gallery_field['media_type']);
			    $media_class = $class = "\LucaRonconi\\$media_type";
			    $media_add = $media_class::find($gallery_field['id_media']);
			    if($media_add){
				    $media[] = $media_add;
			    }
		    }
		    $result->gallery = $media;
	    }
		//dd($result->categorie);
		if(is_array($result->categorie) && isset($result->categorie[0]) && $result->categorie[0] != ''){
			$category = Term::find($result->categorie[0]);
			$result->category = $category->slug;
		}else{
			$result->category = $result->type;
		}
		if(in_array($result->type, article_types())){
			$result->object = $result->data_di_pubblicazione > $dec_2015 ? 'dopo_lucaronconi' : 'lucaronconi1933_2015';
		}elseif(in_array($result->type, santacristina_types())){
			$result->object = 'santacristina';
		}elseif($result->type== 'biografia'){
			$result->object = 'biografia';
		}

		//set subcategories
		$subcategories = [];
		if($result->object == 'lucaronconi1933_2015'){
			$subcategories = luca_1933_submenus();
		}elseif($result->object == 'dopo_lucaronconi'){
			$subcategories = dopo_submenus();
		}elseif($result->object == 'santacristina'){
			$subcategories = santacristina_submenus();
		}elseif($result->object == 'biografia'){
			$subcategories = biografia_submenus();
		}
		$result->subcategories = $subcategories;
	    if (View::exists('admin.page.edit.' . $object . 'Edit')) {
		    return view('admin.page.edit.' . $object . 'Edit')->with(compact('result'));
	    }else{
	        if(View::exists('admin.page.' . $object . 'Edit')){
                return view('admin.page.' . $object . 'Edit')->with(compact('result'));
            }else {
                return view('admin.page.edit.defaultEdit')->with(compact('result'));
            }
	    }
    }

    public function create($object){
	    if (View::exists('admin.page.add.' . $object . 'Add')) {
		    return view('admin.page.add.' . $object . 'Add')->with(compact('object'));
	    }else{
		    return view('admin.page.add.defaultAdd')->with(compact('object'));
	    }
	}

    public function update($object, $id, Request $request){
	    $class = ucfirst($object);
	    $class = "\App\\Article";
	    $class = new $class;
		$class = $class::find($id);
		//Titolo
	    $class->title = $request->input('title');
	    if($request->has('sotto_titolo')){
	    	$class->sotto_titolo = $request->input('sotto_titolo');
	    }else{
		    $class->sotto_titolo = '';
	    }

	    if($request->has('riassunto')){
		    $class->riassunto = trim($request->input('riassunto'));
	    }else{
	    	$class->riassunto = '';
	    }
	    if($request->has('teatro')){
		    $class->teatro = trim($request->input('teatro'));
	    }else{
		    $class->teatro = '';
	    }
	    if($request->has('citta')){
		    $class->citta = trim($request->input('citta'));
	    }else{
		    $class->citta = '';
	    }
	    //Contenuto
	    $class->body = $request->body;
	    //Locandina
	    $categoria_persone = [];
	    if($request->has('locandina')){
		    $locandinaarray = [];
		    foreach ($request->input('locandina') as $key_oreder => $value){

		    	if(isset($value['tipologia_blocco']) && $value['tipologia_blocco'] == '') continue;
				//Elimino gli elementi vuoti per il bolocco etichette e personaggi

		    	if(isset($value['etichetta-personaggi']) && !empty($value['etichetta-personaggi'])){
		    		$skip = true;
		    		foreach($value['etichetta-personaggi'] as $key_parent => $etichetta_persoanggi){
		    			foreach($etichetta_persoanggi['persone'] as $key => $persona){
		    				if(isset($persona['persone']) && !empty($persona['persone'])){
		    					if(!in_array($persona['persone'], $categoria_persone)){
								    $categoria_persone[] = $persona['persone'];
							    }
							    $skip = false;
						    }else{
		    					unset($value['etichetta-personaggi'][$key_parent]['persone'][$key]);
						    }
					    }
					    if($skip){
						    unset($value['etichetta-personaggi'][$key_parent]);
					    }
				    }

			    }


			    if(isset($value['personaggio-interprete']) && !empty($value['personaggio-interprete'])) {
				    $skip = true;
					foreach($value['personaggio-interprete'] as $key => $personaggio_interprete){
						if((isset($personaggio_interprete['ruolo']) && !empty($personaggio_interprete['ruolo']))
							&& (isset($personaggio_interprete['persone']) && !empty($personaggio_interprete['persone']))
						){
							$skip = false;
							if(!in_array($personaggio_interprete['persone'], $categoria_persone)){
								$categoria_persone[] = $personaggio_interprete['persone'];
							}
						}else{
							unset($value['personaggio-interprete'][$key]);
						}
					}
					if($skip){
						continue;
					}
			    }
		    	$locandinaarray[$key_oreder] = $value;
		    }

		    $class->locandina = array_values($locandinaarray);
	    }
	    $class->testo_libero_locandina = trim($request->input('testo_libero_locandina'));
		//dd(array_splice($categoria_persone, 10, 26));
		$class->persone = $categoria_persone;
	    //Verifico lo stato
	    if($request->has('status') && $request->input('status') == 'on'){
		    $class->status = 1;
	    }else{
		    $class->status = 2;
	    }
	    //Salvo l'immagine in evidenza
	    if($request->has('immagine_in_evidenza_id')){
		    $class->immagine_in_evidenza = $request->input('immagine_in_evidenza_id');
	    }
	    //Salvo le interviste
	    if($request->has('interviste_e_dichiarazioni') && !empty($request->input('interviste_e_dichiarazioni'))){
	    	$interviste_edichiarazioni = $request->input('interviste_e_dichiarazioni');
		    $interviste_edichiarazioni = $request->all();
		    $interviste_edichiarazioni = $interviste_edichiarazioni['interviste_e_dichiarazioni'];
		    if(!isEmptyValue($interviste_edichiarazioni)){
			    $save_interviste = [];
			    if(isset($interviste_edichiarazioni['file']) && !empty($interviste_edichiarazioni['file'])){
				    //$file = $iterviste_edichiarazioni['documento_allegato'];
				    foreach($interviste_edichiarazioni['file'] as $key =>$file){
					    //if(!isset($file['documento_interviste'])) continue;
					    if(isset($file['etichetta_documento']) && !empty($file['etichetta_documento'])){
						    $save_interviste['file'][$key]['etichetta_documento'] = $file['etichetta_documento'];
					    }
					    if(isset($file['documento_interviste'])  && !empty($file['documento_interviste'])){
						    $file_to_attach = new \App\Filemedia();
						    $id_file = $file_to_attach->storeAndCreate($file['documento_interviste'], '');
						    $save_interviste['file'][$key]['id'] = $id_file;
					    } elseif (isset($file['documento_interviste_id_file']) && !empty($file['documento_interviste_id_file'])){
						    $save_interviste['file'][$key]['id'] = $file['documento_interviste_id_file'];
					    }

				    }

			    }
			    if(isset($interviste_edichiarazioni['elenco']) && !empty($interviste_edichiarazioni['elenco'])){
				    $save_interviste['elenco'] =  $interviste_edichiarazioni['elenco'];
			    }
			    $class->interviste_e_dichiarazioni = $save_interviste;
		    }else{
			    $class->interviste_e_dichiarazioni = [];
		    }
	    }
	    //Salvo la rassgna stampa
	    if($request->has('rassegna_stampa')){
		    $rassegna_stampa = $request->all();
		    $rassegna_stampa = $rassegna_stampa['rassegna_stampa'];
			//dd($rassegna_stampa);
		    if(!isEmptyValue($rassegna_stampa)){
			    $save_rassgna = [];
			    if(isset($rassegna_stampa['file']) && !empty($rassegna_stampa['file'])){
				    //$file = $iterviste_edichiarazioni['documento_allegato'];
				    foreach($rassegna_stampa['file'] as $key =>$file){
					    //if(!isset($file['documento_interviste'])) continue;
					    if(isset($file['etichetta_documento']) && !empty($file['etichetta_documento'])){
						    $save_rassgna['file'][$key]['etichetta_documento'] = $file['etichetta_documento'];
					    }
					    if(isset($file['documento_interviste'])  && !empty($file['documento_interviste'])){
						    $file_to_attach = new \App\Filemedia();
						    $id_file = $file_to_attach->storeAndCreate($file['documento_interviste'], '');
						    $save_rassgna['file'][$key]['id'] = $id_file;
					    } elseif (isset($file['documento_interviste_id_file']) && !empty($file['documento_interviste_id_file'])){
						    $save_rassgna['file'][$key]['id'] = $file['documento_interviste_id_file'];
					    }

				    }

			    }else{
			    	$save_rassgna['file'] = [];
			    }

			    if(isset($rassegna_stampa['titolo']) && !empty($rassegna_stampa['titolo'])){
				    $save_rassgna['titolo'] = $rassegna_stampa['titolo'];
			    }
			    if(isset($rassegna_stampa['descrizione']) && !empty($rassegna_stampa['descrizione'])){
				    $save_rassgna['descrizione'] = $rassegna_stampa['descrizione'];
			    }
				if(isset($rassegna_stampa['elenco']) && !empty($rassegna_stampa['elenco'])){
					$save_rassgna['elenco'] =  $rassegna_stampa['elenco'];
				}
			    $class->rassegna_stampa = $save_rassgna;
		    }else{
			    $class->rassegna_stampa = [];
		    }
	    }

		if($request->has('altri_file')){
			$altri_file = $request->all();
			$altri_file = $altri_file['altri_file'];
			$save_altri_file = [];
			if(isset($altri_file) && !empty($altri_file)){
				//$file = $iterviste_edichiarazioni['documento_allegato'];
				foreach($altri_file as $key =>$file){
					//if(!isset($file['documento_interviste'])) continue;
					if(isset($file['etichetta_documento']) && !empty($file['etichetta_documento'])){
						$save_altri_file[$key]['etichetta_documento'] = $file['etichetta_documento'];
					}
					if(isset($file['descrizione_documento']) && !empty($file['descrizione_documento'])){
						$save_altri_file[$key]['descrizione_documento'] = $file['descrizione_documento'];
					}
					if(isset($file['documento_interviste'])  && !empty($file['documento_interviste'])){
						$file_to_attach = new \App\Filemedia();
						$id_file = $file_to_attach->storeAndCreate($file['documento_interviste'], '');
						$save_altri_file[$key]['id'] = $id_file;
					} elseif (isset($file['documento_interviste_id_file']) && !empty($file['documento_interviste_id_file'])){
						$save_altri_file[$key]['id'] = $file['documento_interviste_id_file'];
					}
				}
			}
			$class->altri_file = $save_altri_file;
		}
	    if($request->has('gallery') && !empty($request->input('gallery'))){
		    if(isset($class->gallery) && !empty($class->gallery)){
			    $class->gallery = '';
			    $class->save();
		    }
		    foreach ($request->input('gallery') as $item_gallery){
				$add_media = new \App\Http\Controllers\MediaController();
			    $add_media->addMediaToArticle(reset($item_gallery), key($item_gallery), $id, $object, 'gallery');
		    }
	    }else{
	    	$class->gallery = [];
	    }

	    //Salvo la data associata all'articolo
	    if($request->has('data_di_pubblicazione') && !empty($request->input('data_di_pubblicazione'))){
		    $class->data_di_pubblicazione = Carbon::createFromFormat('d/m/Y', $request->input('data_di_pubblicazione'));
	    }

	    if($request->has('categorie')){
			$cat = $request->input('categorie');
			if($cat != 'extra' && (in_array($cat,article_types()) || in_array($cat,dopo_article_types()) || in_array($cat,santacristina_types()) || $cat == 'biografia')){
				$class->type = $cat;
				$class->categorie = null;
			}
			else{
				$term = Term::whereSlug($cat)->first();
				if($term){
					$class->categorie = [$term->id];
					$class->type = 'extra';
				}else{
					$class->categorie = [];
				}
			}
	    }elseif (isset($class->categorie)){
	    	$class->categorie = [];
	    }

	    $class->save();
	    return redirect()->route('adminEdit', ['object' => $class->type, 'id' => $class->id]);
    }

	public function insert($object, Request $request){
		$class = ucfirst($object);
		$class = "\LucaRonconi\\Article";
		$class = new $class;

		$class->title = $request->input('title');
		$class->body = $request->body;

		if($request->has('status') && $request->input('status') == 'on'){
			$class->status = 1;
		}else{
			$class->status = 0;
		}
		if($request->has('immagine_in_evidenza_id')){
			$class->immagine_in_evidenza = $request->input('immagine_in_evidenza_id');
		}
		if($request->has('categorie')){
			$cat = $request->input('categorie');
			if(in_array($cat,article_types()) || in_array($cat,dopo_article_types()) || in_array($cat,santacristina_types()) || $cat == 'biografia'){
				$class->type = $cat;
				$class->categorie = null;
			}else{
				$term = Term::whereSlug($cat)->first();
				if($term){
					$class->categorie = [$term->id];
					$class->type = 'extra';
				}else{
					$class->categorie = [];
				}
			}
	    }elseif (isset($class->categorie)){
	    	$class->categorie = [];
	    }

		$class->save();

		return redirect()->route('adminEdit', ['object' => $object, 'id' => $class->id]);

	}

	public function delete(Request $request){
		if($request->has('id_del')){
			$article = \App\Article::destroy($request->input('id_del'));
			return response()->json($request->input('id_del'));
		}
	}

	public function search(Request $request){
		if($request->has('s')){
			$search = new \App\RonconiElasticSearch();
			$risultati = $search->fullSerach($request->input('s'));
			$termine = $request->input('s');
			return view('admin.page.search.list')->with(compact('risultati', 'termine'));
		}
	}
	public function get_subcategory($categorie){
		$select_html = '';
		$submenus = [];
		if($categorie == 'lucaronconi1933_2015'){
			$submenus = luca_1933_submenus();
		}elseif($categorie == 'dopo_lucaronconi'){
			$submenus = dopo_submenus();
		}elseif($categorie == 'santacristina'){
			$submenus = santacristina_submenus();
		}elseif($categorie == 'biografia'){
			$submenus = biografia_submenus();
		}
		foreach ($submenus as $key=>$menu){
			$select_html .= '<option value="'.$key.'">'.strtoupper($menu['name']).'</option>';
		}
		return $select_html;
	}
}
