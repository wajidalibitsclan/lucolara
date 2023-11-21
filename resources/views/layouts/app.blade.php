<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->
@section('htmlheader')
    @include('layouts.partials.htmlheader')
@show

<body>
@if (Auth::check())
<!-- if Logged In -->
<div id="user-toolbar">
    <div class="pull-left">
        <a href="{{route('adminHome')}}" class="btn btn-default">Vai al back-end</a>
        @yield('editContent')
    </div>
    <div class="pull-right">
        <span>Ciao </span><span>{{ Auth::user()->name }}</span>
        <a class="btn btn-default" href="{{ url('/logout') }}"
           onclick="event.preventDefault();
         document.getElementById('logout-form').submit();">
            Logout
        </a>
        <form id="logout-form" action="{{ url('/logout') }}" method="POST"  style="display: none;">
            {{ csrf_field() }}
        </form>
    </div>
</div>
<!-- endif Logged In -->
@endif
@include('layouts.partials.top')
@yield('styles')
@yield('content')
@include('layouts.partials.footer')
<script src="{{asset('assets/js/scripts.js')}}"></script>
{{-- <script>
    $(document).ready(function(){
    $('.dropdown').hover(
    function(){
        $(this).children('.dropdown-menu').slideDown('fast');
    },
    function () {
        $(this).children('.dropdown-menu').slideUp('fast');
    });
}); --}}
</script>
@yield('scripts')
<script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
<script type="text/javascript">
var iub = iub || [];
_iub.csConfiguration = {"invalidateConsentWithoutLog":true,"ccpaAcknowledgeOnDisplay":true,"whitelabel":false,"lang":"it","floatingPreferencesButtonDisplay":"bottom-right","siteId":2475222,"enableCcpa":true,"perPurposeConsent":true,"enableTcf":true,"googleAdditionalConsentMode":true,"ccpaApplies":true,"cookiePolicyId":80108198, "banner":{
 "closeButtonRejects":true,"acceptButtonDisplay":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"position":"float-top-center","acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","textColor":"black","backgroundColor":"white","rejectButtonDisplay":true }};
</script>
</body>
</html>