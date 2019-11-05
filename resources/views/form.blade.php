@extends('layouts.main')

@push('styles')
    
@endpush

@section('content')
    <div class="section mb-5">
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <form>
                            @foreach($fields as $field)
                                @php
                                    $options = $field->pivot->options? json_decode($field->pivot->options) : null;
                                @endphp

                                <div class="form-group">
                                    @if($options)
                                        <label for="input-fld-{{ $loop->iteration }}">{{ $options->label }}</label>
                                    @endif

                                    @switch($field->field_type)
                                        @case("select")
                                            <select id="input-fld-{{ $loop->iteration }}" class="custom-select">
                                                <option selected>Choose...</option>
                                                @foreach(explode(",", $options->values) as $value)
                                                <option value="{{ $value }}">{{ $value }}</option>
                                                @endforeach
                                            </select>
                                            @break

                                        @case("textarea")
                                            <textarea class="form-control" id="input-fld-{{ $loop->iteration }}" rows={{ $options->rows }}></textarea>
                                            @break

                                        @default
                                            <input type="{{ $options->type }}" class="form-control" id="input-fld-{{ $loop->iteration }}" />
                                            
                                    @endswitch
                                </div>
                            @endforeach

                        {{--
                            <div class="form-group">
                                <label for="exampleInputEmail2">Email address</label>
                                <input type="email" class="form-control is-valid" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail3">Email address</label>
                                <input type="email" class="form-control is-invalid" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputState">State</label>
                                <select id="inputState" class="custom-select is-invalid">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">Example invalid custom select feedback</div>
                            </div>
                            <div class="form-group">
                                <label for="validationTextarea">Textarea</label>
                                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div> --}}

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