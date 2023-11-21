@extends('admin.app')

@section('additional_styles')
    <link rel="stylesheet" href="{{asset('adminassets/assets/skins/dropify/css/dropify.css')}}">
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/jquery.Jcrop.min.css')}}">
@endsection

@section('main-content')

    <div id="page_content">
        <div id="page_content_inner">
            <form method="post" action="{{route('adminUpdate', ['object' => $result->type, 'id' => $result->_id])}}" enctype="multipart/form-data">
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
                                            <input type="text" class="md-input" name="title" value="{{ $result->title or '' }}"><span class="md-input-bar "></span>
                                        </div>
                                        <div class="md-input-wrapper">
                                            <a href="{{$result->getPermalink()}}">{{$result->getPermalink()}}</a>
                                        </div>
                                        <div class="md-input-wrapper">
                                            <h3 class="heading_c">Sotto Titolo</h3>
                                            <input type="text" class="md-input" name="sotto_titolo" value="{{ $result->sotto_titolo or '' }}"><span class="md-input-bar "></span>
                                        </div>
                                        <div class="md-input-wrapper">
                                            <h3 class="heading_c">Riassunto</h3>
                                            <textarea name="riassunto" cols="30" rows="4" class="md-input">{{ $result->riassunto or '' }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @include('admin.page.edit.partials.dataLuogo', $result)
                    @include('admin.page.edit.partials.locandina', $result)
                    @include('admin.page.edit.partials.testo_libero_locandina', $result)

                    <div class="md-card">
                        <div class="md-card-content">
                            <div class="uk-form-row" data-uk-grid-margin>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-1 uk-row-first">
                                        <div class="md-input-wrapper">
                                            <h3 class="heading_c uk-margin-bottom">Contenuto</h3>
                                            <textarea id="wysiwyg_ckeditor" name="body" cols="30" rows="20">{{ $result->body or '' }}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md-card">
                        <div class="md-card-content">
                            <h3 class="heading_b uk-margin-bottom">Galleria</h3>
                            <div id="dragula_sortable" class="uk-grid uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-5" data-uk-grid-margin>

                                @if(isset($result->gallery) && !empty($result->gallery))
                                    @foreach($result->gallery as $media_gallery_object)
                                        @if($media_gallery_object->classSlug == 'photo')
                                            @include('admin.page.edit.partials.galleryPhoto', $media_gallery_object)
                                        @elseif($media_gallery_object->classSlug == 'link')
                                            @include('admin.page.edit.partials.galleryVideo', $media_gallery_object)
                                        @endif
                                    @endforeach
                                @endif
                            </div>
                        </div>
                        <div class="md-fab-wrapper md-fab-in-card">
                            <a id="add_media" class="md-fab md-fab-success md-fab-wave-light waves-effect waves-button waves-light" href="javascript:void(0)"><i class="material-icons md-color-white"></i></a>
                        </div>
                    </div>


                    <div class="uk-grid" >
                        <div class="uk-width-medium-1-1">
                            <div class="md-card" data-uk-grid-margin>
                                <div class="md-card-content">
                                    <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim1', animation:'scale'}">
                                        <li class="uk-active"><a href="#">Interviste e dichiarazioni</a></li>
                                        <li><a href="#">Rassegna Stampa</a></li>
                                    </ul>
                                    <ul id="tabs_anim1" class="uk-switcher uk-margin">
                                        <li>@include('admin.page.edit.partials.interviste_dichiarazioni', $result)</li>
                                        <li>@include('admin.page.edit.partials.rassegna_stampa', $result)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid" >
                        <div class="uk-width-medium-1-1">
                            <div class="md-card" data-uk-grid-margin>
                                <div class="md-card-content">
                                    @include('admin.page.edit.partials.altri_file', $result)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="uk-width-medium-1-4">
                    <div id="immagine_in_evidenza">
                        @if($result->hasImmagineInevidenza())
                            <div class="uk-width-medium-1-1">
                                <button class="md-btn uk-width-medium-1-1" data-uk-modal="{target:'#modal_crop'}" onclick="event.preventDefault();">Modifica Il taglio immagine</button>
                            </div>
                            <img id="immagine_in_evidenza_src" src="{{$result->getImmagineInEvidenza('450x9999')}}">
                            <input type="hidden" id="immagine_in_evidenza_id" name="immagine_in_evidenza_id" value="{{$result->immagine_in_evidenza}}">

                        @endif
                    </div>
                    <div class="uk-grid" data-uk-grid-margin>
                        <div class="uk-width-medium-1-1">
                            <div class="md-card">
                                <div class="md-card-content">
                                    <h3 class="heading_a uk-margin-small-bottom">
                                        Immagine in evidenza
                                    </h3>
                                    <input type="file" id="input-file-a" class="dropify" name="immagine_in_evidenza"/>
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
                                            <select class="md-input" name="main_categorie" id="main_category_select">
                                                <option>SELECT CATEGORY</option>
                                                @foreach (main_categories() as $count=>$main_category)
                                                    <option value="{{ $count }}" {{ $result->object == $count ? 'selected' : '' }}>{{ strtoupper($main_category) }}</option>
                                                @endforeach
                                            </select>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md-card">
                            <div class="md-card-content">
                                <h3 class="heading_a text-uppercase">Sub Category</h3>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-1">
                                        <select class="md-input" name="categorie" id="subcategory_select">
                                            @foreach ($result->subcategories as $key=>$menu)
                                                <option value="{{ $key }}" {{ $result->category == $key ? 'selected' : '' }}>{{ strtoupper($menu['name']) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="md-card">
                        <div class="md-card-content">
                            <h3 class="heading_a">Stato Pubblicazione</h3>
                            <div class="uk-grid" data-uk-grid-margin="">
                                <div class="uk-width-medium-1-1">
                                    <input type="checkbox" data-switchery data-switchery-size="large"
                                    @if($result->status == '1')
                                        checked
                                    @endif
                                           id="switch_demo_large" name="status" />
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

    <div class="uk-modal" id="modal_crop">
        <div class="uk-modal-dialog  uk-modal-dialog-large">
            <button type="button" class="uk-modal-close uk-close"></button>
            <div class="uk-overflow-container" style="">
                <img src="{{$result->getImmagineInEvidenza('original')}}" id="cropbox" />

                <!-- This is the form that our event handler fills -->
                <div class="jc_coords uk-width-medium-1-1">
                    <form id="cropLocandina" action="{{route('ajaxLocandina', ['id' => $result->immagine_in_evidenza])}}" method="post" onsubmit="event.preventDefault(); return checkCoords();">
                        {{csrf_field()}}
                        <input type="hidden" id="x" name="x" />
                        <input type="hidden" id="y" name="y" />
                        <input type="hidden" id="w" name="w" />
                        <input type="hidden" id="h" name="h" />
                        <input type="submit" class="md-btn md-btn-success uk-width-medium-1-1" value="Ritalgia Immagine" />
                    </form>
                </div>
            </div>
            <!-- This is the image we're attaching Jcrop to -->

        </div>
    </div>


    <!-- Modale per la modfica dei dati delle immagini -->
    <div class="uk-modal uk-modal-card-fullscreen" id="add_media_modal">
        <div class="uk-modal-dialog uk-modal-dialog-blank">
            <div class="md-card uk-height-viewport">
                <div class="md-card-toolbar">
                    <span class="md-icon material-icons uk-modal-close">&#xE5C4;</span>
                    <h3 class="md-card-toolbar-heading-text">
                        Torna alla scheda senza salvare
                    </h3>
                </div>
                <div class="md-card-content">
                    <div class="md-card uk-margin-large-bottom">
                        <div class="md-card-content">
                            <form class="uk-form-stacked" id="addMediaForm" enctype="multipart/form-data">
                                <input type="hidden" name="postid" value="{{$result->_id}}">
                                <input type="hidden" name="postObject" value="{{$result->object}}">
                                <input type="hidden" name="field" value="gallery">
                                <input type="hidden" name="urlPost" value="{{route('AddMedia')}}">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <div class="md-input-wrapper">
                                    <h3 class="heading_c">Titolo</h3>
                                    <input id="title_media" type="text" class="md-input" name="title_media" value=""><span class="md-input-bar "></span>
                                </div>
                                <div class="md-input-wrapper md-input-filled">
                                    <h3 class="heading_c">Descrizione</h3>
                                    <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="descrizione_media"></textarea><span class="md-input-bar "></span>
                                </div>
                                <div class="md-input-wrapper">
                                    <h3 class="heading_c">Tipologia Media</h3>
                                    <select id="tipologia_media" class="md-input" name="tipologia_media">
                                        <option value=""  selected="" required>Select...</option>
                                        <option value="photo">Fotografia</option>
                                        <option value="link">Video</option>
                                    </select>
                                </div>
                                <div id="immagine_media" class="md-input-wrapper" style="display: none;">
                                    <h3 class="heading_a uk-margin-small-bottom">
                                        Immagine
                                    </h3>
                                    <input  type="file" id="input-file-b" class="" name="immagine_galleria"/>
                                    <div class="md-input-wrapper">

                                        <input type="checkbox" name="bozzetto"  class="md-input" />
                                        <label>Selezionare se l'immagine è un bozzetto</label>
                                    </div>
                                </div>
                                <div id="link_media" class="md-input-wrapper md-input-filled" style="display: none;">
                                    <h3 class="heading_c">Link Video</h3>
                                    <input type="text" class="md-input" name="link_media" value=""><span class="md-input-bar "></span>
                                </div>
                                <div class="md-input-wrapper">
                                    <input type="button" class="save_media" value="Salva" class="md-input">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Fine Modale -->


@endsection

@push('specific_scripts')
<script src="{{asset('adminassets/bower_components/ckeditor/ckeditor.js')}}"></script>
<script src="{{asset('adminassets/bower_components/ckeditor/adapters/jquery.js')}}"></script>
<!--  wysiwyg editors functions -->
<script src="{{asset('adminassets/assets/js/pages/forms_wysiwyg.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/dropify/dist/js/dropify.min.js')}}"></script>
<!--  form file input functions -->
<script src="{{asset('adminassets/assets/js/pages/forms_file_input.min.js')}}"></script>
<script src="{{asset('adminassets/bower_components/dragula.js/dist/dragula.min.js')}}"></script>
<!--  sortable functions -->
<script src="{{asset('adminassets/assets/js/pages/components_sortable.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/lucaronconi/custom.js')}}"></script>
<script src="{{asset('adminassets/bower_components/parsleyjs/dist/parsley.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/lucaronconi/jquery.form.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/lucaronconi/jquery.repeater.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/lucaronconi/jquery.Jcrop.min.js')}}"></script>
<script src="{{asset('adminassets/assets/js/custom/lucaronconi/jquery.color.js')}}"></script>
<script src="{{asset('adminassets/assets/js/pages/components_nestable.min.js')}}"></script>
<script language="Javascript">
    jQuery(function(){
        jQuery('#cropbox').Jcrop({
            aspectRatio: 8/3,
            boxWidth: 800,   //Maximum width you want for your bigger images
            boxHeight: 600,  //Maximum Height for your bigger images
            onSelect: updateCoords
        });

    });
    function updateCoords(c)
    {
        jQuery('#x').val(c.x);
        jQuery('#y').val(c.y);
        jQuery('#w').val(c.w);
        jQuery('#h').val(c.h);
    };
    function checkCoords()
    {
        if (parseInt(jQuery('#w').val())>0){
            var options = {
                //target:        '#output2',   // target element(s) to be updated with server response
                //beforeSubmit:  showRequestLocandina,  // pre-submit callback
                success:       showResponseLocandina,  // post-submit callback

                // other available options:
                //url:       urlAction,        // override for form's 'action' attribute
                type:      'post',        // 'get' or 'post', override for form's 'method' attribute
                //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
                clearForm: true,        // clear all form fields after successful submit
                resetForm: false        // reset the form after successful submit

                // $.ajax options can be used here too, for example:
                //timeout:   3000
            };
            // inside event callbacks 'this' is the DOM element so we first
            // wrap it in a jQuery object and then invoke ajaxSubmit
            $('form#cropLocandina').ajaxSubmit(options);
        }else{
            alert('Please select a crop region then press submit.');
            return false;
        }
        function showResponseLocandina(responseText, statusText, xhr, $form)  {
            UIkit.modal("#modal_crop").hide();
            console.log(responseText);
        }
    };
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
    $(document).ready(function () {
        $('#file_intervista').repeater({
            // (Optional)
            // start with an empty list of repeaters. Set your first (and only)
            // "data-repeater-item" with style="display:none;" and pass the
            // following configuration flag
            initEmpty: false,
            // (Optional)
            // "defaultValues" sets the values of added items.  The keys of
            // defaultValues refer to the value of the input's name attribute.
            // If a default value is not specified for an input, then it will
            // have its value cleared.
            repeaters: [{
                // (Required)
                // Specify the jQuery selector for this nested repeater
                //selector: '.inner-repeater'
            }],
            // (Optional)
            // "show" is called just after an item is added.  The item is hidden
            // at this point.  If a show callback is not given the item will
            // have $(this).show() called on it.
            show: function () {
                if($(this).find( "#documento_allegato" )){
                    $(this).find( "#documento_allegato" ).remove();
                }
                $(this).slideDown();
                altair_nestable.init();
            },
            // (Optional)
            // "hide" is called when a user clicks on a data-repeater-delete
            // element.  The item is still visible.  "hide" is passed a function
            // as its first argument which will properly remove the item.
            // "hide" allows for a confirmation step, to send a delete request
            // to the server, etc.  If a hide callback is not given the item
            // will be deleted.
            hide: function (deleteElement) {
                if(confirm('Are you sure you want to delete this element?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            // (Optional)
            // You can use this if you need to manually re-index the list
            // for example if you are using a drag and drop library to reorder
            // list items.

            // (Optional)
            // Removes the delete button from the first list item,
            // defaults to false.
            isFirstItemUndeletable: false
        })
        $('#file_rassegna').repeater({
            // (Optional)
            // start with an empty list of repeaters. Set your first (and only)
            // "data-repeater-item" with style="display:none;" and pass the
            // following configuration flag
            initEmpty: false,
            // (Optional)
            // "defaultValues" sets the values of added items.  The keys of
            // defaultValues refer to the value of the input's name attribute.
            // If a default value is not specified for an input, then it will
            // have its value cleared.
            repeaters: [{
                // (Required)
                // Specify the jQuery selector for this nested repeater
                //selector: '.inner-repeater'
            }],
            // (Optional)
            // "show" is called just after an item is added.  The item is hidden
            // at this point.  If a show callback is not given the item will
            // have $(this).show() called on it.
            show: function () {
                if($(this).find( "#documento_allegato" )){
                    $(this).find( "#documento_allegato" ).remove();
                }
                $(this).slideDown();
                altair_nestable.init();
            },
            // (Optional)
            // "hide" is called when a user clicks on a data-repeater-delete
            // element.  The item is still visible.  "hide" is passed a function
            // as its first argument which will properly remove the item.
            // "hide" allows for a confirmation step, to send a delete request
            // to the server, etc.  If a hide callback is not given the item
            // will be deleted.
            hide: function (deleteElement) {
                if(confirm('Are you sure you want to delete this element?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            // (Optional)
            // You can use this if you need to manually re-index the list
            // for example if you are using a drag and drop library to reorder
            // list items.

            // (Optional)
            // Removes the delete button from the first list item,
            // defaults to false.
            isFirstItemUndeletable: false
        })

        $('.rassegna_stampa').repeater({
            // (Optional)
            // start with an empty list of repeaters. Set your first (and only)
            // "data-repeater-item" with style="display:none;" and pass the
            // following configuration flag
            initEmpty: false,
            // (Optional)
            // "defaultValues" sets the values of added items.  The keys of
            // defaultValues refer to the value of the input's name attribute.
            // If a default value is not specified for an input, then it will
            // have its value cleared.
            repeaters: [{
                // (Required)
                // Specify the jQuery selector for this nested repeater
                selector: '.inner-repeater'
            }],
            // (Optional)
            // "show" is called just after an item is added.  The item is hidden
            // at this point.  If a show callback is not given the item will
            // have $(this).show() called on it.
            show: function () {
                $(this).slideDown();
                altair_nestable.init();
            },
            // (Optional)
            // "hide" is called when a user clicks on a data-repeater-delete
            // element.  The item is still visible.  "hide" is passed a function
            // as its first argument which will properly remove the item.
            // "hide" allows for a confirmation step, to send a delete request
            // to the server, etc.  If a hide callback is not given the item
            // will be deleted.
            hide: function (deleteElement) {
                if(confirm('Are you sure you want to delete this element?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            // (Optional)
            // You can use this if you need to manually re-index the list
            // for example if you are using a drag and drop library to reorder
            // list items.

            // (Optional)
            // Removes the delete button from the first list item,
            // defaults to false.
            isFirstItemUndeletable: false
        })
        $('.rimuovi_documento').click(function (event) {
            event.preventDefault();
            console.log( $(this).parent());
            UIkit.modal.alert("Ricordati di sostiuire il documento altrimenti verrà elimianta la riga!");
            $(this).parent().remove();
        });
        $(document).on('change','#main_category_select',function(e){
            var categorie = $(this).val();
            $.get("/admin/get_subcategory/"+categorie,
            function(data, status){
                $('#subcategory_select').html(data);
            });
        });
    });
</script>
@endpush