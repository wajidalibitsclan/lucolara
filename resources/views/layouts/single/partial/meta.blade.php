@section('meta')
    @if(isset($post->riassunto))
    <meta name="Description" content="{!! nl2br(htmlspecialchars($post->riassunto))  !!}">
    @endif
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="{{$post->getPermalink()}}">
    <meta property="og:title" content="{{$post->title}}" />
    <meta property="og:type" content="website" />

    <meta property="og:url" content="{{$post->getPermalink()}}" />
    @if($post->hasImmagineInevidenza())
        <meta property="og:image" content="{{$post->getImmagineInEvidenza('1200x630')}}" />
    @endif
@endsection
