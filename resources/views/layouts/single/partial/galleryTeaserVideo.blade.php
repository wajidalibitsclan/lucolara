<div class="bozzetto carousel-item">
    <a href="https://www.youtube.com/embed/{{ $media_gallery_object->youtubeCode }}?autoplay=1&showinfo=0" title=""
        rel="bozzetto" class="js-bozzetto-video">
        <div class="bozzetto-video" style="background-image:url('{{ $media_gallery_object->getPreviewMedia() }}')"></div>
    </a>
    <div class="caption">
        {{ $media_gallery_object->title }}
    </div>
</div>
