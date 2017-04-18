<!doctype html>

<html lang="{{ config('app.locale') }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{ mix('/css/admin.css') }}" rel="stylesheet">

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <script src="{{ mix('/js/admin.js') }}"></script>

    @yield('meta')
  </head>

  <body>
    <header>
      <div class="container-fluid">
        <ul class="menu">
          <li><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
          <li><a href="{{ route('admin.animes.index') }}">Animes</a></li>
          <li><a href="#">Genres</a></li>
          <li><a href="#">Users</a></li>
          <li>
            <a href="{{ route('admin.logout') }}">Logout</a>
            <form action="{{ route('admin.logout') }}" method="post" style="display: none;">{{ csrf_field() }}</form>
          </li>
        </ul>
      </div>
    </header>

    <div class="container-fluid">@yield('content')</div>
  </body>
</html>
