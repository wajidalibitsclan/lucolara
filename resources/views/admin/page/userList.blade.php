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
                                    <th class="uk-width-1-10 uk-text-center small_col">
                                        <div class="icheckbox_md"><input type="checkbox" data-md-icheck="" class="check_all"
                                                style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"><ins
                                                class="iCheck-helper"
                                                style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"></ins>
                                        </div>
                                    </th>
                                    <th class="uk-width-1-10 uk-text-center">User Image</th>
                                    <th class="uk-width-2-10">User Name</th>
                                    <th class="uk-width-2-10 uk-text-center">Email</th>
                                    <th class="uk-width-1-10 uk-text-center">Data Registrazione</th>
                                    <th class="uk-width-1-10 uk-text-center">Stato</th>
                                    <th class="uk-width-2-10 uk-text-center">Modifica</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($results as $user)
                                    <tr>
                                        <td class="uk-text-center uk-table-middle small_col">
                                            <div class="icheckbox_md"><input type="checkbox" data-md-icheck=""
                                                    class="check_row"
                                                    style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"><ins
                                                    class="iCheck-helper"
                                                    style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); border: 0px; opacity: 0; background-position: initial initial; background-repeat: initial initial;"></ins>
                                            </div>
                                        </td>
                                        <td class="uk-text-center"><img class="md-user-image"
                                                src="{{ asset('adminassets/assets/img/avatars/avatar_01_tn.png') }}"
                                                alt=""></td>
                                        <td>{{ $user->name }}</td>
                                        <td class="uk-text-center">{{ $user->email }}</td>
                                        <td class="uk-text-center">{{ date('d M, Y', strtotime($user->created_at)) }}</td>
                                        <td class="uk-text-center">
                                            @if (isset($user->active) && $user->active == 1)
                                                <span class="uk-badge">Utente abilitato</span>
                                            @else
                                                <span class="uk-badge  uk-badge-danger">Utente non abilitato</span>
                                            @endif
                                        </td>
                                        <td class="uk-text-center">
                                            <a href="{{ route('adminEdit', ['object' => 'user', 'id' => $user->id]) }}"><i
                                                    class="md-icon material-icons"></i></a>
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
            if (isHighDensity) {
                // enable hires images
                altair_helpers.retina_images();
            }
            if (Modernizr.touch) {
                // fastClick (touch devices)
                FastClick.attach(document.body);
            }
        });
        $window.load(function() {
            // ie fixes
            altair_helpers.ie_fix();
        });
    </script>
@endpush
