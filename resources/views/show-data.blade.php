@extends('layouts.main')

@push('styles')
    
@endpush

@section('content')
    <div class="section mb-5">
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card bg-light mb-3">
                    <div class="card-body">
                        @foreach($form_data as $field => $data)
                            <p>{{ $data[0] }} -> {{ $data[1] }}</p>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    
@endsection

@push('scripts')
@endpush