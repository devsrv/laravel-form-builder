@extends('layouts.main')

@push('styles')
    
@endpush

@section('content')
    <div class="section mb-5">
        <div class="row">
            <div class="col-8 offset-2">
                @if($errors->any())
                    <div class="alert alert-danger" role="alert">
                        <strong>Error!</strong> validation error occurred
                    </div>
                @endif

                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <form action="{{ route('submit.form') }}" method="post">
                            @csrf
                            <input type="hidden" name="form_id" value="{{ $form_id }}" />
                            <input type="hidden" name="field_ids" value="{{ $field_ids }}" />

                            @foreach($fields as $field)
                                @php
                                    $options = $field->pivot->options? json_decode($field->pivot->options) : null;
                                    $field_name = 'field_' . $field->pivot->id;
                                    $id_for = 'input-fld-'. $loop->iteration;
                                @endphp

                                <div class="form-group">
                                    @if($options->label)
                                        <label for="{{ $id_for }}">{{ $options->label }}</label>
                                    @endif

                                    @switch($field->field_type)
                                        @case("select")
                                            <select id="{{ $id_for }}" name={{ $field_name }} class="custom-select @error($field_name) is-invalid @enderror">
                                                <option value="0">Choose...</option>
                                                @foreach(explode(",", $options->values) as $value)
                                                <option value="{{ trim($value) }}" {{ old($field_name) == trim($value)? "selected" : "" }}>{{ trim($value) }}</option>
                                                @endforeach
                                            </select>
                                            @break

                                        @case("textarea")
                                            <textarea class="form-control @error($field_name) is-invalid @enderror" id="{{ $id_for }}" name={{ $field_name }} rows={{ $options->rows }}>{{ old($field_name) }}</textarea>
                                            @break

                                        @default
                                            <input type="{{ $options->type }}" class="form-control @error($field_name) is-invalid @enderror" name={{ $field_name }} id="{{ $id_for }}" value="{{ old($field_name) }}" />
                                    @endswitch
                                
                                    @error($field_name)
                                        <div class="invalid-feedback">
                                            {{ $errors->first($field_name) }}
                                        </div>
                                    @enderror
                                </div>
                            @endforeach

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
@endsection

@push('scripts')
@endpush