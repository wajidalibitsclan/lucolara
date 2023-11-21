<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="it"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="it"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no"/>

    <link rel="icon" type="image/png" href="{{asset('assets/img/favicon.png?v=1.4')}}">

    <title>Login LucaRonconi.it</title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet' type='text/css'>

    <!-- uikit -->
    <link rel="stylesheet" href="{{asset('adminassets/bower_components/uikit/css/uikit.almost-flat.min.css')}}"/>

    <!-- altair admin login page -->
    <link rel="stylesheet" href="{{asset('adminassets/assets/css/login_page.min.css')}}" />

</head>
<body class="login_page">
<div class="login_page_wrapper">
    <div class="md-card" id="login_card">
        <div class="md-card-content large-padding" id="login_form">
            <div class="login_heading">
                <div class="user_avatar"></div>
            </div>
            <form method="POST" action="{{ url('/login') }}">
                {{ csrf_field() }}
                <div class="uk-form-row md-input-wrapper-danger">
                    <label for="login_email">Email</label>
                    <input class="md-input{{ $errors->has('email') ? ' md-input-danger' : '' }}" type="text" id="login_email" name="email" value="{{ old('email') }}" type="email" />
                    @if ($errors->has('email'))
                        <div class="parsley-errors-list filled" id="parsley-id-5">
                            <span class="parsley-required">
                                {{ $errors->first('email') }}
                            </span>
                        </div>
                    @endif
                </div>
                <div class="uk-form-row">
                    <label for="password">Password</label>
                    <input class="md-input{{ $errors->has('password') ? ' md-input-danger' : '' }}" id="password" type="password" name="password" />
                    @if ($errors->has('password'))
                        <div class="parsley-errors-list filled" id="parsley-id-5">
                            <span class="parsley-required">
                                {{ $errors->first('password') }}
                            </span>
                        </div>
                    @endif
                </div>
                <div class="uk-margin-medium-top">
                    <input type="submit" class="md-btn md-btn-primary md-btn-block md-btn-large" value="LogIn" />
                </div>

                <div class="uk-margin-top">
                    <a href="#" id="login_help_show" class="uk-float-right">Need help?</a>
                    <span class="icheck-inline">
                            <input type="checkbox" name="remember" id="login_page_stay_signed" data-md-icheck />
                            <label for="login_page_stay_signed" class="inline-label">Rimani Loggato</label>
                        </span>
                </div>
            </form>
        </div>
        <div class="md-card-content large-padding uk-position-relative" id="login_help" style="display: none">
            <button type="button" class="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
            <h2 class="heading_b uk-text-success">Can't log in?</h2>
            <p>Here’s the info to get you back in to your account as quickly as possible.</p>
            <p>First, try the easiest thing: if you remember your password but it isn’t working, make sure that Caps Lock is turned off, and that your username is spelled correctly, and then try again.</p>
            <p>If your password still isn’t working, it’s time to <a href="#" id="password_reset_show">reset your password</a>.</p>
        </div>
        <div class="md-card-content large-padding" id="login_password_reset" style="display: none">
            <button type="button" class="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
            <h2 class="heading_a uk-margin-large-bottom">Reset password</h2>
            <form>
                <div class="uk-form-row">
                    <label for="login_email_reset">Your email address</label>
                    <input class="md-input" type="text" id="login_email_reset" name="login_email_reset" />
                </div>
                <div class="uk-margin-medium-top">
                    <input type="submit" class="md-btn md-btn-primary md-btn-block">Reset password</input>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- common functions -->
<script src="{{asset('adminassets/assets/js/common.min.js')}}"></script>
<!-- uikit functions -->
<script src="{{asset('adminassets/assets/js/uikit_custom.min.js')}}"></script>
<!-- altair core functions -->
<script src="{{asset('adminassets/assets/js/altair_admin_common.min.js')}}"></script>

<!-- altair login page functions
<script src="{{asset('adminassets/assets/js/pages/login.min.js')}}"></script> -->

<script>
    // check for theme
    if (typeof(Storage) !== "undefined") {
        var root = document.getElementsByTagName( 'html' )[0],
                theme = localStorage.getItem("altair_theme");
        if(theme == 'app_theme_dark' || root.classList.contains('app_theme_dark')) {
            root.className += ' app_theme_dark';
        }
    }
</script>

</body>
</html>