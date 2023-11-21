<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no"/>

    <title>Amministrazione Luca Ronconi</title>

    @yield('additional_styles')
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <!-- weather icons -->
    <link rel="stylesheet" href="{{asset('adminassets/bower_components/weather-icons/css/weather-icons.min.css')}}" media="all">
    <!-- metrics graphics (charts) -->
    <link rel="stylesheet" href="{{asset('adminassets/bower_components/metrics-graphics/dist/metricsgraphics.css')}}">
    <!-- chartist -->
    <link rel="stylesheet" href="{{asset('adminassets/bower_components/chartist/dist/chartist.min.css')}}">

    <!-- uikit -->
    <link rel="stylesheet" href="{{asset('adminassets/bower_components/uikit/css/uikit.almost-flat.min.css')}}" media="all">

    <!-- flag icons -->
    <link rel="stylesheet" href="{{asset('adminassets/assets/icons/flags/flags.min.css')}}" media="all">

    <!-- style switcher -->
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/style_switcher.min.css')}}" media="all">

    <!-- altair admin -->
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/main.min.css')}}" media="all">

    <!-- themes -->
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/themes/_theme_f.min.css')}}" media="all">

    <!-- matchMedia polyfill for testing media queries in JS -->
    <!--[if lte IE 9]>
    <script type="text/javascript" src="{{asset('adminassets/bower_components/matchMedia/matchMedia.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminassets/bower_components/matchMedia/matchMedia.addListener.js')}}"></script>
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/ie.css')}}" media="all">
    <![endif]-->
</head>
