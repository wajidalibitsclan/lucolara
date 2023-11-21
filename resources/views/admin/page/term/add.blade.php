@extends('admin.app')

@section('main-content')

    <div id="page_content">
        <div id="page_content_inner">
            <h3 class="heading_b uk-margin-bottom">Aggiungi termine al vocabolario {{ $vocabolario->title}}</h3>

            <form method="post" action="{{route('storeTerm', ['objectid' => $vocabolario->_id])}}" enctype="multipart/form-data">
                {{ csrf_field() }}
                <input type="hidden" value="{{ $vocabolario->_id}}" name="vocabulary_id">
                <div class="uk-grid" data-uk-grid-margin="">
                    <div class="uk-width-medium-3-4 uk-row-first">
                        <div class="md-card">
                            <div class="md-card-content">
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Termine</h3>
                                                <input type="text" class="md-input" name="termine"><span class="md-input-bar "></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c uk-margin-bottom">Contenuto</h3>
                                                <textarea id="" class="md-input selecize_init" name="body"></textarea>
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