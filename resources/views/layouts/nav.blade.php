<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="{{ route('app.home') }}">APP HOME</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item {{ request()->route()->named('app.home')? 'active': '' }}">
				<a class="nav-link {{ request()->route()->named('app.home')? 'text-primary' : '' }}" href="{{ route('app.home') }}">Builder</a>
			</li>
			<li class="nav-item {{ request()->route()->named('show.form')? 'active' : '' }}">
				<a class="nav-link {{ request()->route()->named('show.form')? 'text-primary' : '' }}" href="{{ route('show.form') }}">Form</a>
			</li>
		</ul>
	</div>
</nav>