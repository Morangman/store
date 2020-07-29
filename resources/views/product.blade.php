@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <single-product
        :product="{{ $product }}"
        :recommended="{{ json_encode($recommended) }}"
    ></single-product>
    @yield('footer', View::make('footer'))
@endsection
