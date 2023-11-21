<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>@yield('title')</title>
    @yield('meta')
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="icon" href="{{asset('assets/img/favicon.png?v=1.4')}}">
    <link rel="stylesheet" href="{{asset('assets/css/all.css?v=1.1')}}">
    <script src="{{asset('assets/js/vendor/modernizr-2.6.2.min.js')}}"></script>
    <script src="{{asset('assets/js/vendor/respond.min.js')}}"></script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-92169193-1', 'auto');
        ga('send', 'pageview');

    </script>
</head>
