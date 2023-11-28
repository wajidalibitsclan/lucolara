@extends('admin.app')

@section('htmlheader_title')
    Lista utenti
@endsection


@section('main-content')
    <div id="page_content">
        <div id="page_content_inner">

            <div class="gallery_grid uk-grid-width-medium-1-4 uk-grid-width-large-1-5" data-uk-grid="{gutter: 16}">
                @foreach ($photos as $photo)
                    <div>
                        <div class="md-card md-card-hover">
                            <div class="gallery_grid_item md-card-content">
                                <a href="{{ $photo->getPhotoUrl('original') }}" data-uk-lightbox="{group:'gallery'}">
                                    <img src="{{ $photo->getPhotoUrl('218x145') }}" alt="">
                                </a>
                                <div class="gallery_grid_image_caption">
                                    <div class="gallery_grid_image_menu" data-uk-dropdown="{pos:'top-right'}">
                                        <i class="md-icon material-icons">&#xE5D4;</i>
                                        <div class="uk-dropdown uk-dropdown-small">
                                            <ul class="uk-nav">
                                                <li><a href="#"><i
                                                            class="material-icons uk-margin-small-right">&#xE150;</i>
                                                        Edit</a></li>
                                                <li><a href="#"><i
                                                            class="material-icons uk-margin-small-right">&#xE872;</i>
                                                        Remove</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span class="gallery_image_title uk-text-truncate">Titolo: {{ $photo->title }}</span>
                                    <span class="uk-text-muted uk-text-small">29 Jun 2016, 40KB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            {{ $photos->links('admin.pagination.default') }}
        </div>
    </div>
@endsection

@push('specific_scripts')
    <script>
        $(function() {
            if (isHighDensity) {
                // enable hires images
                altair_helpers.retina_images();
            }
            if (Modernizr.touch) {
                // fastClick (touch devices)
                FastClick.attach(document.body);
            }
        });
        $window.load(function() {
            // ie fixes
            altair_helpers.ie_fix();
        });
    </script>
@endpush
