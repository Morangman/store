@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <category-products
        :products="{{ json_encode($products) }}"
        :date="{{ json_encode($date) }}"
    ></category-products>
    @yield('footer', View::make('footer'))
@endsection
