@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))

    <products
        :date="{{ json_encode($date) }}"
        :products="{{ json_encode($products) }}"
        :accessories=true
    ></products>

    <div id="warranty" class="module test2 warranty-box" style="margin-top:  20px; background-color: #fafafa; padding-bottom: 0px;">
        <div class="container-12 relative">
            <div id="header3" class="module-header">{!! $content['guarantee_1']['value'] !!}</div>
            <div style="float: left; width: 960px; padding-top: 40px;" class="newsec2">
                <div style="float: left; width: 480px; visibility: visible; animation-name: slideInLeft;" class="wow slideInLeft newsec2-1">
                    <div style="margin-top: 20px; margin-left: 10px; font-size: 23px;" id="test2-text2" class="test2-text2">{!! $content['guarantee_2']['value'] !!}</div>
                    <div id="test2-text4" class="test2-text4" contenteditable="false" style="line-height: 23px; font-size: 16px; margin-left: 10px;">
                        {!! $content['guarantee_3']['value'] !!}
                    </div>
                </div>
                <div style="float: left; width: 480px; visibility: visible; animation-name: slideInRight;" class="wow slideInRight newsec2-1">
                    <div id="test2-text3" style="margin-top: 20px; margin-left: 10px; font-size: 23px;" class="test2-text3">{!! $content['guarantee_4']['value'] !!}</div>
                    <div id="test2-text5" class="test2-text4" contenteditable="false" style="line-height: 23px; font-size: 16px; margin-left: 10px; padding-bottom: 40px">
                        <div>{!! $content['guarantee_5']['value'] !!}</div>
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
                    <p class="press-about-title hidden-opacity">{!! $content['delivery_1']['value'] !!}</p>
                </div>
                <div class="row delivery-icons advantages-row">
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/dost.png') }}">
                        <p>{!! $content['delivery_2']['value'] !!}
                        </p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/uah.png') }}">
                        <p>{!! $content['delivery_3']['value'] !!}</p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/kass.png') }}">
                        <p>{!! $content['delivery_4']['value'] !!}</p>
                    </div>
                    <div class="col-md-3 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/garant.png') }}">
                        <p>{!! $content['delivery_5']['value'] !!}</p>
                    </div>
                </div>
                <div class="row delivery-desc hidden-opacity">{!! $content['delivery_6']['value'] !!}<br>
                    {!! $content['delivery_7']['value'] !!}</div>
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
