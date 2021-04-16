@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <section class="header-baner">
        <div class="header-baner-title">
            <p class="header-baner-title-head hidden-opacity"></p>
            <button class="know-more hidden-opacity">Товары со скидкой</button>
        </div>
        <div class="pc-carousel owl-carousel owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    @foreach($slimages as $key => $image)
                        <div class="owl-item slider-item-{{$key}}">
                            <a href="{{ isset($image['target_url']) ? $image['target_url'] : ''}}"><div class="item active">
                                <img width="100%" src="{{ $image['url'] }}">
                                <div class="carousel-caption">
                                    <p class="site-title">{{ isset($image['title']) ? $image['title'] : '' }}</p>
                                </div>
                            </div></a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    <div class="owl-carousel2 owl-theme" style="margin-top: 5px;">
        @foreach ($categories as $category)
        <div class="item">
        <a class="category_href" href="{{ URL::route('category', ['slug' => $category->getAttribute('slug')]) }}">
            <div class="category">
                <img src="{{ $category->getAttribute('image') }}">
                <p class="cat_name">{{ $category->getAttribute('name') }}</p>
            </div>
        </a>
        </div>
        @endforeach
    </div>
    <section class="advantages container-fluid" id="press-about">
        <div class="container" id="advantages">
            <div class="row">
                <div class="col-xs-12">
                    <p class="press-about-title hidden-opacity">{{ $content['benefits_1']['value'] }}</p>
                </div>
            </div>
            <div class="row advantages-row">
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/1.png') }}">
                    <p>{!! $content['benefits_2']['value'] !!}</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/2.png') }}">
                    <p>{!! $content['benefits_3']['value'] !!}</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/3.png') }}">
                    <p>{!! $content['benefits_4']['value'] !!}</p>
                </div>
            </div>
            <div class="row advantages-row">
                <div class="col-md-4  col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/4.png') }}">
                    <p>{!! $content['benefits_5']['value'] !!}</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/5.png') }}">
                    <p>{!! $content['benefits_6']['value'] !!}</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/uploads/6.png') }}">
                    <p>{!! $content['benefits_7']['value'] !!}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="catalogue container" id="catalogue"></section>


    <products
        :products="{{ json_encode($products) }}"
        :date="{{ json_encode($date) }}"
    ></products>


    <section class="container-fluid delivery" id="akcii">
        <div class="container">
            <div class="row">
                <div id="present" class="module test2 presents-box" style="margin-top:  20px; padding-bottom: 40px;">
                    <div class="container-12 relative">
                        <div id="header3" class="module-header">{!! $content['present_1']['value'] !!}</div>
                        <div style=""></div>
                        <div style="float: left; width: 450px; font-size: 18px; font-weight: 400; padding-top: 40px; padding-left: 40px; visibility: visible; animation-duration: 1s; animation-name: slideInLeft;" class="wow slideInLeft moduleee" data-wow-duration="1s">
                            <div>
                                <div class="point1"></div> {!! $content['present_2']['value'] !!}
                            </div>
                            <div style="margin-top: 20px;">
                                <div class="point1"></div> {!! $content['present_3']['value'] !!}
                            </div>
                            <div style="margin-top: 20px;">
                                <div class="point1"></div> {!! $content['present_4']['value'] !!}
                            </div>
                        </div>
                        <div style="float: left; text-align: center; width: 450px; margin-top: 0px; margin-bottom: 0px; visibility: visible; animation-duration: 1s; animation-name: slideInRight;" class="wow slideInRight moduleeeim" data-wow-duration="1s">
                            <img class="primggg" src="{{ asset('client/present.jpg') }}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
