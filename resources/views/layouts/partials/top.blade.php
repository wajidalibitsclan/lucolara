<div class="container logo-container">
    <div class="row">
        <div class="logo hidden-xs">
            <a href="{{route('home')}}" title="Torna alla homepage">
                <img src="{{asset('assets/img/logo.svg')}}" alt="logo">
                <!--LUCA RONCONI-->
            </a>
        </div>
    </div>
</div>
<div class="jumbotron carousel">
    <!-- MARKUP PER SOLA IMMAGINE IN EVIDENZA  1920x720-->
    <div class="carousel-item owl-height" style="background-image:url('@yield('immagine_in_evidenza')')"></div>
    <!-- FINE MARKUP PER SOLA IMMAGINE IN EVIDENZA -->
</div>
<div class="logo-shadow visible-xs"></div>
<div class="jumbotron navigation">
    <div class="container nav-container text-center nav-{{Request::segment(2)}}">
        <div class="row">
            <nav class="navbar visible-xs nav-mobile">
                <div class="bars-menu visible-xs">
                    <a href="javascript:;" title="Apri il menu" class="home-icon">
                        <img src="{{asset('assets/img/icon-bars.svg')}}" alt="" class="img-bars" width="30" height="30">
                        <img src="{{asset('assets/img/icon-close.svg')}}" alt="" class="img-close" width="30" height="30">
                    </a>
                </div>

                <div class="logo-mobile visible-xs">
                    <a href="{{route('home')}}" title="Torna alla homepage">
                        <img src="{{asset('assets/img/logo-w.svg')}}" alt="logo" width="80" height="80">
                    </a>
                </div>

                <div class="search-mobile visible-xs">
                    <a href="javascript:;" title="Cerca" class="search-icon" onclick="event.preventDefault();">
                        <img src="{{asset('assets/img/icon-search.svg')}}" alt="" class="img-search" width="30" height="30">
                    </a>
                </div>
    
                <ul class="nav navbar-nav">
                    <li {!! Request::segment(2) == 'biografia-di-luca-ronconi' ? 'class="active"': ''!!}>
                        <a href="{{route('listaArticoli', ['object' => 'biografia'])}}" class="biografia">Biografia</a>
                        {{-- <a href="{{pageUrl('biografia-di-luca-ronconi')}}" title="" class="biografia">Biografia</a> --}}
                    </li>
                    <li class="dropdown" {!! Request::segment(2) == 'luca1933' ? 'class="active"': ''!!}>
						<a href="javascript:;" title="" class="scuola">Luca Ronconi 1933-2015</a>
						<ul class="dropdown-menu">
                            @foreach(luca_1933_submenus() as $key=>$submenu)
                                <li {!! Request::segment(2) == $key ? 'class="active"': ''!!}>
                                    @if($submenu['object'] == 'extra')
                                        <a href="{{route('listaArticoli', ['object' => $submenu['object'], 'taxonomy' => 'categorie', 'termine' => $submenu['termine']])}}" class="scuola">{{$submenu['name']}}</a>
                                    @else
                                        <a href="{{route('listaArticoli', ['object' => $submenu['object']])}}" title="" class="scuola">{{ $submenu['name'] }}</a>
                                    @endif
                                </li>
                            @endforeach
						</ul>
					</li>
                    <li class="dropdown">
                        <a href="javascript:;" title="" class="extra">Dopo Luca Ronconi</a>
						<ul class="dropdown-menu">
                            @foreach(dopo_submenus() as $key=>$submenu)
                                @if(cat_has_articles($submenu['object']))
                                    <li {!! Request::segment(2) == $key ? 'class="active"': ''!!}>
                                        @if($submenu['object'] == 'extra')
                                            <a href="{{route('listaArticoli', ['object' => $submenu['object'], 'taxonomy' => 'categorie', 'termine' => $submenu['termine']])}}" class="extra">{{$submenu['name']}}</a>
                                        @else
                                            <a href="{{route('listaArticoli', ['object' => $submenu['object']])}}" class="extra">{{ $submenu['name'] }}</a>
                                        @endif    
                                    </li>
                                @endif
                            @endforeach
						</ul>	
                    </li>
                    <li {!! Request::segment(1) == 'santacristina' ? 'class="active"': ''!!}>
                        <a target="_blank" href="http://ctsantacristina.it/" class="santacristina">Santacristina</a>
                    </li>
                    <li {!! Request::segment(1) == 'videos' ? 'class="active"': ''!!}>
                        <a href="{{route('videos.index')}}" class="video">Video</a>
                    </li>
                </ul>
            </nav>

            <nav class="nav-desktop hidden-xs">
                <ul>
                    <li class="spacer">
                        <a href="{{route('home')}}" title="Torna alla Homepage" class="home-icon hidden">
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </li>
                    
                    <li {!! Request::segment(2) == 'biografia-di-luca-ronconi' ? 'class="active"': ''!!}>
                        <a href="{{route('listaArticoli', ['object' => 'biografia'])}}" class="biografia">Biografia</a>
                    </li>
                    <li class="dropdown" {!! Request::segment(2) == 'luca1933' ? 'class="active"': ''!!}>
						<a href="javascript:;" title="" class="scuola">Luca Ronconi 1933-2015</a>
						<ul class="dropdown-menu">
                            @foreach(luca_1933_submenus() as $key=>$submenu)
                                <li>
                                    @if($submenu['object'] == 'extra')
                                        <a href="{{route('listaArticoli', ['object' => $submenu['object'], 'taxonomy' => 'categorie', 'termine' => $submenu['termine']])}}" class="scuola">{{$submenu['name']}}</a>
                                    @else
                                        <a href="{{route('listaArticoli', ['object' => $submenu['object']])}}" title="" class="scuola">{{ $submenu['name'] }}</a>
                                    @endif
                                </li>
                            @endforeach
						</ul>
					</li>
                    <li class="dropdown">
                        <a href="javascript:;" title="" class="extra">Dopo Luca Ronconi</a>
						<ul class="dropdown-menu">
                            @foreach(dopo_submenus() as $key=>$submenu)
                                @if(cat_has_articles($submenu['object']))
                                    <li>
                                        @if($submenu['object'] == 'extra')
                                            <a href="{{route('listaArticoliDopo', ['object' => $submenu['object'], 'taxonomy' => 'categorie', 'termine' => $submenu['termine']])}}" class="extra">{{$submenu['name']}}</a>
                                        @else
                                            <a href="{{route('listaArticoliDopo', ['object' => $submenu['object']])}}" class="extra">{{ $submenu['name'] }}</a>
                                        @endif  
                                    </li>
                                @endif
                            @endforeach
						</ul>	
                    </li>
                    <li {!! Request::segment(1) == 'santacristina' ? 'class="active"': ''!!}>
                        <a target="_blank" href="http://ctsantacristina.it/" class="santacristina">Santacristina</a>
                    </li>
                    <li {!! Request::segment(1) == 'videos' ? 'class="active"': ''!!}>
                        <a href="{{route('videos.index')}}" title="" class="video">Video</a>
                    </li>
                    <li>
                        <a href="#" title="Cerca" class="search-icon" onclick="event.preventDefault();">
                            <i class="fa fa-search" aria-hidden="true"></i> Cerca
                        </a>
                    </li>
                </ul>

            </nav>

        </div>
    </div>

    <div class="search">
        <form action="{{route('search')}}" method="get">
            <div class="container">
                <div class="row">
                    <input id="ricerca" class="form-control form-control-lg" type="text" name="s" placeholder="Cerca">
                </div>
            </div>
        </form>
    </div>

</div>
