
{{-- @dd($article) --}}
<div class="card ">
    <div class="card-gutter">
        @if($article->hasImmagineInevidenza())
        <img src="{{$article->getImmagineInEvidenza('370x246')}}" alt="" class="img-responsive" style="min-height:180px;">
        @endif
        <div class="card-content">
            <h3>
                <a href="{{$article->getPermalink()}}" title="{{$article->title}}">{{$article->title}}</a>
            </h3>
            @if(isset($article->sotto_titolo) && !empty($article->sotto_titolo))
                <div class="author">{{$article->sotto_titolo}}</div>
            @endif
            @if((isset($article->teatro) && !empty($article->teatro)) || (isset($article->citta) && !empty($article->citta)) || isset($article->data_di_pubblicazione))
            <div class="excerpt">
                <div class="date">
                    @php
                        $mesi = array('gennaio', 'febbraio', 'marzo', 'aprile',
                        'maggio', 'giugno', 'luglio', 'agosto',
                        'settembre', 'ottobre', 'novembre','dicembre');

                        $dateString = $article->data_di_pubblicazione;
                        // Create a Carbon instance
                        $carbonDate = \Carbon\Carbon::parse($dateString);
                    @endphp


                    @if($article->type != 'scuola')

                        <span class="dd">{{$carbonDate->format('d')}} </span><span class="mm">{{$carbonDate->format('F')}} </span>
                    @endif
                    <span class="yy">{{$carbonDate->format('Y')}}</span>
                </div>
                <div class="event-details">
                    <div class="scroll-pane-">
                        @if(isset($article->teatro) && !empty($article->teatro))
                            <span class="venue">{{$article->teatro}}, </span>
                        @endif
                        @if(isset($article->citta) && !empty($article->citta))
                            <span class="city">{{$article->citta}}</span>
                        @endif
                    </div>
                </div>
            </div>
            @elseif($article->riassunto)
            <div class="excerpt">
                <div class="event-details">
                    {!! nl2br($article->riassunto) !!}
                </div>
            </div>
            @endif
            <div class="card-footer hidden">
                <div class="row">
                    <div class="col-xs-6">
                        <a href="#" title="Condividi su Facebook">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#" title="Condividi su Twitter">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#" title="Condividi su Instagram">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div class="col-xs-6 text-right">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
