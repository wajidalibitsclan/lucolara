@extends('layouts.app')

@section('immagine_in_evidenza'){{asset('assets/img/foto_archivio/foto_ricerca.jpg')}}@endsection
@section('title', '404 Pagina non trovata - Luca Ronconi' )

@section('content')

    <div class="page-body page-404">

        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center">
                    <h1>Pagina non trovata!</h1>
                    <p>Quello che cercavi non è più qui.</p>
                    <p>Prova a fare una <a href="/search/" title="Ricerca avanzata">nuova ricerca</a> o ricomincia dalla <a href="{{route('home')}}" title="">Homepage</a>.</p>
                </div>
            </div>
        </div>

    </div>
@endsection