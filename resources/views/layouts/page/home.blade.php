@extends('layouts.app')
@section('title','Luca Ronconi' )
@section('meta')
    <meta name="description"  content="Sito dedicato alla produzione artistica di Luca Ronconi, strumento multiforme e in continuo divenire come l'opera del Maestro." />
    <link rel="canonical" href="{{url('/')}}" />
    <meta property="og:title" content="Luca Ronconi" />
    <meta property="og:url" content="{{url('/')}}" />
    <meta property="og:image" content="{{asset('assets/img/foto_archivio/foto_home.jpg')}}" />
    <meta property="og:site_name" content="Luca Ronconi" />
    <meta property="og:description" content="Sito dedicato alla produzione artistica di Luca Ronconi, strumento multiforme e in continuo divenire come l'opera del Maestro." />
@endsection


@section('immagine_in_evidenza', asset('assets/img/foto_archivio/foto_home.jpg'))
@section('content')
    <div class="page-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                        @foreach($articoli as $articolo)
                            @php
                                $dt = \Carbon\Carbon::parse($articolo->data_di_pubblicazione);
                                    if(!isset($anno)){
                                        $anno = $dt->year;
                                        echo '<span class="year">' . $anno .'</span>';
                                    }else{
                                       if($dt->year != $anno){
                                           $anno = $dt->year;
                                           echo '<span class="year">' . $anno .'</span>';
                                       }
                                    }
                                    if($articolo->type == 'biografia' && isset($articoli->biografia)){
                                        $link = route('dettaglioPagina', ['slug' => $articoli->biografia->slug]);
                                    }else{
                                        $link = $articolo->getPermalink();
                                    }

                            @endphp
                            <a href="{{$link}}" title="Vai al dettaglio {{$articolo->title}}" class="milestone {{$articolo->type}}">{{$articolo->title}}</a>
                        @endforeach
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
