@extends('layouts.app')
@section('immagine_in_evidenza'){{asset('assets/img/foto_archivio/foto_biografia.jpg')}}@endsection
@section('title', $page->title )
@if(Auth::user())
@section('editContent')
    <a class="btn btn-default" href="{{route('modificaPagina', ['objectId' => $page->_id])}}">Modifica</a>
@endsection
@endif
@section('content')
    <div class="page-body biografia">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">
                    <h1>{{$page->title}}</h1>
                </div>
            </div>
        </div>
        @if(isset($page->body))
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    {!! $page->body !!}
                </div>
            </div>
        </div>
    </div>
    @endif
@endsection