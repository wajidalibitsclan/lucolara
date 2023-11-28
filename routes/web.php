<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use App\Article;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TermAdminController;
use App\Http\Controllers\Admin\VideoCategoryController;
use App\Http\Controllers\Admin\VideoController;
use App\Http\Controllers\Admin\VocabularyAdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Front\ArticleController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\JSONConvertorController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PhotoController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', [HomeController::class, 'index'])->name('home');

Auth::routes();
Route::get('logout', [LoginController::class, 'logout']);
Route::get('/home', [HomeController::class, 'index']);
Route::get('/scheda/{object}/{slug}', [ArticleController::class, 'show'])->name('dettaglioArticolo');
Route::get('/archivio/{object}/{taxonomy?}/{termine?}', [ArticleController::class, 'index'])->name('listaArticoli');
Route::get('/dopo/{object}/{taxonomy?}/{termine?}', [ArticleController::class, 'dopo'])->name('listaArticoliDopo');
Route::get('/termini/{vocabolario}/{slug}', [ArticleController::class, 'termList'])->name('termList');
Route::get('/ricerca', [ArticleController::class, 'search'])->name('search');
Route::get('/pagina/{slug}', [PageController::class, 'show'])->name('dettaglioPagina');
Route::get('/videos', [VideoController::class, 'index'])->name('videos.index');

//Redirect 301 dei vecchi contenuti
Route::get('/old', function (Request $request) {
	if ($request->has('num')) {
		$article = Article::where('old_id', (int)$request->input('num'))->first();
		if (!$article) {
			abort(404);
		} else {
			return Redirect::to(route('dettaglioArticolo', ['object' => $article->type, 'slug' => $article->slug]), 301);
		}
	}
});

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Tutte le Route seguenti fanno riferimento all area di amministrazione
|
*/
Route::group(['middleware' => 'auth'], function () {
	Route::group(['prefix' => 'admin'], function () {
		Route::get('/', [AdminController::class, 'dashboard'])->name('adminHome');
		Route::get('/post/{object}', [AdminController::class, 'index'])->name('adminList');
		Route::get('/post/{object}/edit/{id}', [AdminController::class, 'edit'])->name('adminEdit');
		Route::post('/post/{object}/update/{id}', [AdminController::class, 'update'])->middleware('RegisterPhotos')->name('adminUpdate');
		Route::get('/post/{object}/add', [AdminController::class, 'create'])->name('adminAdd');
		Route::post('/post/{object}/add', [AdminController::class, 'insert'])->middleware('RegisterPhotos')->name('adminAddInsert');
		Route::post('/post/delete/', [AdminController::class, 'delete'])->name('adminDel');
		//Media
		Route::post('/addMedia', [MediaController::class, 'addMediaToGallery'])->middleware('RegisterPhotos')->name('AddMedia');
		Route::get('/media', [MediaController::class, 'index'])->name('mediaList');
		Route::post('/media/ajax/{id}', [PhotoController::class, 'ajaxUpdate'])->name('mediaAjaxUpload');
		Route::post('/link/ajax/{id}', [LinkController::class, 'ajaxUpdate'])->name('linkAjaxUpload');
		Route::post('/locandina/ajax/{id}', [PhotoController::class, 'ajaxLocandina'])->name('ajaxLocandina');

		//Gestione Vocabilari e Termini
		Route::get('/vocabolari', [VocabularyAdminController::class, 'index'])->name('listaVocabolari');
		Route::get('/vocabolari/add', [VocabularyAdminController::class, 'create'])->name('creaVocabolario');
		Route::post('/vocabolari/store', [VocabularyAdminController::class, 'store'])->name('storeVocabolario');
		Route::get('/vocabolari/edit/{objectid}', [VocabularyAdminController::class, 'edit'])->name('editVocabolario');
		Route::post('/vocabolari/update/{objectid}', [VocabularyAdminController::class, 'update'])->name('updateVocabolario');

		Route::get('/vocabolario/{objectid}/termini', [TermAdminController::class, 'index'])->name('listaTermini');
		Route::get('/vocabolario/{objectid}/termini/add', [TermAdminController::class, 'create'])->name('creaTermine');
		Route::get('/vocabolario/{objectid}/termine/edit/{termid}', [TermAdminController::class, 'edit'])->name('editTermine');
		Route::post('/vocabolario/{objectid}/termine/update/{termid}/{ajax?}', [TermAdminController::class, 'update'])->name('updateTermine');
		Route::post('/vocabolario/{objectid}/termini/store', [TermAdminController::class, 'store'])->name('storeTerm');
		Route::get('/vocabolario/json/temine/', [TermAdminController::class, 'getTermJson'])->name('getJsonTerm');
		//Gestione Pagine
		Route::get('/pagine', [PageController::class, 'index'])->name('listPage');
		Route::get('/pagina/{objectId}', [PageController::class, 'edit'])->name('modificaPagina');
		Route::post('/pagina/{objectId}', [PageController::class, 'update'])->name('updatePagina');
		//Category
		Route::get('/category/list', [CategoryController::class, 'index'])->name('category.list');
		Route::get('/category/add', [CategoryController::class, 'add'])->name('category.add');
		Route::post('/category/added', [CategoryController::class, 'store'])->name('added.category');
		//Ricerca
		Route::get('/ricerca', [AdminController::class, 'search'])->name('searchAdmin');
		//Video
		Route::resource('videos', VideoController::class, ['names' => 'admin.videos']);
		Route::resource('video_categories', VideoCategoryController::class, ['names' => 'admin.video_categories']);
		//Get subcategory select
		Route::get('/get_subcategory/{categorie}', [AdminController::class, 'get_subcategory'])->name('admin.get_subcategory');
	});
});





Route::get('/json/data/hai/na/kuin', [JSONConvertorController::class, 'videos']);
