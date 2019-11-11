@extends('layouts.main')

@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
@endpush

@section('content')
    <div class="section mb-5">
        <div class="row">
            <div class="col-sm-12 col-md-8 offset-md-2">
                @if($errors->any())
                    <div class="alert alert-danger" role="alert">
                        <strong>Error!</strong> validation error occurred
                    </div>
                @endif

                @if(session('mail_sent') == 1)
                    <div class="alert alert-success" role="alert">
                        <strong>Success!</strong> form data sent via email
                    </div>
                @endif

                <div class="card bg-light mb-3">
                    <div class="card-body">
                        @if(count($fields) > 0)
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
                                                    <option value="">Choose...</option>
                                                    @foreach(explode(",", $options->values) as $value)
                                                    <option value="{{ trim($value) }}" {{ old($field_name) == trim($value)? "selected" : "" }}>{{ trim($value) }}</option>
                                                    @endforeach
                                                </select>
                                                @break

                                            @case("textarea")
                                                <textarea class="form-control @error($field_name) is-invalid @enderror" id="{{ $id_for }}" name={{ $field_name }} rows={{ $options->rows }}>{{ old($field_name) }}</textarea>
                                                @break

                                            @default
                                                <input type="{{ $options->type == "date" ? "text" : $options->type }}" class="form-control {{ $options->type == "date"? "datepicker" : "" }} @error($field_name) is-invalid @enderror" name={{ $field_name }} id="{{ $id_for }}" value="{{ old($field_name) }}" />
                                        @endswitch

                                        @error($field_name)
                                            <div class="invalid-feedback">
                                                {{ $errors->first($field_name) }}
                                            </div>
                                        @enderror
                                    </div>
                                @endforeach

                                <div class="form-group mt-4">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
                                    </button>
                                </div>
                            </form>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
    <script>
        (function(){
            $('.datepicker').datepicker({
                format: 'yyyy/mm/dd'
            });
        })()
    </script>
@endpush
