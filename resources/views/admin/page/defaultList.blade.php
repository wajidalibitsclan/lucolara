@extends('admin.app')

@section('htmlheader_title')
    Lista utenti
@endsection


@section('main-content')
    <div id="page_content">
        <div id="page_content_inner">

            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-overflow-container">
                        <table class="uk-table uk-table-nowrap table_check">
                            <thead>
                            <tr>
                                <th class="uk-width-1-10 uk-text-center">Immagine In evidenza</th>
                                <th class="uk-width-4-10">Titolo</th>
                                <th class="uk-width-2-10 uk-text-center">Status</th>
                                <th class="uk-width-1-10 uk-text-center">Modifica</th>
                                <th class="uk-width-1-10 uk-text-center">Elimina</th>
                                <th class="uk-width-1-10 uk-text-center">Anteprima</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($results as $article)
                                <tr id="{{$article->_id}}">
                                    <td class="uk-text-center">
                                        @if($article->hasImmagineInEvidenza())
                                            <img class="md-user-image" src="{{$article->getImmagineInEvidenza('34x34')}}" alt="">
                                        @endif
                                    </td>
                                    <td>{{$article->title}}</td>
                                    <td class="uk-text-center">
                                        @if($article->status == 1)
                                            <span class="uk-badge uk-badge-success">Pubblicato</span>
                                        @else
                                            <span class="uk-badge uk-badge-warning">Bozza</span>
                                        @endif
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="{{route('adminEdit', ['object' => $article->type, 'id' => $article->_id])}}"><i class="md-icon material-icons"></i></a>
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="#" class="delete_article" data-id="{{$article->_id}}"><i class="md-icon material-icons">&#xE872;</i></a>
                                    </td>
                                    <td class="uk-text-center">
                                        <a href="{{$article->getPermalink()}}"><i class="md-icon material-icons">&#xE417;</i></a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    {{ $results->links('admin.pagination.default') }}
                </div>
            </div>
        </div>
    </div>

@endsection

@push('specific_scripts')

<script>
    $(function() {
        if(isHighDensity) {
            // enable hires images
            altair_helpers.retina_images();
        }
        if(Modernizr.touch) {
            // fastClick (touch devices)
            FastClick.attach(document.body);
        }
    });
    $window.load(function() {
        // ie fixes
        altair_helpers.ie_fix();
    });

    $('.delete_article').on('click', function(event){
        event.preventDefault();
        var articolo_da_elimnare = $(this);

        UIkit.modal.confirm("Sei sicuro di voler eliminare questo articolo?", function(){
            event.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': '{!! csrf_token() !!}'
                }

            })
            var formData = {
                id_del : $(articolo_da_elimnare).attr('data-id')
            }

            $.ajax({

                type: 'POST',
                url: '{!! route('adminDel') !!}',
                data: formData,
                dataType: 'json',
                success: function (data) {
                    $('#' + data).animate({
                        opacity: '0',
                        }, 1000, function() {
                            $(this).remove();
                });
                }, error: function (data) {
                    console.log('Error:', data.responseText);
                }
            });




        });
    });





</script>
@endpush

