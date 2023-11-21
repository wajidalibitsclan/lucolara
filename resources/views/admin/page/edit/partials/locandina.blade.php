<div id="locandina" class="md-card locandina">
    <div class="uk-accordion" data-uk-accordion>
        <h3 class="uk-accordion-title">Locandina</h3>
        <div class="uk-accordion-content">
            <div data-repeater-list="locandina" class="drag-block">
                <div data-repeater-item  style="display:none;">
                    <div class="md-input-wrapper">
                        <div class="md-card-content contenitore_repetaer">
                            <div class="uk-form-row" data-uk-grid-margin>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-1 uk-row-first uk-margin-bottom">
                                        <h3 class="heading_c uk-margin-bottom">Tipologia Blocco</h3>
                                        <div class="md-input-wrapper">
                                            <select id="tipologia_blocco" class="md-input tipologia_blocco" name="tipologia_blocco" onchange="mostraBlocco(this)">
                                                <option value="" required>Seleziona ...</option>
                                                <option value="personaggio-interprete">Personaggio - Interprete</option>
                                                <option value="etichetta-personaggi">Etichetta - Persone</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @include('admin.page.edit.partials.etichetta-personaggi')
                            @include('admin.page.edit.partials.personaggio-interprete')
                        </div>
                    </div>
                </div>
                @if(isset($result->locandina) && !empty($result->locandina))

                    @foreach(json_decode($result->locandina) as $key => $value)

                        @php
                            if(isset($value['ordine']) && !empty($value['ordine'])){
                                    $ordine = $value['ordine'];
                                    unset($value['ordine']);
                            }else if(!isset($value['ordine']) || empty($value['ordine']) ){
                                $ordine = '';
                                unset($value['ordine']);
                            }

                            $template = array_keys($value);
                            if(!isset($template[0]) || empty($template[0])){
                               continue;
                            }
                            $template = $template[0];
                            $valori = array_values($value);
                        @endphp
                        @if ($template == 'tipologia_blocco')
                            @continue
                        @endif
                        <div data-repeater-item>
                            <div class="md-input-wrapper">
                                <div class="md-card-content contenitore_repetaer">
                                    <div class="uk-form-row" data-uk-grid-margin>
                                        <div class="uk-grid">
                                            <div class="uk-width-medium-1-1 uk-row-first uk-margin-bottom">
                                                <h3 class="heading_c uk-margin-bottom">Tipologia Blocco</h3>
                                                <div class="md-input-wrapper">
                                                    <select id="tipologia_blocco" class="md-input tipologia_blocco" name="tipologia_blocco" onchange="mostraBlocco(this)" disabled>
                                                        <option value="" required>Seleziona ...</option>
                                                        <option value="personaggio-interprete" {{$template == 'personaggio-interprete' ? 'selected' : ''}}>Personaggio - Interprete</option>
                                                        <option value="etichetta-personaggi" {{$template == 'etichetta-personaggi' ? 'selected' : ''}}>Etichetta - Persone</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    @include('admin.page.edit.partials.' . $template, compact(reset($valori), 'key', 'ordine') )
                                    @unset($ordine_apparizione)
                                </div>
                            </div>
                            <div class="uk-width-medium-1-1 uk-row-first uk-container uk-height-1-1  uk-container-center">
                                <input data-repeater-delete class="uk-button uk-width-1-1 uk-button uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Blocco Locandina"/>
                            </div>
                        </div>

                    @endforeach
                @endif

            </div>
            <div class="md-input-wrapper">
                <div class="md-card-content">
                    <input data-repeater-create class="uk-button uk-width-1-1 uk-button uk-button-success uk-margin-top" type="button" value="Aggiungi blocco"/>
                </div>
            </div>
        </div>
    </div>
</div>

