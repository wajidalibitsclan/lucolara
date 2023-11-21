<div id="{{$media_gallery_object->_id}}" class="uk-grid-margin">
    <div class="md-card">
        <div class="md-card-head head_background video_back" style="background-image: url('{{asset($media_gallery_object->getPreviewMedia())}}')"></div>
        <input type="hidden" name="gallery[][link]" value="{{$media_gallery_object->_id}}">
        <div id="{{$media_gallery_object->_id}}etichetta_link" class="md-card-content etichetta_foto">{{$media_gallery_object->title or 'No titolo'}}</div>
        <div class="uk-button-group uk-width-1-1">
            <div data-uk-dropdown="{mode:'click'}" aria-haspopup="true" aria-expanded="false" class="uk-width-1-1"> Edit
                <button class="uk-button uk-width-1-1"><i class="uk-icon-caret-down"></i> Edit</button>
                <div class="uk-dropdown uk-dropdown-small uk-dropdown-bottom" aria-hidden="true" tabindex="" style="top: 30px; left: 0px;">
                    <ul class="uk-nav uk-nav-dropdown">
                        <li><a href="#" class="edit_titolo_link" data-id="{{$media_gallery_object->_id}}"
                               data-title="{{$media_gallery_object->title or ''}}"
                               data-token="{{ csrf_token() }}"
                               data-url="{{route('linkAjaxUpload', ['id' => $media_gallery_object->_id ])}}">Modifica titolo</a></li>
                        <li><a href="#" class="edit_codice_video" data-id="{{$media_gallery_object->_id}}"
                           data-codice="{{$media_gallery_object->youtubeCode or ''}}"
                           data-token="{{ csrf_token() }}"
                           data-url="{{route('linkAjaxUpload', ['id' => $media_gallery_object->_id ])}}">Modifica Codice</a></li>
                        <li><a href="#" class="elimina_foto" data-id="{{$media_gallery_object->_id}}">Elimina</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>