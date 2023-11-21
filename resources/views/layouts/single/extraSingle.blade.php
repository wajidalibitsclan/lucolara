@extends('layouts.app')

@section('title', $post->title . ' - Luca Ronconi' )
@if(Auth::user())
@section('editContent')
    <a class="btn btn-default" href="{{route('adminEdit', ['object' => $post->type, 'id' => $post->id])}}">Modifica</a>
@endsection
@endif
@if($post->hasImmagineInevidenza())
    @section('immagine_in_evidenza', $post->getImmagineInEvidenza('locandina'))
@else
    @section('immagine_in_evidenza', asset('assets/img/luca_indice.jpg'))
@endif
@include('layouts.single.partial.meta', $post)
@section('content')
    <div class="page-body single {{$post->color}}">

        <div class="container breadcrumb">
            <div class="row">
                <div class="col-sm-12 hidden-xs">
                    <a href="{{route('home')}}" title="">Home</a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i><!-- SEPARATOR -->
                    <a href="{{route('listaArticoli', ['object' => $post->type])}}" title="">{{ucfirst($post->type)}}</a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i><!-- SEPARATOR -->
                    <a href="javascript:void(0)" title="">{{ucfirst($post->title)}}</a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2>{{$post->title}}</h2>
                </div>
            </div>
        </div>

        @if($post->body)
            @include('layouts.single.partial.body', $post)
        @endif
        @if(isset($post->locandina) && !empty($post->locandina))
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="well locandina">
                        @include('layouts.single.partial.locandina', $post)
                    </div>
                </div>
            </div>
        </div>
        @endif
        @if(isset($post->gallery) && !isEmptyValue($post->gallery))

           {{-- @dd("media") --}}
            @include('layouts.single.partial.mainGallery', $post)
        @endif
        @if(isset($post->interviste_e_dichiarazioni) && !empty($post->interviste_e_dichiarazioni))
        {{-- @dd("intervist") --}}
            @include('layouts.single.partial.interviste_e_dichiarazioni', $post)
        @endif
        @if(isset($post->rassegna_stampa) && !empty($post->rassegna_stampa))
            {{-- @dd($post) --}}
            @include('layouts.single.partial.rassegna_stampa', $post)
        @endif
        @if(isset($post->altri_file) && !empty($post->altri_file))
        {{-- @dd('altri') --}}
            @include('layouts.single.partial.altri_file', $post)
        @endif
    </div>
@endsection
