@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <div class="page-padding">
        <div class="page-guarantee" id="page-guarantee" data-block-lang-key="page__guarantee">
            <div class="container">
                <h2 class="base-title text-left order-title">Ваш заказ принят</h2>
                <div class="order-box">
                    <h4>Заказ № {{ $order->getKey() }}</h4>
                    <div class="order-info">
                        <div class="order-info_row">
                            <p class="o-inf">Имя</p>
                            <p>{{ $order->getAttribute('name') }}</p>
                        </div>
                        <div class="order-info_row">
                            <p class="o-inf">Телефон</p>
                            <p>{{ $order->getAttribute('phone') }}</p>
                        </div>
                        <div class="order-info_row">
                            <p class="o-inf">Почта</p>
                            <p>{{ $order->getAttribute('email') }}</p>
                        </div>
                    </div>
                    <div class="ordered-products-info">
                        <h4>Ваш заказ</h4>
                        <div class="order-products">
                            @foreach($order->getAttribute('ordered_product') as $product)
                                <div class="o_product">
                                    <div class="p-info">
                                        <img class="p-image" src="{{ $product['product']['image'] }}">
                                        <div class="p-info-right">
                                            <a href="{{ URL::route('product', ['product' => $product['product']['id']]) }}" class="p-title">{{ $product['product']['title'] }}</a>
                                            <div class="order-i-cost">{{ $product['price'] }} грн</div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div> <!-- .container -->
        </div> <!-- . -->
    </div>
    @yield('footer', View::make('footer'))
@endsection
