<div class="md-card">

    <div class="md-card-content">
        <h3 class="heading_b uk-margin-bottom">Le parole di Luca Ronconi</h3>
        <div id="file_intervista">
            <div data-repeater-list="interviste_e_dichiarazioni[file]">
                @if(isset($result->interviste_e_dichiarazioni['file']) && !empty($result->interviste_e_dichiarazioni['file']))
                    @foreach($result->interviste_e_dichiarazioni['file'] as $file)
                        <div data-repeater-item>
                            <div class="uk-width-1-1">
                                @if(isset($file['id']) && !empty($file['id']))
                                    <div id="documento_allegato" class="md-input-wrapper">
                                        <a class="md-btn md-btn-danger md-btn-mini md-btn-wave-light waves-effect waves-button waves-light rimuovi_documento" href="#">
                                            <i class="material-icons uk-icon">&#xE872;</i>
                                            Rimuovi file {{getFileTitleFromId($file['id'])}}
                                        </a>

                                        <input type="hidden" name="documento_interviste_id_file"  value="{{$file['id']}}">

                                    </div>
                                @endif
                                <div class="md-input-wrapper">
                                    <input type="file" name="documento_interviste" value="">
                                </div>
                                <div class="md-input-wrapper">
                                    <h3 class="heading_c">Etichetta Documento</h3>
                                    <input type="text" class="md-input" name="etichetta_documento" value="{{$file['etichetta_documento'] or ''}}"><span class="md-input-bar "></span>
                                </div>
                                <input class="md-btn md-btn-danger" data-repeater-delete type="button" value="Rimuovi blocco"/>
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
                            <input type="text" class="md-input" name="etichetta_documento" value=""><span class="md-input-bar "></span>
                        </div>
                        <input class="md-btn md-btn-danger" data-repeater-delete type="button" value="Rimuovi blocco"/>
                    </div>
                @endif
            </div>
            <input data-repeater-create type="button" class="md-btn md-btn-success" value="Aggiungi Documento"/>
        </div>
        <div class="rassegna_stampa">
            <div data-repeater-list="interviste_e_dichiarazioni[elenco]">
                <ul class="uk-nestable" data-uk-nestable="{handleClass:'uk-nestable-handle'}">
                    @if(isset($result->interviste_e_dichiarazioni['elenco']) && !empty($result->interviste_e_dichiarazioni['elenco']))
                        @foreach($result->interviste_e_dichiarazioni['elenco'] as $intervista)
                            <li class="uk-nestable-item" data-repeater-item>
                                <div class="uk-nestable-panel">
                                    <i class="uk-nestable-handle material-icons"></i>
                                    <div class="uk-width-medium-1-1 uk-row-first">

                                        <div class="uk-form-row">
                                            <div class="md-input-wrapper md-input-filled">
                                                <label>Titolo Intervista</label>
                                                <input type="text" name="titolo_intervista" class="md-input" value="{{$intervista['titolo_intervista']}}"><span class="md-input-bar "></span>
                                            </div>
                                        </div>

                                        <div class="uk-form-row">
                                            <div class="uk-grid" data-uk-grid-margin="">
                                                <div class="uk-width-medium-1-3 uk-row-first">
                                                    <div class="md-input-wrapper md-input-filled">
                                                        <label>Testata</label>
                                                        <input type="text"  name="testata" class="md-input" value="{{$intervista['testata']}}"><span class="md-input-bar "></span>
                                                    </div>
                                                </div>
                                                <div class="uk-width-medium-1-3">
                                                    <div class="md-input-wrapper md-input-filled">
                                                        <label>Autore</label>
                                                        <input type="text" name="autore" class="md-input" value="{{$intervista['autore']}}"><span class="md-input-bar "></span>
                                                    </div>
                                                </div>
                                                <div class="uk-width-medium-1-3">
                                                    <div class="md-input-wrapper md-input-filled">
                                                        <label>Data</label>
                                                        <input type="text" name="data" class="md-input" value="{{$intervista['data']}}"><span class="md-input-bar "></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- innner repeater -->
                                        <div class="inner-repeater">
                                            <div data-repeater-list="domanda_risposta">
                                                @if(isset($intervista['domanda_risposta']) && !empty($intervista['domanda_risposta']))
                                                    @foreach($intervista['domanda_risposta'] as $domanda_risposta)
                                                        <div class="uk-form-row" data-repeater-item>
                                                            <div class="md-input-wrapper md-input-filled">
                                                                <label>Domanda Intervista</label>
                                                                <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="domanda_intervista">{{$domanda_risposta['domanda_intervista']}}</textarea><span class="md-input-bar "></span>
                                                            </div>
                                                            <div class="md-input-wrapper md-input-filled">
                                                                <label>Risposta Intervista</label>
                                                                <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="risopsta_intervista">{{$domanda_risposta['risopsta_intervista']}}</textarea><span class="md-input-bar "></span>
                                                            </div>
                                                            <input data-repeater-delete type="button" class="md-btn md-btn-danger" value="Elimina"/>
                                                        </div>
                                                    @endforeach
                                                @else
                                                    <div class="uk-form-row" data-repeater-item>
                                                        <div class="md-input-wrapper md-input-filled">
                                                            <label>Domanda Intervista</label>
                                                            <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="domanda_intervista"></textarea><span class="md-input-bar "></span>
                                                        </div>
                                                        <div class="md-input-wrapper md-input-filled">
                                                            <label>Risposta Intervista</label>
                                                            <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="risopsta_intervista"></textarea><span class="md-input-bar "></span>
                                                        </div>
                                                        <input data-repeater-delete type="button" class="md-btn md-btn-danger" value="Elimina"/>
                                                    </div>
                                                @endif
                                            </div>
                                            <input data-repeater-create type="button" class="md-btn md-btn-success" value="Aggiungi Blocco Intervista"/>
                                        </div>
                                    </div>
                                </div>
                                <input class="md-btn md-btn-danger" data-repeater-delete type="button" value="Rimuovi blocco"/>
                            </li>
                        @endforeach
                    @else
                        <li class="uk-nestable-item" data-repeater-item>
                            <div class="uk-nestable-panel">
                                <i class="uk-nestable-handle material-icons"></i>
                                <div class="uk-width-medium-1-1 uk-row-first">

                                    <div class="uk-form-row">
                                        <div class="md-input-wrapper md-input-filled">
                                            <label>Titolo Intervista</label>
                                            <input type="text" name="titolo_intervista" class="md-input"><span class="md-input-bar "></span>
                                        </div>
                                    </div>

                                    <div class="uk-form-row">
                                        <div class="uk-grid" data-uk-grid-margin="">
                                            <div class="uk-width-medium-1-3 uk-row-first">
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Testata</label>
                                                    <input type="text"  name="testata" class="md-input"><span class="md-input-bar "></span>
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-1-3">
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Autore</label>
                                                    <input type="text" name="autore" class="md-input"><span class="md-input-bar "></span>
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-1-3">
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Data</label>
                                                    <input type="text" name="data" class="md-input"><span class="md-input-bar "></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- innner repeater -->
                                    <div class="inner-repeater">
                                        <div data-repeater-list="domanda_risposta">
                                            <div class="uk-form-row" data-repeater-item>
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Domanda Intervista</label>
                                                    <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="domanda_intervista"></textarea><span class="md-input-bar "></span>
                                                </div>
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Risposta Intervista</label>
                                                    <textarea  id="descrizione_media" cols="30" rows="4" class="md-input selecize_init" name="risopsta_intervista"></textarea><span class="md-input-bar "></span>
                                                </div>
                                                <input data-repeater-delete type="button" class="md-btn md-btn-danger" value="Elimina"/>
                                            </div>

                                        </div>
                                        <input data-repeater-create type="button" class="md-btn md-btn-success" value="Aggiungi Blocco Intervista"/>
                                    </div>
                                </div>
                            </div>
                            <input class="md-btn md-btn-danger" data-repeater-delete type="button" value="Rimuovi blocco"/>
                        </li>
                    @endif
                </ul>
            </div>
            <div class="uk-form-row">
                <div class="md-input-wrapper">

                    <input class="md-btn md-btn-success" data-repeater-create type="button" value="Aggiungi un nuovo blocco"/>
                </div>
            </div>
        </div>
    </div>
</div>
