<div class="inner_b_p">
    <div id="basket-popup">
        <div class="product-counter">Корзина пуста</div>
    </div>
</div>
<header class="container-fliud">
    <div class="container">
        <div class="row">
            <div class="col-lg-1 col-md-2 col-xs-3 logo-header">
                <a alt="Apple Store – интернет магазин Apple" class="logo-link" data-ajax="false" href="/" title="Apple Store – интернет магазин Apple"><img alt="Apple Store – интернет магазин Apple" src="{{ asset('client/themes/site/img/apple-logo.png') }}" title="Apple Store – интернет магазин Apple"></a>
            </div>
            <div class="col-lg-8 col-md-8 col-xs-5 header-nav">
                <div class="topnav">
                    <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
                    <a href="javascript:void(0);" class="icon" id="mobile-menu">
                        <i class="icon-menu3"></i>
                    </a>
                    <div id="myLinks">
                        <ul style="margin-left: 0px;">
                            <li>
                                <a href="/">Главная</a>
                            </li>
                            @foreach($categories as $category)
                                <li>
                                    <a href="{{ URL::route('category', ['slug' => $category->getAttribute('slug')]) }}">{{ $category->getAttribute('name') }}</a>
                                </li>
                            @endforeach
                            <li>
                                <a href="{{ URL::route('accessories') }}">Аксессуары</a>
                            </li>
                            <li>
                                <a href="{{ URL::route('guarantee') }}">Гарантия</a>
                            </li>
                           <li>
                                <a href="{{ URL::route('credit') }}">Кредитование</a>
                            </li>
                            <li>
                                <a href="/#delivery">Доставка и оплата</a>
                            </li>
                            <li>
                                <a href="{{ URL::route('comments') }}">Отзывы</a>
                            </li>
                            <li>
                              <a href="tel:{{ $settings->getAttribute('general_settings')['phone'] }}">
                                <span class="lptracker_phone">{{ $settings->getAttribute('general_settings')['phone'] }}</span>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toggle-menu hidden-lg hidden-md hidden-sm hidden-xs">
                    <div class="sandwich">
                        <div class="sw-topper"></div>
                        <div class="sw-bottom"></div>
                        <div class="sw-footer"></div>
                    </div>
                    <p>меню</p>
                </div>
                <nav class="three">
                    <ul class="top-menu topmenu" style="margin-left: 0px;">
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="#">Каталог</a>
                            <ul class="submenu">
                                @foreach($categories as $category)
                                    <li>
                                        <a href="{{ URL::route('category', ['slug' => $category->getAttribute('slug')]) }}">{{ $category->getAttribute('name') }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </li>
                        <li>
                            <a href="{{ URL::route('accessories') }}">Аксессуары</a>
                        </li>
                        <li>
                            <a href="{{ URL::route('guarantee') }}">Гарантия</a>
                        </li>
                       <li>
                            <a href="{{ URL::route('credit') }}">Кредитование</a>
                        </li>
                        <li>
                            <a href="/#delivery">Доставка и оплата</a>
                        </li>
                        <li>
                            <a href="{{ URL::route('comments') }}">Отзывы</a>
                        </li>
                        <li>
                <span class="phone-header hidden-lg hidden-md">
                  <a href="tel:{{ $settings->getAttribute('general_settings')['phone'] }}" onclick="gtag('event', 'Click', {'event_category': 'Call'});" replaced="by Phonet" ct-phonet="true">
                    <span class="ph-phone-a lptracker_phone">{{ $settings->getAttribute('general_settings')['phone'] }}</span>
                  </a>
                </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-lg-3 col-md-2 col-xs-4 header-info">
          <span class="phone-header hidden-sm hidden-xs hidden-md">
            <a href="tel:{{ $settings->getAttribute('general_settings')['phone'] }}">
              <span class="ph-phone-a lptracker_phone">{{ $settings->getAttribute('general_settings')['phone'] }}</span>
            </a>
          </span>
                <button id="callback-button" class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup2">Заказать звонок</button>
            </div>
        </div>
    </div>
</header>
