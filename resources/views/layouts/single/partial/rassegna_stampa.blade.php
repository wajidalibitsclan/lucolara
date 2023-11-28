{{-- @dd($post->rassegna_stampa) --}}

@if (
    (isset($post->rassegna_stampa['titolo']) && !empty($post->rassegna_stampa['titolo'])) ||
        ((isset($post->rassegna_stampa['descrizione']) && !empty($post->rassegna_stampa['descrizione'])) ||
            (isset($post->rassegna_stampa['file']) && !empty($post->rassegna_stampa['file']))) ||
        ((isset($post->rassegna_stampa['descrizione']) && !empty($post->rassegna_stampa['descrizione'])) ||
            (isset($post->rassegna_stampa['file']) && !empty($post->rassegna_stampa['file']))) ||
        (isset($post->rassegna_stampa['elenco']) && !empty($post->rassegna_stampa['elenco'])))
    <div class="container">
        <div class="row">
            <hr>
            <div class="col-sm-12">
                <h3>Rassegna Stampa</h3>
                <div class="interview">
                    <div class="row">
                        <div class="col-sm-12">
                            @if (isset($post->rassegna_stampa['titolo']) && !empty($post->rassegna_stampa['titolo']))
                                <h4>
                                    {{ $post->rassegna_stampa['titolo'] }}
                                </h4>
                            @endif
                            @if (isset($post->rassegna_stampa['file']) && !empty($post->rassegna_stampa['file']))
                                @foreach ($post->rassegna_stampa['file'] as $file)
                                    @if (getFileUrlFromId($file['id']))
                                        <div class="pdf-link">
                                            <a href="{{ getFileUrlFromId($file['id']) }}" title="" target="_blank">
                                                <i class="fa fa-file-pdf-o"></i>
                                                {{ $file['etichetta_documento'] or getFileTitleFromId($file['id']) }}
                                            </a>
                                        </div>
                                    @endif
                                @endforeach
                            @endif
                            @if (
                                (isset($post->rassegna_stampa['descrizione']) && !empty($post->rassegna_stampa['descrizione'])) ||
                                    (isset($post->rassegna_stampa['file']) && !empty($post->rassegna_stampa['file'])))
                                <h4>
                                    <div style="margin-top: 10px;">
                                        {!! $post->rassegna_stampa['descrizione'] !!}
                                    </div>
                                </h4>
                            @endif
                            <br>
                        </div>

                        @if (isset($post->rassegna_stampa['elenco']) && !isEmptyValue($post->rassegna_stampa['elenco']))

                            @foreach ($post->rassegna_stampa['elenco'] as $rassegna)
                                @if (isset($rassegna['titolo-rassegna']))
                                    <div class="col-sm-10 col-sm-push-2">
                                        <h4 class="interview-title">{{ $rassegna['titolo-rassegna'] }}</h4>
                                    </div>
                                @endif
                                @if (isset($rassegna['estratti']) && !empty($rassegna['estratti']))
                                    <div class="col-sm-10 col-sm-push-2 interview-block">
                                        @foreach ($rassegna['estratti'] as $estratto)
                                            <div class="answer">
                                                {{ $estratto['estratto'] }}
                                            </div>
                                        @endforeach
                                    </div>
                                @endif
                                <div class="col-sm-2 col-sm-pull-10 interview-details">
                                    @if (isset($rassegna['autore']) && !empty($rassegna['autore']))
                                        <div class="interviewer">{{ $rassegna['autore'] }}</div>
                                    @endif
                                    @if (isset($rassegna['testata']) && !empty($rassegna['testata']))
                                        <div class="newspaper">«{{ $rassegna['testata'] }}»</div>
                                    @endif
                                    @if (isset($rassegna['data']) && !empty($rassegna['data']))
                                        <div class="interview-date">{{ $rassegna['data'] }}</div>
                                    @endif
                                </div>
                            @endforeach
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
@endif
