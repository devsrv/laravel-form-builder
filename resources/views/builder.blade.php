@extends('layouts.main')

@push('styles')
    
@endpush

@section('content')
    <div class="section">
        {{-- react app root --}}
        <div class="row" id="builder-app"></div>
    </div>

    {{-- form element reference --}}
    <div class="section">
        <div class="row">
            <div class="col">
                <div class="card bg-light mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
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
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section mt-5" style="margin-bottom: 120px;">
        <div class="row">
            <div class="col-6 offset-3">
                <button type="button" class="btn btn-light btn-lg btn-block">Block level button</button>
            </div>
        </div>
    </div>
    
@endsection

@push('scripts')
    <script src="{{ asset('js/formbuilder/main.js') }}"></script>
@endpush