@push('specific_scripts')

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
    $( function() {
        function split( val ) {
            return val.split( /,\s*/ );
        }
        function extractLast( term ) {
            return split( term ).pop();
        }
        function autoPersonaggi(){
            $( ".suggest_termini" )
                .autocomplete({
                    source: function( request, response, ui ) {
                        console.log(this.element.attr('data-vocabulary_id'))
                        $.getJSON( "{{route('getJsonTerm')}}", {
                            term: extractLast( request.term ),
                            vocabulary_id: this.element.attr('data-vocabulary_id')
                        }, response );
                    },
                    search: function() {
                        // custom minLength
                        var term = extractLast( this.value );
                        if ( term.length < 2 ) {
                            return false;
                        }
                    },
                    focus: function() {
                        // prevent value inserted on focus
                        return false;
                    },
                    select: function( event, ui ) {
                        var nomeCampo  = this.name;
                        $(this).parent().hide();
                        //var nomeCampo = nomeCampo.replace("[personaggi]", "[termini_personaggi]");
                        console.log(nomeCampo);
                        var divcontiner = $(this).parent().parent();
                        var numero = $(divcontiner).find('#termini_selezionati').children('div').length + 1;
                        var divToAdd = '<div id="' + ui.item.id + '" class="uk-alert uk-alert-info nome_persona"><input type="hidden" name="' + nomeCampo +'" value="' + ui.item.id + '">' + ui.item.value + '</div>';
                        $(divcontiner).find('#termini_selezionati').append(divToAdd)
                        console.log($('.etichetta-personaggi').repeaterVal());

                        return false;
                    }
                });

        }

        autoPersonaggi();

        $('#locandina').repeater({
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
            repeaters: [
                {
                // (Required)
                // Specify the jQuery selector for this nested repeater
                    selector: '.etichetta-personaggi',
                    initEmpty: false,
                    repeaters:[
                        {
                            // (Required)
                            // Specify the jQuery selector for this nested repeater
                            selector: '.persone-repeater',
                            initEmpty: false,
                            show: function () {
                                var parent = $(this).parent();
                                var left_default =  parent.find('.drag-persona');
                                console.log(left_default);
                                $(left_default[0]).append($(this));
                                $(this).slideDown();
                                autoPersonaggi();
                                if($('.drag-persona').length > 0){
                                    $('.drag-persona').sortable();

                                }
                            },
                            ready: function (setIndexes) {
                                if($('.drag-persona').length > 0){
                                    $('.drag-persona').sortable();
                                }
                            },
                            hide: function (deleteElement) {
                                if(confirm('Confermi di voler eliminare questo elemento?')) {
                                    $(this).slideUp(deleteElement);
                                }
                            }
                        }
                    ],
                    show: function () {
                        if($('.drag-etichetta').length > 0){
                            var parent = $(this).parent();
                            var left_default =  parent.find('.drag-etichetta');
                            console.log(left_default);
                            $(left_default[0]).append($(this));
                            $(this).slideDown();
                            $('.drag-etichetta').sortable();
                        }
                        autoPersonaggi();
                    },
                    ready: function (setIndexes) {
                        if($('.drag-etichetta').length > 0){
                            $('.drag-etichetta').sortable();
                        }
                    },
                    hide: function (deleteElement) {
                        if(confirm('Confermi di voler eliminare questo elemento?')) {
                            $(this).slideUp(deleteElement);
                        }
                    }
                },
                {
                    // (Required)
                    // Specify the jQuery selector for this nested repeater
                    selector: '.personaggio-interprete',
                    initEmpty: false,
                    show: function () {
                        var parent = $(this).parent();
                        var left_default =  parent.find('.left-default');
                        console.log(left_default);
                        $(left_default[0]).append($(this));
                        $(this).slideDown();
                        if($('.left-default').length > 0){
                            $('.left-default').sortable();
                        }
                        autoPersonaggi();
                    },
                    ready: function (setIndexes) {
                        if($('.left-default').length > 0){
                            $('.left-default').sortable();
                        }
                    },
                    hide: function (deleteElement) {
                        if(confirm('Confermi di voler eliminare questo elemento?')) {
                            $(this).slideUp(deleteElement);
                        }
                    }
                },
                ],
            // (Optional)
            // "show" is called just after an item is added.  The item is hidden
            // at this point.  If a show callback is not given the item will
            // have $(this).show() called on it.
            show: function () {
                if($('.drag-block').length > 0){
                    $(this).appendTo('.drag-block');
                    $(this).slideDown();
                    $('.drag-block').sortable();
                    autoPersonaggi();
                }
                autoPersonaggi();
                $(this).slideDown();



            },
            // (Optional)
            // "hide" is called when a user clicks on a data-repeater-delete
            // element.  The item is still visible.  "hide" is passed a function
            // as its first argument which will properly remove the item.
            // "hide" allows for a confirmation step, to send a delete request
            // to the server, etc.  If a hide callback is not given the item
            // will be deleted.
            hide: function (deleteElement) {
                if(confirm('Confermi di voler eliminare questo elemento?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            // (Optional)
            // You can use this if you need to manually re-index the list
            // for example if you are using a drag and drop library to reorder
            // list items.
            ready: function (setIndexes) {
                $('.drag-block').sortable();
                $('.left-default').on('drop', setIndexes);
                $('.drag-block').on('drop', setIndexes);
                $('.drag-etichetta').on('drop', setIndexes);
                $('.drag-persona').on('drop', setIndexes);
                autoPersonaggi();


            },
            // (Optional)
            // Removes the delete button from the first list item,
            // defaults to false.
            isFirstItemUndeletable: false
        });



    } );

    function mostraBlocco(oggetto){
        $(oggetto).parents('.md-card-content').find('.' + $(oggetto).val()).removeClass('uk-hidden');
        $(oggetto).parents('.md-card-content').find('.uk-hidden').remove();
        $(oggetto).attr("disabled", true);
    }

    function addEtichetta(addValue) {


        var vocabulary_id = $(addValue).attr('data-vocabulary_id');
        var urlAction = $(addValue).attr('data-url');
        var token = $(addValue).attr('data-token');

        UIkit.modal.prompt("Nuova Etichetta:", '', function(newvalue){
            event.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': token
                }

            })
            var formData = {
                termine : newvalue,
                vocabulary_id: vocabulary_id,
                typeCall: 'ajax'
            }

            console.log(formData);

            $.ajax({

                type: 'POST',
                url: urlAction,
                data: formData,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                },
                error: function (data) {
                    console.log('Error:', data.responseText);
                }
            });

        });

    }

    function resetForm(FormPersoanggi){
        console.log(FormPersoanggi)
    }

</script>
@endpush
