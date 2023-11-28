@if(isset($valori) && !empty($valori))
    <div class="etichetta-personaggi uk-margin-bottom">
        <div data-repeater-list="etichetta-personaggi" class="drag-etichetta">
            <div data-repeater-item class="campi-etichetta-personaggi uk-form-row" style="display: none">
                <div class="uk-grid">
                    <div class="uk-width-medium-8-10 uk-row-first">
                        <div class="uk-form-row" data-uk-grid-margin>
                            <div class="uk-grid">
                                <div class="uk-width-medium-1-2">
                                    <h4>Etichetta</h4>
                                    <div class="md-input-wrapper md-input-filled">
                                        <div class="uk-autocomplete uk-form uk-position-relative">
                                            <input id="etichetta" name="etichetta" type="text" data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}" class="md-input suggest_termini personaggi" placeholder="Cerca..">
                                            <span class="uk-form-help-block">
                                            <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                               data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}"
                                               data-token="{{ csrf_token() }}"
                                               data-url="{{route('storeTerm', ['objectid' => getVocabolario('Etichette', false)->id ])}}">Inserisci Termine</a>
                                        </span>
                                        </div>
                                        <div id="termini_selezionati">
                                        </div>
                                    </div>
                                </div>
                                <div class="persone-repeater uk-width-medium-1-2">
                                    <div data-repeater-list="persone">
                                        <div class="uk-width-medium-1-1">
                                            <h4>Personaggi</h4>
                                            <div data-repeater-item class="ptest uk-form-row">
                                                <div class="md-input-wrapper md-input-filled">
                                                    <div class="uk-autocomplete uk-form uk-position-relative">
                                                        <input id="persone" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->id}}" class="md-input personaggi suggest_termini" placeholder="Cerca..">
                                                        <span class="uk-form-help-block">
                                                        <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                           data-vocabulary_id="{{getVocabolario('Persone', false)->id}}"
                                                           data-token="{{ csrf_token() }}"
                                                           data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->id ])}}">Inserisci Termine</a>
                                                    </span>
                                                    </div>
                                                    <div id="termini_selezionati">
                                                    </div>
                                                </div>
                                                <input data-repeater-delete class="uk-button uk-width-medium-1-1 uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Persona"/>
                                            </div>
                                        </div>
                                    </div>
                                    <input data-repeater-create class="uk-button uk-button uk-width-medium-1-1 uk-button-success uk-margin-top" type="button" value="Aggiungi Persona"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-2-10 uk-row-first uk-container uk-height-1-1  uk-container-center">
                        <input data-repeater-delete class="uk-button uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Riga"/>
                    </div>
                </div>
            </div>

        @foreach(reset($valori) as $valore)
            <div data-repeater-item class="campi-etichetta-personaggi uk-form-row">
                <div class="uk-grid">
                    <div class="uk-width-medium-8-10 uk-row-first">
                        <div class="uk-form-row" data-uk-grid-margin>
                            <div class="uk-grid">
                                <div class="uk-width-medium-1-2">
                                    <h4>Etichetta</h4>
                                    <div class="md-input-wrapper md-input-filled">

                                        <div class="uk-autocomplete uk-form uk-position-relative  {{isset($valore['etichetta']) && !empty($valore['etichetta']) ? 'uk-hidden' : ''}}">
                                            <input id="etichetta" name="etichetta" type="text" data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                            <span class="uk-form-help-block">
                                                <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                   data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}"
                                                   data-token="{{ csrf_token() }}"
                                                   data-url="{{route('storeTerm', ['objectid' => getVocabolario('Etichette', false)->id ])}}">Inserisci Termine</a>
                                            </span>
                                        </div>
                                        <div id="termini_selezionati">
                                            @if(isset($valore['etichetta']) && !empty($valore['etichetta']))
                                                <div id="{{$valore['etichetta']}}" class="uk-alert uk-alert-info nome_persona"><input type="hidden" name="etichetta" value="{{$valore['etichetta']}}">
                                                    @php
                                                        $eticehtta= getTermById($valore['etichetta']);
                                                    @endphp
                                                    {{is_object($eticehtta) ? $eticehtta->termine : $eticehtta . ' (Etichetta)'}}

                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="persone-repeater uk-width-medium-1-2">
                                    <div data-repeater-list="persone" >
                                        <div class="uk-width-medium-1-1" >
                                            <h4>Personaggi</h4>
                                            <div class="drag-persona">
                                                <div data-repeater-item class="ptest uk-form-row" style="display: none;">
                                                    <div class="md-input-wrapper md-input-filled">
                                                        <div class="uk-autocomplete uk-form uk-position-relative">
                                                            <input id="personaggi" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->id}}" class="md-input personaggi suggest_termini" placeholder="Cerca..">
                                                            <span class="uk-form-help-block">
                                                        <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                           data-vocabulary_id="{{getVocabolario('Persone', false)->id}}"
                                                           data-token="{{ csrf_token() }}"
                                                           data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->id ])}}">Inserisci Termine</a>
                                                    </span>
                                                        </div>
                                                        <div id="termini_selezionati">
                                                        </div>
                                                    </div>
                                                    <input data-repeater-delete class="uk-button uk-width-medium-1-1 uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Persona"/>
                                                </div>
                                                @foreach($valore['persone'] as $persona)
                                                    <div data-repeater-item class="ptest uk-form-row">
                                                        <div class="md-input-wrapper md-input-filled">

                                                            <div id="termini_selezionati">
                                                                @if(isset($persona['persone']) && !empty($persona['persone']))
                                                                    @php
                                                                        $personaggio = getTermById($persona['persone']);
                                                                    @endphp
                                                                    <div id="{{$persona['persone']}}" class="uk-alert  {{is_object($personaggio) ? 'personaggio_' . $personaggio->id : ''}} uk-alert-info nome_persona"><input type="hidden" name="persone" value="{{$persona['persone']}}">

                                                                        {{is_object($personaggio) ? $personaggio->termine : $personaggio . ' (Etichetta)'}}
                                                                    </div>
                                                                @endif
                                                            </div>
                                                        </div>
                                                        <div class="uk-grid">
                                                            <div class="uk-width-medium-1-2">
                                                                <a data-repeater-delete  class="md-btn md-btn-danger md-btn-mini md-btn-wave-light md-btn-icon waves-effect waves-button waves-light" href="javascript:void(0)">
                                                                    Elimina {{is_object($personaggio) ? 'persona' : 'etichetta'}}
                                                                </a>
                                                            </div>
                                                            @if(is_object($personaggio))
                                                                <div class="uk-width-medium-1-2">
                                                                    <a class="md-btn md-btn-primary md-btn-mini md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                                                                       data-id="{{$personaggio->id}}"
                                                                       data-vocabolario="{{$personaggio->vocabularyid}}"
                                                                       data-termine="{{$personaggio->termine}}"
                                                                       data-token="{{ csrf_token() }}"
                                                                       data-url="{{route('updateTermine', ['objectid' => $personaggio->vocabulary_id, 'termid' => $personaggio->id, 'ajax' => 'true'])}}"
                                                                       href="javascript:void(0)" onclick="modificaTermine(this)">
                                                                        Modifica Persona
                                                                    </a>
                                                                </div>
                                                            @endif
                                                        </div>

                                                    </div>
                                                @endforeach
                                            </div>

                                        </div>
                                    </div>
                                    <input data-repeater-create class="uk-button uk-button uk-width-medium-1-1  md-btn-mini uk-button-success uk-margin-top" type="button" value="Aggiungi Persona"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-2-10 uk-row-first uk-container uk-height-1-1  uk-container-center">
                        <input data-repeater-delete class="uk-button uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Riga"/>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        <input data-repeater-create class="uk-button uk-width-1-3 uk-button uk-button-success uk-margin-top" type="button" value="Aggiungi riga locandina"/>
    </div>
