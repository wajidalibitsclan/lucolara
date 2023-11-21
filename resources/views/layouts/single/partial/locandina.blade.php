<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<div class="row">
    <div class="col-sm-12">

        @if (count(json_decode($post->locandina)) > 0)


        @foreach(json_decode($post->locandina) as $key => $value)

            {{-- @dd($value->{'etichetta-personaggi'}) --}}
            @if(isset($value->{'etichetta-personaggi'}) && !empty($value->{'etichetta-personaggi'}))

                @foreach($value->{'etichetta-personaggi'} as $row)
                    <div class="figura">

                        {{-- @dd($row->{'etichetta'}) --}}
                        @if(isset($row->{'etichetta'}) && !empty($row->{'etichetta'}))
                            @php
                                $termine = getTermById($row->{'etichetta'});
                            @endphp
                            @if(isset($termine->termine) && !empty($termine->termine))
                                {{$termine->termine}}:
                            @endif&nbsp;
                        @endif

                        {{-- @dd($row->{'persone'}) --}}
                        @if(isset($row->{'persone'}) && !empty($row->{'persone'}))
                            <span>
                                @foreach($row->{'persone'} as $key => $persona)
                                    {{-- @dd($persona) --}}
                                    @php
                                        $termine_persona = getTermById($persona->persone);
                                    @endphp

                                    {{-- @dd($termine_persona) --}}
                                    @if(is_object($termine_persona))
                                        <a href="{{ route('termList', ['vocabolario' => 'persone', 'slug' => $termine_persona->slug ])}}">{{trim($termine_persona->termine)}}</a>
                                        {{$persona == end($row->{'persone'}) ? '' : ','}}
                                    @else
                                        {{$persona->persone}}{{$persona == end($row->{'persone'}) ? '' : ','}}
                                    @endif

                                @endforeach
                            </span>
                        @endif
                    </div>
                @endforeach
                <hr>
            @endif
                 @if(isset($value->{'personaggio-interprete'}) && !empty($value->{'personaggio-interprete'}))
                    @if(isset($value->{'ordine'}) && $value->{'ordine'} == 'apparizione')
                        <div class="figura">Personaggi - Interpreti (in ordine di apparizione):</div>
                    @elseif(isset($value->{'ordine'}) && $value->{'ordine'} == 'alfabetico')
                        <div class="figura">Personaggi - Interpreti (in ordine alfabetico):</div>
                    @else
                        <div class="figura">Personaggi - Interpreti:</div>
                    @endif
                    @foreach($value->{'personaggio-interprete'} as $row)
                        <div class="figura">
                            @if(isset($row->{'ruolo'}) && !empty($row->{'ruolo'}))
                                @php
                                    $ruolo = getTermById($row->{'ruolo'});
                                @endphp
                                @if(is_object($ruolo))
                                    {{$ruolo->termine}}
                                @else
                                    {{$ruolo}}
                                @endif
                            @endif
                            @if(isset($row->{'persone'}) && !empty($row->{'persone'}))
                                    @php
                                        $termine_persona = getTermById($row->{'persone'});
                                    @endphp
                                    @if(is_object($termine_persona))
                                        - <span><a href="{{route('termList', ['vocabolario' => 'persone', 'slug' => $termine_persona->slug ])}}">{{$termine_persona->termine}}</a></span>
                                    @else
                                        - <span>{{$termine_persona}}</span>
                                    @endif
                            @endif
                        </div>
                    @endforeach
                    <hr>
                @endif
        @endforeach
        @endif


        @if(isset($post->testo_libero_locandina) && !empty($post->testo_libero_locandina))
            <div class="testo">
                <span>
                    {!! $post->testo_libero_locandina  !!}
                </span>
            </div>
        @endif
    </div>
</div>
<hr>
