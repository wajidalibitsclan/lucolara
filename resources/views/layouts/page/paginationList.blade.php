@foreach($results as $article)
    @include('layouts.partials.list.default', $article)
@endforeach