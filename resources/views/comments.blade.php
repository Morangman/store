@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <section class="catalogue container block_3 list ct">
        <div class="row">
            <h1>Отзывы покупателей Apple iPhone</h1>
        </div>
        <div class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a href="/" itemprop="item">
                        <span itemprop="name">Главная</span>
                        <meta content="1" itemprop="position">
                    </a>
                    <span class="sep">/</span>
                </span>
            Отзывы покупателей Apple iPhone
        </div>
        <div class="list_content reviews">
            <div class="add_review">
                <a class="fancybox back-to-main send_review" href="#review">Добавить отзыв</a>
            </div>
            @foreach($comments as $comment)
            <div class="item_content">
                <div class="item_content_left">
                    <p class="date">{{ \Carbon\Carbon::parse($comment->getAttribute('created_at'))->format('d.m.Y') }} / {{ $comment->getAttribute('name') }}</p>
                    <div class="text">
                        <p>{{ $comment->getAttribute('text') }}
                        </p>
                    </div>
                </div>
                <div class="item_content_right">
                </div>
            </div>
            @endforeach
        </div>
    </section>
    <div class="popup container" id="review">
        <div class="buy-in-click-popup-content">
            <p class="buy-in-click-popup-title">Оставить отзыв</p>
            <form>
                <p>Ваше имя</p>
                <input name="name" placeholder="Имя" type="text">
                <p>Ваш отзыв</p>
                <textarea cols="30" id="" name="text" name="text" placeholder="Сообщение" rows="10"></textarea>
                <button class="b_o_c" type="submit">Отправить</button>
            </form>
            <!--        <div class="some-info">*Мы не передаем персональную информацию третьим лицам</div>-->
        </div>
    </div>
    @yield('footer', View::make('footer'))
@endsection
