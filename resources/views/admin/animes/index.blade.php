
@extends('layouts.admin')

@section('meta')
<title>Animes</title>
@endsection

@section('content')
  <ul>
    @foreach ($animes as $anime)
      <li>{{ $anime->title }}</li>
    @endforeach
  </ul>
@endsection
