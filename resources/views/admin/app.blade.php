<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="it"> <!--<![endif]-->
@section('htmlheader')
    @include('admin.partials.htmlheader')
@show

<body class="sidebar_main_open sidebar_main_swipe">

    @include('admin.partials.mainheader')

    @include('admin.partials.sidebar')

    @yield('main-content')

    @include('admin.partials.controlsidebar')

    @include('admin.partials.footer')


@section('scripts')
    @include('admin.partials.scripts')
@show

@stack('specific_scripts')
</body>
</html>
