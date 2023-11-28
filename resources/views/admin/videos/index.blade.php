@extends('admin.app')
@section('main-content')
    <div id="page_content">
        <div id="page_content_inner">
            @if (Session::has('success'))
                <div class="uk-alert uk-alert-success" data-uk-alert="">
                    <a href="#" class="uk-alert-close uk-close"></a>
                    {{ Session::get('success') }}
                </div>
            @endif
            <div class="md-card uk-margin-medium-bottom">
                <div class="md-card-content">
                    <div class="uk-overflow-container">
                        <table class="uk-table uk-table-nowrap table_check">
                            <thead>
                                <tr>
                                    <th class="uk-width-4-10">Order</th>
                                    <th class="uk-width-4-10">Titolo</th>
                                    <th class="uk-width-2-10">Category</th>
                                    <th class="uk-width-2-10">Link</th>
                                    <th class="uk-width-1-10 uk-text-center">Modifica</th>
                                    <th class="uk-width-1-10 uk-text-center">Elimina</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($videos) > 0)
                                    @foreach ($videos as $video)
                                        <tr>
                                            <td>{{ $video->order }}</td>
                                            <td>{{ $video->title }}</td>
                                            <td>
                                                @if (isset($video->category) && $video->category != null)
                                                    {{ $video->category->name }}
                                                @else
                                                @endif
                                            </td>
                                            <td>{{ $video->link }}</td>
                                            <td class="uk-text-center">
                                                {{-- <a href="{{route('admin.videos.edit', ['id' => $video->id])}}"><i class="md-icon material-icons"></i></a> --}}
                                            </td>
                                            <td class="uk-text-center">
                                                <a href="{{ route('admin.videos.destroy', $video->id) }}"
                                                    class="delete_video" data-id="{{ $video->id }}"><i
                                                        class="md-icon material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="5">No records exists</td>
                                    </tr>
                                @endif
                            </tbody>
                        </table>
                    </div>
                    {{ $videos->links('admin.pagination.default') }}
                </div>
            </div>
        </div>
    </div>
@endsection
@push('specific_scripts')
    <script>
        $('.delete_video').on('click', function(event) {
            event.preventDefault();
            var articolo_da_elimnare = $(this);
            UIkit.modal.confirm("Sei sicuro di voler eliminare questo video?", function() {
                event.preventDefault();
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': '{!! csrf_token() !!}'
                    }
                });
                $.ajax({
                    type: 'POST',
                    url: articolo_da_elimnare.attr('href'),
                    data: {
                        '_method': 'DELETE'
                    },
                    dataType: 'json',
                    success: function(data) {
                        window.location.reload(true);
                    },
                    error: function(data) {
                        console.log('Error:', data.responseText);
                    }
                });
            });
        });
    </script>
@endpush
