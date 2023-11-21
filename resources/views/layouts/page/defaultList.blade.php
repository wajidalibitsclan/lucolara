@extends('layouts.app')
@section('immagine_in_evidenza',  asset('assets/img/foto_archivio/foto_' . $results->object  . '.jpg'))
@section('title','Archivio ' . $results->object )
@section('content')
<div class="page-body archive {{$results->color}}">

	<div class="container breadcrumb">
		<div class="row">
			<div class="col-sm-12 hidden-xs">
				<a href="{{route('home')}}" title="">Home
					@if(isset($results->termine)) > {{ucfirst($results->termine)}} 
					@elseif(isset($results->object)) > {{ucfirst($results->object)}} 
					@endif
				</a>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h2>La modestia</h2>
			</div>
			<div id="content">

				<div class="grid-size"></div><!-- DO NOT REMOVE -->
				@foreach($results as $article)
					@include('layouts.partials.list.default', $article)
				@endforeach
			</div>
		</div>
	</div>
	@if($results->links())
		<!-- INFINITE SCROLLING -->
		@php
			$route = isset($results->is_dopo) ? 'listaArticoliDopo' : 'listaArticoli';
		@endphp
		<nav id="load-next-page">
			@if(isset($results->taxonomy) && isset($results->termine))
				<a href="{{route($route, ['object' => $results->object, 'taxonomy' => $results->taxonomy, 'termine' => $results->termine])}}?page=2"></a>
			@else
				<a href="{{route($route, ['object' => $results->object])}}?page=2"></a>
			@endif
		</nav>
	@endif
</div>
@endsection