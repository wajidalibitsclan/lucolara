@extends('admin.app')
@section('main-content')
    <div id="page_content">
        <div id="page_content_inner">

            <div class="md-card">
                <div class="md-card-content">
                    <p class="uk-text-small uk-text-muted">{{count($risultati)}} risultati</p>
                    <ul class="search_list">
                        @foreach( $risultati as $risultato)
                        <li>
                            <p>Tipologia: {{$risultato['_source']['type']}}</p>
                            <h3 class="search_list_heading"><a href="{{route('adminEdit', ['object' => $risultato['_source']['type'], 'id' => $risultato['_id']])}}">{{$risultato['_source']['title']}}</a></h3>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>

        </div>
    </div>
@endsection