@else
    <div class="etichetta-personaggi uk-margin-bottom uk-hidden">
        <div data-repeater-list="etichetta-personaggi" class="drag-etichetta">
            <div data-repeater-item class="campi-etichetta-personaggi uk-form-row">
                <div class="uk-grid">
                    <div class="uk-width-medium-8-10 uk-row-first">
                        <div class="uk-form-row" data-uk-grid-margin>
                            <div class="uk-grid">
                                <div class="uk-width-medium-1-2">
                                    <h4>Etichetta</h4>
                                    <div class="md-input-wrapper md-input-filled">
                                        <div class="uk-autocomplete uk-form uk-position-relative">
                                            <input id="etichetta" name="etichetta" type="text" data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}" class="md-input suggest_termini personaggi" placeholder="Cerca..">
                                            <span class="uk-form-help-block">
                                            <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                               data-vocabulary_id="{{getVocabolario('Etichette', false)->id}}"
                                               data-token="{{ csrf_token() }}"
                                               data-url="{{route('storeTerm', ['objectid' => getVocabolario('Etichette', false)->id ])}}">Inserisci Termine</a>
                                        </span>
                                        </div>
                                        <div id="termini_selezionati">
                                        </div>
                                    </div>
                                </div>
                                <div class="persone-repeater uk-width-medium-1-2">
                                    <div data-repeater-list="persone" >
                                        <div class="uk-width-medium-1-1">
                                            <h4>Personaggi</h4>
                                            <div class="drag-persona">
                                                <div data-repeater-item class="ptest uk-form-row">
                                                    <div class="md-input-wrapper md-input-filled">
                                                        <div class="uk-autocomplete uk-form uk-position-relative">
                                                            <input id="persone" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->id}}" class="md-input personaggi suggest_termini" placeholder="Cerca..">
                                                            <span class="uk-form-help-block">
                                                        <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                           data-vocabulary_id="{{getVocabolario('Persone', false)->id}}"
                                                           data-token="{{ csrf_token() }}"
                                                           data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->id ])}}">Inserisci Termine</a>
                                                    </span>
                                                        </div>
                                                        <div id="termini_selezionati">
                                                        </div>
                                                    </div>
                                                    <input data-repeater-delete class="uk-button uk-width-medium-1-1 uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Persona"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input data-repeater-create class="uk-button uk-button uk-width-medium-1-1 uk-button-success uk-margin-top" type="button" value="Aggiungi Persona"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-2-10 uk-row-first uk-container uk-height-1-1  uk-container-center">
                        <input data-repeater-delete class="uk-button uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Riga"/>
                    </div>
                </div>
            </div>
        </div>
        <input data-repeater-create class="uk-button uk-width-1-3 uk-button uk-button-success uk-margin-top" type="button" value="Aggiungi riga locandina"/>
    </div>
@endif
