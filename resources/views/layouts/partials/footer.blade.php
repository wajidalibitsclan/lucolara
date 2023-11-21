<footer>
    <div class="container">

        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div class="sponsor text-center">
                    <a href="http://www.ctsantacristina.it/" title="CENTRO TEATRALE SANTACRISTINA" target="_blank">
                        <img src="{{asset('assets/img/logo-santacristina.png')}}" alt="CENTRO TEATRALE SANTACRISTINA<" width="83" height="83">
                    </a>
                    <a href="http://www.ateatro.it/webzine/" title="ateatro.it - webzine di cultura teatrale" target="_blank">
                        <img src="{{asset('assets/img/logo-ateatro.png')}}" alt="ateatro.it - webzine di cultura teatrale" width="156" height="93">
                    </a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12">
                <div class="copyright text-center">
                    &copy; {{date('Y')}} Centro Teatrale Santa Cristina. Tutti i diritti riservati.
                    <a href="{{pageUrl('crediti')}}" title="">Crediti</a>
                    <span> | </span>
                    <a href="{{pageUrl('guida')}}">Guida</a>
                </div>
            </div>
        </div>

    </div>
</footer>