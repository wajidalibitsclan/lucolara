@extends('admin.app')

@section('additional_styles')
    <link rel="stylesheet" href="{{asset('adminassets/assets/skins/dropify/css/dropify.css')}}">
@endsection

@section('main-content')

    <div id="page_content">
        <div id="page_content_inner">
            <form method="post" action="{{route('adminAddInsert', ['object' => $object])}}" enctype="multipart/form-data">
                {{ csrf_field() }}

            <div class="uk-grid" data-uk-grid-margin="">
                <div class="uk-width-medium-3-4 uk-row-first">
                    <div class="md-card">
                        <div class="md-card-content">
                            <div class="uk-form-row" data-uk-grid-margin>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-1 uk-row-first">
                                        <div class="md-input-wrapper">
                                            <h3 class="heading_c">Titolo</h3>
                                            <input type="text" class="md-input" name="title"><span class="md-input-bar "></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <div class="uk-grid" data-uk-grid-margin>
                            <div class="uk-width-medium-1-1">
                                <div class="md-card">
                                    <div class="md-card-content">
                                        <h3 class="heading_a uk-margin-small-bottom">
                                            Immagine in evidenza
                                        </h3>
                                        <input type="file" id="input-file-a" class="dropify" name="immagine_in_evidenza" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md-card">
                            <div class="md-card-content">
                                <h3 class="heading_a text-uppercase">Categorie</h3>
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <div class="uk-width-medium-1-1">
                                        <h3 class="text-uppercase">
                                            @if($object == 'lucaronconi1933_2015' || array_key_exists($object, luca_1933_submenus()))
                                                Luca Ronconi 1933-2015
                                            @elseif($object == 'dopo_lucaronconi' || array_key_exists($object, dopo_submenus())) 
                                                Dopo Luca Ronconi
                                            @elseif($object == 'santacristina' || array_key_exists($object, santacristina_submenus())) 
                                                Santacristina 
                                            @elseif($object == 'biografia') 
                                                Biografia 
                                            @endif
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if($object != 'biografia')
                            <div class="md-card">
                                <div class="md-card-content">
                                    <h3 class="heading_a text-uppercase">Sub Category</h3>
                                    <div class="uk-grid" data-uk-grid-margin="">
                                        <div class="uk-width-medium-1-1">
                                                <select class="md-input" name="categorie">
                                                    @if($object == 'lucaronconi1933_2015' || array_key_exists($object, luca_1933_submenus()))
                                                        @foreach (luca_1933_submenus() as $key=>$menu)
                                                            <option value="{{ $key }}">{{ $menu['name'] }}</option>
                                                        @endforeach
                                                    @elseif($object == 'dopo_lucaronconi' || array_key_exists($object, dopo_submenus()))    
                                                        @foreach (dopo_submenus() as $key=>$menu)
                                                            <option value="{{ $key }}">{{ $menu['name'] }}</option>
                                                        @endforeach
                                                    @elseif($object == 'santacristina' || array_key_exists($object, santacristina_submenus()))    
                                                        @foreach (santacristina_submenus() as $key=>$menu)
                                                            <option value="{{ $key }}">{{ $menu['name'] }}</option>
                                                        @endforeach
                                                    @endif
                                                </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <input type="hidden" name="categorie" value="biografia"/>
                        @endif
                        <div class="md-card">
                            <div class="md-card-content"> 
                                <h3 class="heading_a">Stato Pubblicazione</h3>
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <div class="uk-width-medium-1-1">
                                        <input type="checkbox" data-switchery data-switchery-size="large"  id="switch_demo_large" name="status" />
                                        <label for="switch_demo_large" class="inline-label">Pubblicato</label>
                                        <span class="uk-form-help-block">Se il pallino è verde l'articolo è pubblicato</span>
                                    </div>
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
<script src="{{asset('adminassets/assets/js/custom/dropify/dist/js/dropify.min.js')}}"></script>

<!--  form file input functions -->
<script src="{{asset('adminassets/assets/js/pages/forms_file_input.min.js')}}"></script>
<script>

    $(function() {
        if(isHighDensity) {
            // enable hires images
            altair_helpers.retina_images();
        }
        if(Modernizr.touch) {
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