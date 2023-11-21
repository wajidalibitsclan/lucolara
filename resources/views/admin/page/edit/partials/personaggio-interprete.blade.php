@if(isset($valori) && !empty($valori))
    <div class="personaggio-interprete uk-margin-bottom">
        <div data-repeater-list="personaggio-interprete">
            <div class="left-default">
                <div class="uk-form-row">
                    <label><input type="radio" name="locandina[{{$key + 1 }}][ordine]" value="apparizione" {{isset($ordine) && $ordine == 'apparizione' ? 'checked' : ''}}/> In ordine di apparizione</label>
                    <label><input type="radio" name="locandina[{{$key + 1}}][ordine]" value="alfabetico" {{isset($ordine) && $ordine == 'alfabetico' ? 'checked' : ''}}/> In ordine alfabetico</label>
                    <label><input type="radio" name="locandina[{{$key + 1}}][ordine]" value="" {{!isset($ordine) || $ordine == '' ? 'checked' : ''}}/> Nessun Ordinamento</label>
                </div>
                <div data-repeater-item class="campi-personaggio-interprete uk-form-row" style="display: none;">
                    <div class="uk-grid">
                        <div class="uk-width-medium-8-10 uk-row-first">
                            <div class="uk-form-row" data-uk-grid-margin>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-2">
                                        <h4>Personaggio</h4>
                                        <div class="md-input-wrapper md-input-filled">
                                            <div class="uk-autocomplete uk-form uk-position-relative">
                                                <input id="ruolo" name="ruolo" type="text" data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Ruolo', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                            </div>
                                            <div id="termini_selezionati">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <h4>Interprete</h4>
                                        <div class="md-input-wrapper md-input-filled">
                                            <div class="uk-autocomplete uk-form uk-position-relative">
                                                <input id="persone" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                            </div>
                                            <div id="termini_selezionati">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-2-10 uk-row-first uk-container uk-height-1-1  uk-container-center">
                            <input data-repeater-delete class="uk-button uk-button-danger uk-vertical-align-middle" type="button" value="Elimina Riga"/>
                        </div>
                    </div>
                </div>
                @foreach(reset($valori) as $key => $valore)

                <div data-repeater-item class="campi-personaggio-interprete uk-form-row">
                    <div class="uk-grid">
                        <div class="uk-width-medium-8-10 uk-row-first">
                                <div class="uk-form-row" data-uk-grid-margin>
                                    <div class="uk-grid">
                                        <div class="uk-width-medium-1-2">
                                            <h4>Personaggio</h4>
                                            <div class="md-input-wrapper md-input-filled">
                                                <div class="uk-autocomplete uk-form uk-position-relative {{isset($valore['ruolo']) && !empty($valore['ruolo']) ? 'uk-hidden' : ''}}">
                                                    <input id="ruolo" name="ruolo" type="text" data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                    <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Ruolo', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                                </div>
                                                <div id="termini_selezionati">
                                                    @if(isset($valore['ruolo']) && !empty($valore['ruolo']))
                                                        <div id="{{$valore['ruolo']}}" class="uk-alert  uk-alert-info nome_persona"><input type="hidden" name="ruolo" value="{{$valore['ruolo']}}">
                                                            @php
                                                                $ruolo = getTermById($valore['ruolo']);
                                                            @endphp
                                                            {{is_object($ruolo) ? $ruolo->termine : $valore['ruolo'] . ' (Etichetta)'}}
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-medium-1-2">
                                            <h4>Interprete</h4>
                                            <div class="md-input-wrapper md-input-filled">
                                                <div class="uk-autocomplete uk-form uk-position-relative  {{isset($valore['persone']) && !empty($valore['persone']) ? 'uk-hidden' : ''}}">
                                                    <input id="persone" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                    <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                                </div>
                                                <div id="termini_selezionati">
                                                    @if(isset($valore['persone']) && !empty($valore['persone']))
                                                        @php
                                                            $persona = getTermById($valore['persone'])
                                                        @endphp
                                                        <div id="{{$valore['persone']}}" class="uk-alert {{is_object($persona) ? 'personaggio_' . $persona->_id : ''}} uk-alert-info nome_persona"><input type="hidden" name="persone" value="{{$valore['persone']}}">
                                                            {{is_object($persona) ? $persona->termine : $valore['persone'] . '  (Etichetta)'}}
                                                        </div>
                                                    @endif
                                                </div>
                                                <div class="uk-grid">

                                                    @if(is_object($persona))
                                                        <div class="uk-width-medium-1-2">
                                                            <a class="md-btn md-btn-primary md-btn-mini md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                                                               data-id="{{$persona->_id}}"
                                                               data-vocabolario="{{$persona->vocabulary_id}}"
                                                               data-termine="{{$persona->termine}}"
                                                               data-token="{{ csrf_token() }}"
                                                               data-url="{{route('updateTermine', ['objectid' => $persona->vocabulary_id, 'termid' => $persona->_id, 'ajax' => 'true'])}}"
                                                               href="javascript:void(0)" onclick="modificaTermine(this)">
                                                                Modifica Persona
                                                            </a>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
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
    </div>
@else
    <div class="personaggio-interprete uk-margin-bottom uk-hidden">
        <div data-repeater-list="personaggio-interprete">
            <div class="left-default">
                <div class="uk-form-row">
                    <label><input type="radio" name="locandina[][ordine]" value="apparizione" /> In ordine di apparizione</label>
                    <label><input type="radio" name="locandina[][ordine]" value="alfabetico" /> In ordine alfabetico</label>
                    <label><input type="radio" name="locandina[][ordine]" value=""  selected /> Nessun Ordinamento</label>
                </div>
                <div data-repeater-item class="campi-personaggio-interprete uk-form-row">
                    <div class="uk-grid">
                        <div class="uk-width-medium-8-10 uk-row-first">
                            <div class="uk-form-row" data-uk-grid-margin>
                                <div class="uk-grid">
                                    <div class="uk-width-medium-1-2">
                                        <h4>Personaggio</h4>
                                        <div class="md-input-wrapper md-input-filled">
                                            <div class="uk-autocomplete uk-form uk-position-relative">
                                                <input id="ruolo" name="ruolo" type="text" data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Ruolo', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Ruolo', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                            </div>
                                            <div id="termini_selezionati">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <h4>Interprete</h4>
                                        <div class="md-input-wrapper md-input-filled">
                                            <div class="uk-autocomplete uk-form uk-position-relative">
                                                <input id="persone" name="persone" type="text" data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}" class="md-input suggest_termini" placeholder="Cerca..">
                                                <span class="uk-form-help-block">
                                                    <a herf="#" class="uk-button uk-width-medium-1-1 uk-vertical-align-middle aggiuingiEtichetta" onclick="addEtichetta(this)"
                                                       data-vocabulary_id="{{getVocabolario('Persone', false)->_id}}"
                                                       data-token="{{ csrf_token() }}"
                                                       data-url="{{route('storeTerm', ['objectid' => getVocabolario('Persone', false)->_id ])}}">Inserisci Termine</a>
                                                </span>
                                            </div>
                                            <div id="termini_selezionati">
                                            </div>
                                        </div>
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
    </div>
@endif



