@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <category-products
        :products="{{ json_encode($products) }}"
    ></category-products>
    @yield('footer', View::make('footer'))
@endsection
