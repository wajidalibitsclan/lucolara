@extends('admin.app')

@section('main-content')
    <div id="page_content">
        <div id="top_bar">
            <ul id="breadcrumbs">
                <li><a href="">Category</a></li>
            </ul>
        </div>
        <div id="page_content_inner">
            @if (Session::has('success'))
                <div class="uk-alert uk-alert-success" data-uk-alert="">
                    <a href="#" class="uk-alert-close uk-close"></a>
                    {{ Session::get('success') }}
                </div>
            @endif


            <form method="post" action="{{ route('added.category') }}">
                {{ csrf_field() }}
                <div class="uk-grid" data-uk-grid-margin="">
                    <div class="uk-width-medium-3-4 uk-row-first">
                        <div class="md-card">
                            <div class="md-card-content">
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Name</h3>
                                                <input type="text" class="md-input" value="{{ old('name') }}"
                                                    name="name">
                                                <span class="md-input-bar"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-1 uk-row-first">
                                            <div class="md-input-wrapper">
                                                <h3 class="heading_c">Category</h3>
                                                <select name="category" id="category" class="md-input">
                                                    @foreach ($categories as $key => $category)
                                                        <option value="{{ $category->id }}"
                                                            {{ old('category') == $category->id ? 'selected' : '' }}>
                                                            {{ $category->name }}</option>
                                                    @endforeach
                                                </select>
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
                                        <span class="uk-input-group-addon"><input type="submit" class="md-btn"
                                                value="Salva"></span>
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
    <script src="{{ asset('adminassets/bower_components/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('adminassets/bower_components/ckeditor/adapters/jquery.js') }}"></script>

    <!--  wysiwyg editors functions -->
    <script src="{{ asset('adminassets/assets/js/pages/forms_wysiwyg.min.js') }}"></script>
@endpush
