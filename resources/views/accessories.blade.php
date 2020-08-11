@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))

    <products
        :products="{{ json_encode($products) }}"
        :accessories=true
    ></products>

    <div id="warranty" class="module test2 warranty-box" style="margin-top:  20px; background-color: #fafafa; padding-bottom: 0px;">
        <div class="container-12 relative">
            <div id="header3" class="module-header">Гарантия - 1 год</div>
            <div style="float: left; width: 960px; padding-top: 40px;" class="newsec2">
                <div style="float: left; width: 480px; visibility: visible; animation-name: slideInLeft;" class="wow slideInLeft newsec2-1">
                    <div style="margin-top: 20px; margin-left: 10px; font-size: 23px;" id="test2-text2" class="test2-text2">Закон о защите прав потребителей</div>
                    <div id="test2-text4" class="test2-text4" contenteditable="false" style="line-height: 23px; font-size: 16px; margin-left: 10px;">
                        Если за 14 дней Вы обнаружите какую-либо неисправность, мы любезно вернем Вам деньги без скандалов и головной боли. Единственное требование - сохранение товарного вида.
                    </div>
                </div>
                <div style="float: left; width: 480px; visibility: visible; animation-name: slideInRight;" class="wow slideInRight newsec2-1">
                    <div id="test2-text3" style="margin-top: 20px; margin-left: 10px; font-size: 23px;" class="test2-text3">Расширенная гарантия – 1 год</div>
                    <div id="test2-text5" class="test2-text4" contenteditable="false" style="line-height: 23px; font-size: 16px; margin-left: 10px; padding-bottom: 40px">
                        <div>Если в течение 1 года смартфон сломается - специалисты
                            <div> отремонтируют его бесплатно. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <section class="container-fluid delivery" id="delivery">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 col-xs-12">
                    <p class="press-about-title hidden-opacity">Доставка и оплата</p>
                </div>
                <div class="row delivery-icons advantages-row">
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/dost.png') }}">
                        <p>Отправка в день заказа!*
                        </p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/rub.png') }}">
                        <p>Оплата при получении товара</p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/kass.png') }}">
                        <p>Кассовый чек**</p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/garant.png') }}">
                        <p>Гарантийный талон**</p>
                    </div>
                </div>
                <div class="row delivery-desc hidden-opacity">*Доставка осуществляется в день оформления заказа.<br>
                    **Предоставляется при покупке.</div>
            </div>
        </div>
    </section>
    <div class="text">
        <section class="container-fluid contacts" id="contacts">
            <address>
                <p class="press-about-title hidden-opacity">Контакты</p>
                <p class="press-about-text-2 hidden-opacity">г. Львов, ул. Генерала Чупринки 10.<br>
                    e-mail: {{ $settings->getAttribute('general_settings')['contact_email'] }} <br>
                    <a href="tel:{{ $settings->getAttribute('general_settings')['phone'] }}">
                        <span class="lptracker_phone">{{ $settings->getAttribute('general_settings')['phone'] }}</span>
                    </a>
                </p>
                <p class="press-about-text-2 pickup">Прием заказов: круглосуточно <br>
                    пн-пт, 10:00 - 20:00 <br>
                    сб-вскр 10:00-18:00 <br>
                </p>
            </address>
            <div class="hidden-opacity" id="map">
                <iframe style="width: 100%; height: 31.25rem;" class="contacts__map-iframe" height="370px" id="myIframe" allowfullscreen="" frameborder="0" src="{{ $settings->getAttribute('general_settings')['iframe_map'] }}"></iframe>
            </div>
            <p style="text-align: center;"><br>© 2012-2020. Все права защищены.</p>
        </section>
    @yield('footer', View::make('footer'))
@endsection
