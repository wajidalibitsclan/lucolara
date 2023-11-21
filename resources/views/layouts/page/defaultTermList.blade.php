@extends('layouts.app')
@section('immagine_in_evidenza'){{asset('assets/img/foto_archivio/foto_ricerca.jpg')}}@endsection
@section('title', 'Tutti i risultati con' . $results->term->termine . ' - Luca Ronconi' )
@section('content')
<div class="page-body archive">

	<div class="container breadcrumb">
		<div class="row">
			<div class="col-sm-12 hidden-xs">
				<a href="{{route('home')}}" title="">Home</a>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h2>Tutti i risultati con {{$results->term->termine}}</h2>
			</div>
		</div>
		@if(isset($results->term->body))
		<div class="row">
			<div class="col-xs-12 figura">
				{!! $results->term->body !!}
			</div>
		</div>
		@endif
		<div class="row">

			<div id="content">

				<div class="grid-size"></div><!-- DO NOT REMOVE -->
				@foreach($results as $article)
					@include('layouts.partials.list.default', $article)
				@endforeach
			</div>
		</div>
	</div>



</div>
@endsection