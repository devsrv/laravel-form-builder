@component('mail::message')
# Form submitted email notification

below is the entire form data.

@component('mail::table')
| Field       | Data         |
| ------------- |:-------------:|
@foreach($formData as $field)
| {{ $field[0] }}     | {{ $field[1] }}     |
@endforeach

@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
