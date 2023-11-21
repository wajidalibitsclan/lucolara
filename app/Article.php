<?php

namespace App;

use App\Http\Controllers\PhotoController;
use App\Observers\ArticleObservers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\Sluggable;



class Article extends Model
{
    use HasFactory;
	use Sluggable;
	protected $table = 'articles';
	protected $dates = ['updated_at', 'created_at', 'data_di_pubblicazione'];
	public $tipologia = 'articolo';

    protected $casts = [
        'persone' => 'array',
    ];


    protected $fillable = [
        "type",
        "title",
        "citta",
        "data_di_pubblicazione",
        "immagine_in_evidenza",
        "status",
        "old_id",
        "slug",
        "body",
        "locandina",
        "persone",
        "interviste_e_dichiarazioni",
        "rassegna_stampa",
        "sotto_titolo",
        "riassunto",
        "teatro",
        "testo_libero_locandina",
        "altri_file",
        "categorie",
        "gallery"
    ];

	public function __construct( array $attributes = array() ) {
		$this->type = $this->tipologia;
		parent::__construct( $attributes );
	}

	public function getPermalink(){
		return route('dettaglioArticolo', ['object' => $this->type, 'slug' => $this->slug]);
	}

	public function hasImmagineInevidenza(){
        // dd($this->immagine_in_evidenza);
		if(isset($this->immagine_in_evidenza) && !empty($this->immagine_in_evidenza)){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * Recupero url immagine in evidenza
	 * @param string $size
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function getImmagineInEvidenza($size = 'original'){
		$photo_controller = new PhotoController;
		return $photo_controller->show($this->immagine_in_evidenza, $size);
	}

	/**
	 * Gestione slug su title
	 * @return array
	 */
	public function sluggable() : array
	{
		return [
			'slug' => [
				'source' => 'title'
			]
		];
	}

	public static function boot() {
		parent::boot();
		Article::observe(new ArticleObservers());
	}



	public function getPersoneAttribute($value)
	{
		if(isset($value) && !empty($value)){
			$terms = \App\Term::find($value);
			if($terms){
				$value = $terms;
			}
		}
		return $value;
	}


    public function terms()
    {
        return $this->belongsToMany(Term::class);
    }

}
