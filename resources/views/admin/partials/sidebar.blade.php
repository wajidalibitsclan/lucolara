<aside id="sidebar_main">

    <div class="sidebar_main_header">
        <div class="sidebar_logo" style="height: 100%">
            <a href="{{route('home')}}" class="sSidebar_hide sidebar_logo_large">
                <img class="logo_regular" src="{{asset('assets/img/logo.svg')}}" alt="" height="71" width="71"/>
                <img class="logo_light" src="{{asset('assets/img/logo.svg')}}" alt="" height="71" width="71"/>
            </a>
            <a href="{{route('home')}}" class="sSidebar_show sidebar_logo_small">
                <img class="logo_regular" src="{{asset('assets/img/logo.svg')}}" alt="" height="32" width="32"/>
                <img class="logo_light" src="{{asset('assets/img/logo.svg')}}" alt="" height="32" width="32"/>
            </a>
        </div>
    </div>

    <div class="menu_section">
        <ul>
            <li class="current_section" title="Dashboard">
                <a href="{{ route('adminHome') }}">
                    <span class="menu_icon"><i class="material-icons">&#xE88A;</i></span>
                    <span class="menu_title">Dashboard</span>
                </a>
            </li>
            <li  title="Teatro">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE54E;</i>
                    </span>
                    <span class="menu_title">Ronconi 1933-2015</span>
                </a>
                <ul>
                    <li><a href="{{route('adminList', ['object' => 'lucaronconi1933_2015'])}}">Visualizza articoli</a></li>
                    <li><a href="{{route('adminAdd', ['object' => 'lucaronconi1933_2015'])}}">Inserici nuovo</a></li>
                </ul>
            </li>
            <li  title="Dopo Luca Ronconi">
                <a href="#">
                    <span class="menu_icon"><i class="material-icons">&#xE873;</i></span>
                    <span class="menu_title">Dopo Luca Ronconi</span>
                </a>
                <ul>
                    <li><a href="{{route('adminList', ['object' => 'dopo'])}}">Visualizza articoli</a></li>
                    <li><a href="{{route('adminAdd', ['object' => 'dopo'])}}">Inserici nuovo</a></li>
                </ul>
            </li>
            <li  title="Santacristina">
                <a href="#">
                    <span class="menu_icon"><i class="material-icons">menu</i></span>
                    <span class="menu_title">Santacristina</span>
                </a>
                <ul>
                    <li><a href="{{route('adminList', ['object' => 'santacristina'])}}">Visualizza articoli</a></li>
                    <li><a href="{{route('adminAdd', ['object' => 'santacristina'])}}">Inserici nuovo</a></li>
                </ul>
            </li>
            <li  title="Pagine">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE14D;</i>
                    </span>
                    <span class="menu_title">Biografia</span>
                </a>
                <ul>
                    <li><a href="{{route('adminList', ['object' => 'biografia'])}}">Visualizza Biografia</a></li>
                    <li><a href="{{route('adminAdd', ['object' => 'biografia'])}}">Inserici nuova</a></li>
                </ul>
            </li>
            <li  title="Media">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE2BC;</i>
                    </span>
                    <span class="menu_title">Media</span>
                </a>
                <ul>
                    <li><a href="{{route('mediaList')}}">Visualizza tutti i media</a></li>
                    <li><a href="#">Inserici nuovo</a></li>
                </ul>
            </li>
            <li  title="Vocabolari">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE02F;</i>
                    </span>
                    <span class="menu_title">Vocabolari</span>
                </a>
                <ul>
                    <li><a href="{{route('listaVocabolari')}}">Visualizza tutti i vocabolari</a></li>
                    <li><a href="{{route('creaVocabolario')}}">Inserici nuovo</a></li>
                </ul>
            </li>
            <li  title="Pagine">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE02F;</i>
                    </span>
                    <span class="menu_title">Pagine</span>
                </a>
                <ul>
                    <li><a href="{{route('listPage')}}">Visualizza tutte le pagine</a></li>
                </ul>
            </li>
            <li  title="Pagine">
                <a href="#">
                    <span class="menu_icon">
                        <span class="material-icons">videocam</span>
                    </span>
                    <span class="menu_title">Videos</span>
                </a>
                <ul>
                    <li><a href="{{route('admin.videos.create')}}">Add Video</a></li>
                    <li><a href="{{route('admin.videos.index')}}">Video list</a></li>
                    <li><a href="{{route('admin.video_categories.create')}}">Add Category</a></li>
                    <li><a href="{{route('admin.video_categories.index')}}">Category list</a></li>
                </ul>
            </li>
            <li  title="Utenti">
                <a href="#">
                    <span class="menu_icon">
                        <i class="material-icons">&#xE87C;</i>
                    </span>
                    <span class="menu_title">Utenti</span>
                </a>
                <ul>
                    <li><a href="{{route('adminList', ['object' => 'user'])}}">Lista Utenti</a></li>
                    <li><a href="{{route('adminAdd', ['object' => 'user'])}}">Inserici Utente</a></li>
                </ul>
            </li>

        </ul>
    </div>
</aside><!-- main sidebar end -->

