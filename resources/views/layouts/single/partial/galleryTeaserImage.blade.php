<div class="bozzetto carousel-item">
    <a href="{{ $media_gallery_object->getPhotoUrl('1200x9999') }}" title="" rel="bozzetto" class="js-bozzetto-image">
        <div class="{{ isset($media_gallery_object->bozzetto) && $media_gallery_object->bozzetto == 1 ? 'bozzetto-drawing' : 'bozzetto-image' }}"
            style="background-image:url('{{ $media_gallery_object->getPhotoUrl('353x260') }}')"></div>
    </a>
    <div class="caption">
        {{ $media_gallery_object->title }}
    </div>
</div>
