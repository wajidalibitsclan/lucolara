<h3 class="heading_b uk-margin-bottom">Altri Documenti</h3>
<div id="altri_file">
    <div data-repeater-list="altri_file">
        @if (isset($result->altri_file) && !empty($result->altri_file))
            @foreach (json_decode($result->altri_file) as $file)
                <div data-repeater-item>
                    <div class="uk-width-1-1">
                        @if (isset($file['id']) && !empty($file['id']))
                            <div id="documento_allegato_altri" class="md-input-wrapper">
                                <a class="md-btn md-btn-danger md-btn-mini md-btn-wave-light waves-effect waves-button waves-light rimuovi_documento"
                                    href="#">
                                    <i class="material-icons uk-icon">&#xE872;</i>
                                    Rimuovi file {{ getFileTitleFromId($file['id']) }}
                                </a>
                                <input type="hidden" name="documento_interviste_id_file" value="{{ $file['id'] }}">
                            </div>
                        @endif
                        <div class="md-input-wrapper">
                            <input type="file" name="documento_interviste" value="">
                        </div>
                        <div class="md-input-wrapper">
                            <h3 class="heading_c">Etichetta Documento</h3>
                            <input type="text" class="md-input" name="etichetta_documento"
                                value="{{ $file['etichetta_documento'] }}"><span class="md-input-bar "></span>
                        </div>
                        <div class="md-input-wrapper">
                            <h3 class="heading_c">Descrizione Documento</h3>
                            <textarea class="md-input" name="descrizione_documento">{!! $file['descrizione_documento'] !!} </textarea><span class="md-input-bar "></span>
                        </div>
                        <input class="md-btn md-btn-danger" data-repeater-delete type="button"
                            value="Rimuovi blocco" />
                    </div>
                </div>
                <hr>
            @endforeach
        @else
            <div data-repeater-item>
                <div class="md-input-wrapper">
                    <input type="file" name="documento_interviste" value="">
                </div>
                <div class="md-input-wrapper">
                    <h3 class="heading_c">Etichetta Documento</h3>
                    <input type="text" class="md-input" name="etichetta_documento" value=""><span
                        class="md-input-bar "></span>
                </div>
                <div class="md-input-wrapper">
                    <h3 class="heading_c">Descrizione Documento</h3>
                    <textarea class="md-input" name="descrizione_documento"></textarea><span class="md-input-bar "></span>
                </div>
                <input class="md-btn md-btn-danger" data-repeater-delete type="button" value="Rimuovi blocco" />
            </div>
        @endif
    </div>
    <input data-repeater-create type="button" class="md-btn md-btn-success" value="Aggiungi Documento" />
</div>

@push('specific_scripts')
    <script type="text/javascript">
        $('#altri_file').repeater({
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
            show: function() {
                if ($(this).find("#documento_allegato_altri")) {
                    $(this).find("#documento_allegato_altri").remove();
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
            hide: function(deleteElement) {
                if (confirm('Are you sure you want to delete this element?')) {
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
    </script>
@endpush
