<div class="md-card">
    <div class="md-card-content">
        <div class="uk-form-row" data-uk-grid-margin>
            <div class="uk-grid">
                <h3 class="heading_a">Data Di Pubblicazione e luogo</h3>
                <div class="uk-width-medium-1-1 uk-row-first">

                    <div class="md-input-wrapper">
                        <h3 class="heading_c">Teatro</h3>
                        <input type="text" class="md-input" name="teatro" value="{{ $result->teatro or '' }}"><span class="md-input-bar "></span>
                    </div>
                    <div class="md-input-wrapper">
                        <h3 class="heading_c">Città</h3>
                        <input type="text" class="md-input" name="citta" value="{{ $result->citta or '' }}"><span class="md-input-bar "></span>
                    </div>
                    <div class="md-input-wrapper">
                        <h3 class="heading_c">Data</h3>
                        <div class="uk-input-group">
                            <span class="uk-input-group-addon"><i class="uk-input-group-icon uk-icon-calendar"></i></span>
                            <label for="uk_dp_1">Seleziona</label>
                            @php
                                if(isset( $result->data_di_pubblicazione ) && !empty( $result->data_di_pubblicazione )){
                                    $data_di_pubblicazione = \Carbon\Carbon::parse($result->data_di_pubblicazione);
                                    $data_di_pubblicazione = $data_di_pubblicazione->day . '/' . $data_di_pubblicazione->month .'/' . $data_di_pubblicazione->year;
                                }
                            @endphp
                            <input class="md-input" type="text" name="data_di_pubblicazione" id="uk_dp_1" value="{{$data_di_pubblicazione or ''}}" data-uk-datepicker="{format:'DD/MM/YYYY'}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>