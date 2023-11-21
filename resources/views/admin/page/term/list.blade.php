@extends('admin.app')

@section('htmlheader_title')
    Lista Vocabolari
@endsection


@section('main-content')
    <div id="page_content">
        <div id="top_bar">
            <ul id="breadcrumbs">
                <li><a href="{{route('listaVocabolari')}}">Vocabolari</a></li>
            </ul>
        </div>
        <div id="page_content_inner">
            <h3 class="heading_b uk-margin-bottom">Lista termini del vocabolario {{ $termini->vocabolario->title}}</h3>
            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-width-medium-1-1">
                        <a class="md-btn md-btn-primary md-btn-wave-light md-btn-icon waves-effect waves-button waves-light" href="{{route('creaTermine', ['objectid' => $termini->vocabolario->_id])}}">
                            <i class="uk-icon material-icons">&#xE145;</i>
                            Aggiungi termine
                        </a>
                    </div>
                </div>
            </div>


            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-width-large-1-1 uk-width-medium-1-2">
                        <form action="{{route('listaTermini', ['objectid' => $termini->vocabolario->_id])}}" method="get">
                        <div class="uk-input-group">

                                <div class="md-input-wrapper">
                                    <label>Inserisci il temine di ricerca</label>
                                    <input name="s" type="text" class="md-input">
                                    <span class="md-input-bar "></span>
                                </div>
                                <span class="uk-input-group-addon">
                                    <input type="submit" class="md-btn" value="Cerca">
                                </span>

                        </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-overflow-container">
                        <table class="uk-table uk-table-nowrap table_check">
                            <thead>
                            <tr>
                                <th class="uk-width-4-10">Termine</th>
                                <th class="uk-width-2-10 uk-text-center">Modifica</th>
                                <th class="uk-width-2-10 uk-text-center">Elimina Termine</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($termini as $termine)
                                <tr id="{{$termine->_id}}">
                                    <td>{{$termine->termine}}</td>
                                    <td class="uk-text-center">
                                        <a href="{{route('editTermine', ['objectid' => $termini->vocabolario->_id, 'termid' => $termine->_id])}}"><i class="md-icon material-icons"></i></a>
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="#" class="delete_article" data-id="{{$termine->_id}}"><i class="md-icon material-icons">&#xE872;</i></a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    @if(isset($termini->links))
                    {{ $termini->links('admin.pagination.default') }}
                    @endif
                </div>
            </div>
        </div>
    </div>

@endsection

@push('specific_scripts')

@endpush

