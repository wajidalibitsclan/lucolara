<div id="{{ $media_gallery_object->id }}" class="uk-grid-margin">
    <div class="md-card">
        <div class="md-card-head head_background"
            style="background-image: url('{{ $media_gallery_object->getPhotoUrl('173x161') }}')"></div>
        <input type="hidden" name="gallery[][photo]" value="{{ $media_gallery_object->id }}">
        <div id="{{ $media_gallery_object->id }}etichetta_foto" class="md-card-content etichetta_foto">
            {{ $media_gallery_object->title or 'No titolo' }}</div>
        <div class="uk-button-group uk-width-1-1">
            <div data-uk-dropdown="{mode:'click'}" aria-haspopup="true" aria-expanded="false" class="uk-width-1-1"> Edit
                <button class="uk-button uk-width-1-1"><i class="uk-icon-caret-down"></i> Edit</button>
                <div class="uk-dropdown uk-dropdown-small uk-dropdown-bottom" aria-hidden="true" tabindex=""
                    style="top: 30px; left: 0px;">
                    <ul class="uk-nav uk-nav-dropdown">
                        <li><a href="#" class="edit_foto" data-id="{{ $media_gallery_object->id }}"
                                data-title="{{ $media_gallery_object->title }}" data-token="{{ csrf_token() }}"
                                data-url="{{ route('mediaAjaxUpload', ['id' => $media_gallery_object->id]) }}">Modifica</a>
                        </li>
                        <li><a href="#" class="set_evidenza" data-id="{{ $media_gallery_object->id }}"
                                data-title="{{ $media_gallery_object->title }}" data-token="{{ csrf_token() }}"
                                data-url="{{ $media_gallery_object->getPhotoUrl('450x9999') }}">Imposta in evidenza</a>
                        </li>
                        <li><a href="#" class="elimina_foto"
                                data-id="{{ $media_gallery_object->id }}">Elimina</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
