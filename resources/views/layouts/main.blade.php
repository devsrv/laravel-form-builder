<!DOCTYPE html>
<html lang="en">
	<head>
		<title>{{ config('app.name') }} | {{ $title }}</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		@stack('styles')
	</head>
	<body>

		<div class="jumbotron text-center" style="margin-bottom:0">
			<h1>My First Bootstrap 4 Page</h1>
			<p>Resize this responsive page to see the effect!</p> 
		</div>

		@include('layouts.nav')

		<div class="container" style="margin-top:30px">
			<div class="row">
				@yield('content')
			</div>
		</div>

		<div class="jumbotron text-center" style="margin-bottom:0">
			<p>Footer</p>
		</div>

		@stack('scripts')

	</body>
</html>
