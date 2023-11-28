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
                                    <th class="uk-width-1-10">#</th>
                                    <th class="uk-width-4-10">Order</th>
                                    <th class="uk-width-2-10">Category Name</th>
                                    <th class="uk-width-1-10 uk-text-center">Modifica</th>
                                    <th class="uk-width-1-10 uk-text-center">Elimina</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($categories) > 0)
                                    @foreach ($categories as $count => $category)
                                        <tr>
                                            <td>{{ $count + 1 }}</td>
                                            <td>{{ $category->order }}</td>
                                            <td>{{ $category->name }}</td>
                                            <td class="uk-text-center">
                                                <a
                                                    href="{{ route('admin.video_categories.edit', ['video_category' => $category->id]) }}"><i
                                                        class="md-icon material-icons"></i></a>
                                            </td>
                                            <td class="uk-text-center">
                                                <a href="{{ route('admin.video_categories.destroy', $category->id) }}"
                                                    class="delete_category" data-id="{{ $category->id }}"><i
                                                        class="md-icon material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="4">No records exists</td>
                                    </tr>
                                @endif
                            </tbody>
                        </table>
                    </div>
                    {{ $categories->links('admin.pagination.default') }}
                </div>
            </div>
        </div>
    </div>
@endsection
@push('specific_scripts')
    <script>
        $('.delete_category').on('click', function(event) {
            event.preventDefault();
            var articolo_da_elimnare = $(this);
            UIkit.modal.confirm("Sei sicuro di voler eliminare questa categoria?", function() {
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
