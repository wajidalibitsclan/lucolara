@extends('admin.app')
@section('main-content')
    <div id="page_content">
        <div id="top_bar">
            <ul id="breadcrumbs">
                <li><a href="{{route('admin.video_categories.index')}}">Video Categories</a></li>
            </ul>
        </div>
        <div id="page_content_inner">
            @if(Session::has('success'))
                <div class="uk-alert uk-alert-success" data-uk-alert="">
                    <a href="#" class="uk-alert-close uk-close"></a>
                    {{ Session::get('success') }}
                </div>
            @endif
            @if (count($errors) > 0)
                {!! form_errors($errors) !!}
            @endif
            <form method="post" action="{{route('admin.video_categories.update',$category->id)}}">
                {{ csrf_field() }}
                <input type="hidden" name="_method" value="PATCH"/>
                <div class="uk-grid" data-uk-grid-margin="">
                    <div class="uk-width-medium-3-4 uk-row-first">
                        <div class="md-card">
                            <div class="md-card-content">
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Name</h3>
                                                <input type="text" class="md-input" value="{{old('name', $category->name)}}" name="name">
                                                <span class="md-input-bar"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Category Order</h3>
                                                <input type="number" min="1" maxlength="1" class="md-input" value="{{old('order', $category->order)}}" name="order">
                                                <span class="md-input-bar"></span>
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