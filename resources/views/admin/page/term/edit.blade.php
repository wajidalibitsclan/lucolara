@extends('admin.app')

@section('main-content')

    <div id="page_content">
        <div id="top_bar">
            <ul id="breadcrumbs">
                <li><a href="{{route('listaVocabolari')}}">Vocabolari</a></li>
                <li><a href="{{route('listaTermini', ['objectid' => $termine->vocabolario->_id])}}">{{$termine->vocabolario->title}}</a></li>
            </ul>
        </div>
        <div id="page_content_inner">
            @if(Session::has('success'))
                <div class="uk-alert uk-alert-success" data-uk-alert="">
                    <a href="#" class="uk-alert-close uk-close"></a>
                    {{ Session::get('success') }}
                </div>
            @endif


            <form method="post" action="{{route('updateTermine', ['objectid' => $termine->vocabolario->_id, 'termid' => $termine->_id])}}" enctype="multipart/form-data">
                {{ csrf_field() }}

                <div class="uk-grid" data-uk-grid-margin="">
                    <div class="uk-width-medium-3-4 uk-row-first">
                        <div class="md-card">
                            <div class="md-card-content">
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Termine</h3>
                                                <input type="text" class="md-input" name="termine" value="{{$termine->termine or ''}}"><span class="md-input-bar "></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Mostra nel menu </h3>
                                                Si
                                                <input type="radio" class="md-input" name="no_menu" value="0" {{ !isset($termine->no_menu) || $termine->no_menu  == 0 ? 'checked' : ''}}>
                                                No
                                                <input type="radio" class="md-input" name="no_menu" value="1"  {{ isset($termine->no_menu) && $termine->no_menu  == 1 ? 'checked' : ''}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c uk-margin-bottom">Contenuto</h3>
                                                <textarea id="wysiwyg_ckeditor" class="md-input selecize_init" name="body">{{$termine->body or ''}}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <div class="md-card">
                            <div class="md-card-content">
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <div class="uk-width-medium-1-1">
                                        <span class="uk-input-group-addon"><input type="submit" class="md-btn" value="Salva"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

@endsection
@push('specific_scripts')
<script src="{{asset('adminassets/bower_components/ckeditor/ckeditor.js')}}"></script>
<script src="{{asset('adminassets/bower_components/ckeditor/adapters/jquery.js')}}"></script>

<!--  wysiwyg editors functions -->
<script src="{{asset('adminassets/assets/js/pages/forms_wysiwyg.min.js')}}"></script>
@endpush