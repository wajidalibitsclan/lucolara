@extends('layouts.app')
@section('immagine_in_evidenza'){{ asset('assets/img/foto_archivio/foto_ricerca.jpg') }}@endsection
@section('title', 'Risultati di ricerca per: ' . $termine . ' - Luca Ronconi')
@section('content')
    <div class="page-body advanced-search">

        <div class="container breadcrumb">
            <div class="row">
                <div class="col-sm-12 hidden-xs">
                    <a href="/" title="">Home</a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <h2><span>Risultati di ricerca per: </span>{{ $termine }}</h2>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xs-12">

                    <form action="{{ route('search') }}" method="get">

                        <label for="ricerca">Nuova ricerca</label>

                        <input id="ricerca" class="form-control form-control-lg" name="s" type="text"
                            placeholder="Cerca">

                        <p class="form-text text-muted">
                            Immetti una nuova ricerca.
                        </p>
                    </form>

                </div>
            </div>
        </div>

        <div class="container risultati">
            <div class="row">

                <div class="col-xs-12">
                    <hr>
                    @if (isset($risultati) && !empty($risultati))
                        <ul>
                            @foreach ($risultati as $risultato)
                                <li class="{{ $risultato['_source']['type'] }}">
                                    <div class="titolo"><a
                                            href="{{ route('dettaglioArticolo', ['object' => $risultato['_source']['type'], 'slug' => $risultato['_source']['slug']]) }}"
                                            title="">{{ $risultato['_source']['title'] }}</a></div>
                                    @if (isset($risultato['_source']['data_di_pubblicazione']) && !empty($risultato['_source']['data_di_pubblicazione']))
                                        <div class="date">
                                            @php
                                                $data = explode(' ', $risultato['_source']['data_di_pubblicazione']);
                                                $data = explode('-', $data[0]);
                                            @endphp
                                            <span class="dd">{{ $data[2] }}</span>/<span
                                                class="mm">{{ $data[1] }}</span>/<span
                                                class="yy">{{ $data[0] }}</span>
                                        </div>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
