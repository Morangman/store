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
            <div class="row">
                <div class="col-md-6">
                    <div class="comment-block">
                    @foreach($comments as $comment)
                        <div class="reviews__item">
                            <p class="reviews__item-header">
                                <span class="reviews__item-name">{{ $comment->getAttribute('name') }}</span>
                                <span class="reviews__item-date"><time>{{ \Carbon\Carbon::parse($comment->getAttribute('created_at'))->format('d.m.Y') }}</time></span>
                                <span style="color: gold; float: right;">
                                    @foreach(range(1,5) as $i)
                                        @if($i <= $comment->getAttribute('value'))
                                            <i class="icon-star-full2"></i>
                                        @else
                                            <i class="icon-star-empty3"></i>
                                        @endif
                                    @endforeach
                                </span>
                            </p>
                            <p class="reviews__item-text">
                                {{ $comment->getAttribute('text') }}
                            </p>
                        </div>
                    @endforeach
                    <div class="text-center">{{ $comments }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container" id="review">
                        <div class="buy-in-click-popup-content">
                            <p class="buy-in-click-popup-title">Оставить отзыв</p>
                            <form>
                                <p>Оценка</p>
                                <div class="rating" data-rate-value=5 style="font-size: 25px; color: gold;"></div>
                                <p>Ваше имя</p>
                                <input name="name" placeholder="Имя" type="text">
                                <p>Ваш отзыв</p>
                                <textarea cols="30" id="" name="text" name="text" placeholder="Сообщение" rows="10"></textarea>
                                <button class="b_o_c" type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @yield('footer', View::make('footer'))
@endsection
