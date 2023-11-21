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

            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-overflow-container">
                        <table class="uk-table uk-table-nowrap table_check">
                            <thead>
                            <tr>
                                <th class="uk-width-4-10">Nome vocabolario</th>
                                <th class="uk-width-2-10 uk-text-center">Modifica</th>
                                <th class="uk-width-2-10 uk-text-center">Lista termini</th>
                                <th class="uk-width-2-10 uk-text-center">Elimina Vocabolario</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($vocabolari as $vocabolario)
                                <tr id="{{$vocabolario->_id}}">
                                    <td>{{$vocabolario->title}}</td>
                                    <td class="uk-text-center">
                                        <a href="{{route('editVocabolario', ['objectid' => $vocabolario->_id])}}"><i class="md-icon material-icons"></i></a>
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="{{route('listaTermini', ['objectid' => $vocabolario->_id])}}"><i class="md-icon material-icons"></i></a>
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="#" class="delete_article" data-id="{{$vocabolario->_id}}"><i class="md-icon material-icons">&#xE872;</i></a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    {{ $vocabolari->links('admin.pagination.default') }}
                </div>
            </div>
        </div>
    </div>

@endsection

@push('specific_scripts')

@endpush

