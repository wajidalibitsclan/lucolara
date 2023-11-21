<div class="container">
    <div class="row">
        <div class="col-xs-12 {{$post->type == 'scuola' ? 'figura' : ''}}">
            {!! $post->body !!}
        </div>
    </div>
</div>