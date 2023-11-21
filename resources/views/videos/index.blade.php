@extends('layouts.app')
@section('title', 'Luca Ronconi | Videos' )
@section('immagine_in_evidenza', asset('assets/img/luca_video.jpg'))
@section('meta')
    <meta name="robots" content="index,follow">
    <meta property="og:title" content="Luca Ronconi Video" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://lucaronconi.it/videos" />
    <meta property="og:image" content="{{asset('assets/img/luca_video.jpg')}}" />
@endsection
@section('styles')
    <link rel="stylesheet" href="{{asset('assets/plugins/owlcarousel/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/owlcarousel/owl.theme.default.css')}}">
    <link rel="stylesheet" href="{{asset('vendor/llyv/llyv.min.css')}}">
@endsection
@section('content')
    <div class="page-body biografia">
        <div class="container-fluid">
            <div class="container main-content">
{{--                <div class="text-center">--}}
{{--                    <h1>Work In Progress </h1>--}}
{{--                    <img src="{{asset('assets/img/workinprogress.png')}}" alt="workinprogress.png" width="150px"/>--}}
{{--                </div>--}}
                @if(count($categories) > 0)
                @foreach($categories as $category)
                    @if(count($category->videos) > 0)
                    <h3 class="video_cat_title">{{$category->name}}</h3>
                        <div class="owl-carousel owl-theme videoCarousel">
                            @foreach($category->videos->sortBy('order') as $video)
                                <div class="item">
                                    <div class="card">
                                        <div class="card-img-top card-img-top-250">
                                            <div class="llyv" data-id="{{get_youtube_video_ID($video->link)}}"></div>
{{--                                            <div class="llyv" data-id="SoymL3XAHWk"></div>--}}
{{--                                            <iframe class="lazy" data-src="{{generateVideoEmbedUrl($video->link)}}" width="100%" height="230" frameborder="0" allowfullscreen></iframe>--}}
                                        </div>
                                        <div class="card-block pt-2">
                                            <label class="video_title">{{$video->title}}</label>
                                            <div class="short_description">{!! html_truncate(120,$video->description) !!}</div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif
                 @endforeach
                @else
                    <h2 style="text-align: center">No videos added</h2>
                @endif
            </div>
        </div>
    </div>
    <div id="descriptionModal" class="modal">
        <div class="modal-content">
            <span id="modalCloser">&times;</span>
            <p id="modalFullTitle"></p>
            <p id="modalFullDescription"></p>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{asset('assets/plugins/owlcarousel/owl.carousel.min.js')}}"></script>
    <script src="{{asset('vendor/llyv/llyv.min.js')}}"></script>
    <script>
        $(document).ready(function(){
            $(".videoCarousel").each(function() {
                $(".videoCarousel").owlCarousel({
                    loop: false,
                    margin: 10,
                    nav: true,
                    dots: true,
                    navText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>']
                });
            });
            $('.owl-dots').prepend('PAG');
        });
        var modal = $("#descriptionModal");
        $(document).on('click','.read_more_link',function (e) {
            e.preventDefault();
            var title = $(this).parents('.card-block').find('.video_title').text();
            var description = $(this).parents('.card-block').find('.full_description').html();
            modal.find("#modalFullTitle").html(title);
            modal.find("#modalFullDescription").html(description);
            modal.show();
        });
        $(document).on('click','#modalCloser',function () {
            modal.hide();
        });
    </script>
@endsection