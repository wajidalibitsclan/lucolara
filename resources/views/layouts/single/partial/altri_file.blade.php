<div class="container">
    <div class="row">
        <hr>
        <div class="col-sm-12">
            <h3>Altri materiali</h3>
            <div class="dichiarazioni">

                {{-- @dd($post->altri_file) --}}
                @if(isset($post->altri_file))
                    <div class="interview">
                        <div class="row">
                            @foreach(json_decode($post->altri_file) as $file)

                                {{-- @dd($file) --}}
                                @if($file && isset($file->id))
                                    <div class="pdf-link">
                                        <a href="{{getFileUrlFromId($file->id)}}" title="" target="_blank">
                                            <i class="fa fa-file-pdf-o"></i> {{$file->etichetta_documento or getFileTitleFromId($file->id)}}
                                        </a>
                                    </div>
                                    @if(isset($file->descrizione_documento) && !empty($file->descrizione_documento))
                                        <div class="col-sm-12 testo">
                                            <h4>
                                                {!! $file->descrizione_documento !!}
                                            </h4>
                                            <br>
                                        </div>
                                    @endif
                                @endif
                            @endforeach
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
