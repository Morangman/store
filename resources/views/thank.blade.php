@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <div class="page-padding">
        <div class="page-guarantee" id="page-guarantee" data-block-lang-key="page__guarantee">
            <div class="container">
                <div class="thank-text">
                    <h2 class="base-title order-title">Спасибо за заказ!</h2>
                    <h4 class="base-title order-title">Наш менеджер свяжеться с вами в кратчайшие сроки.</h4>
                    <a href="{{ URL::route('home') }}" class="thank-main">На главную</a>
                </div>
            </div> <!-- .container -->
        </div> <!-- . -->
    </div>
    @yield('footer', View::make('footer'))
@endsection
