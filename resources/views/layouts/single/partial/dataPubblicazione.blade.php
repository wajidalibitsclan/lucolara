<div class="row">
    <div class="col-sm-12 testo">
        <small>
            @if($post->type != 'scuola')
                <div>Prima rappresentazione</div>
            @endif

            <div class="venue">
                @if(isset($post->teatro) && !empty($post->teatro))
                    <span class="teatro">{{$post->teatro}}, </span>
                @endif
                @if(isset($post->citta) && !empty($post->citta))
                    <span class="city">{{$post->citta}}</span>
                @endif
            </div>
            @php
                $mesi = array('gennaio', 'febbraio', 'marzo', 'aprile',
                                'maggio', 'giugno', 'luglio', 'agosto',
                                'settembre', 'ottobre', 'novembre','dicembre');
            @endphp
            <div class="date">
                @if($post->type != 'scuola')

                    {{-- @dd($post->data_di_pubblicazione) --}}
                    @php
                    // Your date string
                    $dateString = $post->data_di_pubblicazione;

                    // Create a Carbon instance
                    $carbonDate = \Carbon\Carbon::parse($dateString);

                    // Format the date to display only the day
                    $formattedDate = $carbonDate->format('d'); // 'l' represents the full name of the day
                    $month = $carbonDate->format('F');
                    $year = $carbonDate->format('Y');
                @endphp

                    <span class="dd">{{ $formattedDate }}</span>
                     <span class="mm">{{ $month }}</span>
                @endif
                @if (!empty($year))
                    <span class="yy">{{ $year }}</span>
                @endif
            </div>
        </small>
    </div>
</div>
