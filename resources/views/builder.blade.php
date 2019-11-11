@extends('layouts.main')

@push('styles')

@endpush

@section('content')
    <div class="section mb-5">
        <div class="jumbotron pb-3 pt-4">
            <h1 class="">Form Builder</h1>
            <p class="lead">Drag and drop elements from the pallet to the builder board.</p>
            <hr class="my-3">
            <p>create dynamic form by drag drop fields, sort field order, configure form fields, set validation rules.</p>
        </div>
    </div>

    <div class="section">
        {{-- react app root --}}
        <div class="row" id="builder-app"></div>

        <div id="modal-root"></div>
    </div>

@endsection

@push('scripts')
    <script>
        window._rav = window._rav || {};
        _rav.save_route = "{{ route('save.form') }}";
        _rav.boardData = @json($builder_data);
    </script>

    <script src="{{ asset('js/formbuilder/main.js') }}"></script>
@endpush
