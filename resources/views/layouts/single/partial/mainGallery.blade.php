<div class="jumbotron bozzetti text-center">
    <div class="container">
        <div class="row">
            <h3>Foto / Bozzetti / Video</h3>
        </div>
    </div>

    <div class="bozzetti-wrapper">

        <div class="owl-carousel carousel-bozzetti">
            @foreach($post->gallery as $media_gallery_object)
                @if($media_gallery_object->classSlug == 'photo')
                    @include('layouts.single.partial.galleryTeaserImage', $media_gallery_object)
                @elseif($media_gallery_object->classSlug == 'link')
                    @include('layouts.single.partial.galleryTeaserVideo', $media_gallery_object)
                @endif
            @endforeach
        </div>

        <div class="carousel-nav">
            <div id="prev_2"></div>
            <div id="next_2"></div>
        </div>

    </div>
</div>
