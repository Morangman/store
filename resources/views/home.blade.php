@extends('layouts.app')

@section('content')
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
                    <div class="dl-menuwrapper visible-xs" id="dl-menu">
                        <button>Открыть меню</button>
                        <ul class="dl-menu">
                            <li>
                                <a href="#">Каталог</a>
                                <ul class="dl-submenu">
                                    <li class="dl-back">
                                        <a href="#">назад</a>
                                    </li>
                                    <li>
                                        <a href="#product-11promax">iPhone 11PRO Max</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#akcii">Подарки</a>
                            </li>
                            <li>
                                <a href="#warranty">Гарантия</a>
                            </li>
                            <li>
                                <a href="#delivery">Доставка и оплата</a>
                            </li>
                            <li>
                                <a href="otzyvy/index.html">Отзывы</a>
                            </li>
                            <li>
                                <a href="#contacts">Контакты</a>
                            </li>
                            <li>
                                <a href="tel:+7 (800) 707-3117">
                                    <span class="lptracker_phone">+7 (800) 707-3117</span>
                                </a>
                            </li>
                        </ul>
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
                                    <li>
                                        <a href="#product-11promax">iPhone 11PRO Max</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#akcii">Подарки</a>
                            </li>
                            <li>
                                <a href="#warranty">Гарантия</a>
                            </li>
                            <li>
                                <a href="#delivery">Доставка и оплата</a>
                            </li>
                            <li>
                                <a href="otzyvy/index.html">Отзывы</a>
                            </li>
                            </li>
                            <li>
                <span class="phone-header hidden-lg hidden-md">
                  <a href="tel:+7 (800) 707-3117">
                    <span class="lptracker_phone">+7 (800) 707-3117</span>
                  </a>
                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-2 col-xs-4 header-info">
          <span class="phone-header hidden-sm hidden-xs hidden-md">
            <a href="tel:+7 (800) 707-3117">
              <span class="lptracker_phone">+7 (800) 707-3117</span>
            </a>
          </span>
                    <button class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup2">Заказать звонок</button>
                </div>
            </div>
        </div>
    </header>
    <section class="header-baner">
        <div class="header-baner-title">
            <p class="header-baner-title-head hidden-opacity">Оригинальная техника Apple со скидкой до 32%</p>
            <p class="header-baner-title-desc hidden-opacity animate-infScale">Гарантия лучшей цены. Оплата после получения товара. Доставка в день заказа.&nbsp;</p>
            <button class="know-more hidden-opacity">Товары со скидкой</button>
        </div>
        <div class="carousel slide" data-ride="carousel" id="carousel-example-generic">usel-inner">
            <div class="item active">
                <img width="100%" src="{{ asset('client/fon.jpg') }}">
                <div class="carousel-caption">
                    <h3>
                        Оригинальная техника Apple со скидкой до 30%</h3>
                    <p>
                        <button class="know-more hidden-opacity">Купить</button>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="advantages container-fluid" id="press-about">
        <div class="container" id="advantages">
            <div class="row">
                <div class="col-xs-12">
                    <p class="press-about-title hidden-opacity">Преимущества</p>
                </div>
            </div>
            <div class="row advantages-row">
                <div class="col-md-4 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/advantages-1.png') }}">
                    <p>Только оригинальная продукция<br>
                        со скидкой до 30%</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/advantages-2.png') }}">
                    <p>Гарантия 1 год</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/advantages-3.png') }}">
                    <p>Тест-драйв 30 дней</p>
                </div>
            </div>
            <div class="row advantages-row">
                <div class="col-md-4  col-xs-12 hidden-opacity"><img src="{{ asset('client/themes/site/img/advantages-4.png') }}">
                    <p>Быстрая доставка</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/themes/site/img/5i.jpg') }}">
                    <p>5 лет успешной работы</p>
                </div>
                <div class="col-md-4 col-xs-12 hidden-opacity"><img width="100px" src="{{ asset('client/themes/site/img/pe.png') }}">
                    <p>6000 счастливых покупателей</p>
                </div>
            </div>
        </div>
    </section>
    <section class="catalogue container" id="catalogue"></section>
    <section class="phone-container container-fliud product-11promax" id="product-11promax">
        <!-- краткие характеристики каждого айфона - транслируется в форму -->
        <div class="mti_template">
            <p>Экран: 6.5" - 2688x1242 пикс.</p>
            <p>Фотокамера (Мп) : 12 + 12 + 12 (тройная)</p>
            <p>Процессор: Apple A13 Bionic</p>
        </div>
        <!-- краткие характеристики каждого айфона - транслируется в форму -->
        <div class="container">
            <div class="row">
                <div class="col-md-5 hidden-opacity"></div>
                <div class="col-md-7 hidden-opacity">
                    <div class="phone-container-title hidden-opacity" id="iPhone-11promax">
            <span>
              <a>iPhone 11ProMax
              </a>
            </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel slide" data-interval="false" data-ride="carousel" id="">
            <!-- Indicators -->
            <ol class="carousel-indicators color-slider">
                <li class="active" data-number="product-11promax-1" data-slide-to="0" data-target="#iPhone11promax"></li>
                <li data-number="product-11promax-2" data-slide-to="1" data-target="#iPhone11promax"></li>
                <li data-number="product-11promax-3" data-slide-to="2" data-target="#iPhone11promax"></li>
                <li data-number="product-11promax-4" data-slide-to="3" data-target="#iPhone11promax"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 phone-preview">
                                <img class="hidden-opacity" src="{{ asset('client/assets/iphone-11promax/1.jpg') }}">
                                <img class="hidden-opacity visible full-visible" src="{{ asset('client/assets/iphone-11promax/2.jpg') }}" style="display: none;">
                                <img class="hidden-opacity visible full-visible" src="{{ asset('client/assets/iphone-11promax/3.jpg') }}" style="display: none;">
                                <img class="hidden-opacity visible full-visible" src="{{ asset('client/assets/iphone-11promax/4.jpg') }}" style="display: none;">
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="preview-buttons">
                                    <button class="delivery-kit fancybox-2 link_modal" href="#package-popup">Комплект поставки</button>
                                    <span style="display: none">assets/iphone-11promax/3.jpg</span>
                                    <button class="characteristics fancybox-2 hidden-xs" href="#characteristics-popup">Характеристики</button>
                                    <div style="display: none">
                                        <ul class="characteristics-list">
                                            <li>
                                                <div>Связь</div>
                                                <p>
                                                    Стандарты сотовой связи 2G, 3G, 4G LTE, GSM <br>
                                                    Диапазоны GSM 1800, 1900, 850, 900 <br>
                                                    Диапазоны 3G (UMTS) 1900, 2100, 850, 900 <br>
                                                    Диапазоны LTE 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 66, 34, 38, 39, 40, 41 <br>
                                                    Интернет  4G LTE, DC-HSDPA, EDGE, HSPA+, UMTS <br>
                                                    Количество SIM-карт 1 <br>
                                                    Тип SIM-карты eSIM, nano
                                                </p>
                                            </li>
                                            <li>
                                                <div>Дисплей</div>
                                                <p>
                                                    Тип цветного экрана OLED <br>
                                                    Сенсорный экран Да <br>
                                                    Тип сенсорного экрана емкостный <br>
                                                    Мультитач да <br>
                                                    Диагональ экрана  6.5 " <br>
                                                    Разрешение экрана 2688 x 1242 <br>
                                                    Плотность точек 458 ppi <br>
                                                    Контрастность 2000000:1 <br>
                                                    Яркость 800 кд/м2

                                                </p>
                                            </li>
                                            <li>
                                                <div>Процессор</div>
                                                <p>Процессор  Apple A13 Bionic</p>
                                            </li>
                                            <li>
                                                <div>
                                                    Память
                                                </div>
                                                <p>
                                                    Поддержка карт памяти : нет</p>
                                                <div>Фотокамера</div>
                                                <p>
                                                    Камера  Да, тройная <br>
                                                    Разрешение основной камеры  12 Мп <br>
                                                    Разрешение второй основной камеры 12 Мп <br>
                                                    Разрешение третьей основной камеры  12 Мп <br>
                                                    Диафрагма основной камеры F/2.4 <br>
                                                    Диафрагма второй камеры F/1.8 <br>
                                                    Диафрагма третьей камеры  F/2.0 <br>
                                                    Фронтальная камера  Да <br>
                                                    Разрешение фронтальной камеры 12 Мп <br>
                                                    Диафрагма фронтальной камеры  F/2.2 <br>
                                                    Запись видеоклипов  Да <br>
                                                    Разрешение видеосъемки основной камеры (макс) 3840 x 2160 (UltraHD, 4K) <br>
                                                    Частота кадров при видеосъемке  4K - 24 кадров/с, 4K - 30 кадров/с, 4K - 60 кадров/с, FullHD - 120 кадров/с, FullHD - 240 кадров/с, FullHD - 30 кадров/с, FullHD - 60 кадров/с, HD - 30 <br>
                                                    Разрешение видеосъемки фронтальной камеры (макс)  3840 x 2160 (UltraHD, 4K) <br>
                                                    Цифровой Zoom при фотосъемке  10 <br>
                                                    Цифровой Zoom при видеосъемке 6 <br>
                                                    Оптический Zoom при фотосъемке  2 <br>
                                                    Оптический Zoom при видеосъемке 2 <br>
                                                    Встроенная вспышка  Да <br>
                                                    Тип вспышки Светодиодная <br>
                                                    Функции камеры  Focus Pixels, Geotagging (Геотегинг), Live Photos, Time lapse, Автоматическая стабилизация, Автофокусировка, Оптическая стабилизация, Панорамная съёмка, Следящая автофокусировка, Съемка HDR-видео, Съемка HDR-фото, Съемка в условиях недостаточной освещенности, Эффект боке <br>
                                                    Особенности камеры  Режим «Портрет» c функцией «Глубина»
                                                </p>
                                            </li>
                                            <li>
                                                <div>SIM-карта</div>
                                                <p>Тип SIM-карты : nano-SIM<br>
                                                    Кол-во SIM-карт : 1</p>
                                            </li>
                                            <li>
                                                <div>Питание</div>
                                                <p>
                                                    Аккумулятор Несъемный <br>
                                                    Тип аккумулятора  Li-Ion <br>
                                                    Время работы в режиме прослушивания музыки до:  80 ч <br>
                                                    Время работы в режиме просмотра видео до: 20 ч <br>
                                                    Функции зарядки и энергопотребления Беспроводная зарядка, Быстрая зарядка, Зарядка от устройства с разъемом USB
                                                </p>
                                            </li>
                                            <li>
                                                <div>Корпус</div>
                                                <p>
                                                    Материал  Алюминий, Стекло <br>
                                                    Высота  158 мм <br>
                                                    Ширина  77.8 мм <br>
                                                    Толщина 8.1 мм <br>
                                                    Вес 226 г <br>
                                                    Защита от пыли  Да <br>
                                                    Защита от влаги Да <br>
                                                    Стандарт защиты IP68
                                                </p>
                                                <div>Прочее</div>
                                                <p>
                                                    Датчики : датчик освещенности, датчик приближения, цифровой компас, G-сенсор (акселерометр), гироскоп, барометр, Face ID (распознавание лица с помощью камеры TrueDepth)</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <br> <a class="present fancybox-2" href="#present-popup">Подарки</a>
                                </div>
                            </div>
                            <div class="col-md-7 hidden-opacity">
                                <form class="variations_form cart" data-product_id="95" data-product_variations="" enctype="multipart/form-data" method="post">
                                    <div class="check-color">Выберите цвет:</div>
                                    <div class="row col colorflex">
                                        <div class="col-xs-2 col-md-2 col col-md-2 col-md-offset-0 col">
                                            <div class="color-div active " data-number="1" data-param-color="Space Gray" data-param="Space Gray" data-product="11promax" id="White">
                                                <div class="color-img color-img-white" style="background: #808080; "></div>
                                                <p>Space Gray</p>
                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-md-2 col">
                                            <div class="color-div " data-number="2" data-param-color="Gold" data-param="Gold" data-product="11promax" id="black">
                                                <div class="color-img " style="background: #e3d1b9; "></div>
                                                <p>Gold</p>
                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-md-2 col">
                                            <div class="color-div " data-number="3" data-param-color="Silver" data-param="Silver" data-product="11promax" id="black">
                                                <div class="color-img " style="background: #c0c0c0; "></div>
                                                <p>Silver</p>
                                            </div>
                                        </div>
                                        <div class="col-xs-2 col-md-2 col">
                                            <div class="color-div " data-number="4" data-param-color="Green" data-param="Green" data-product="11promax" id="black">
                                                <div class="color-img " style="background: #00331f; "></div>
                                                <p>Green</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="check-color" id="memory-25">Выберите объем памяти:</div>
                                    <div class="row">
                                        <div class="phone-model hidden">Iphone 11promax</div>
                                        <div class="col-xs-12 col-sm-4 col-md-3">
                                            <!-- цена память x -->
                                            <div class="memory-div active" data-id="" data-oldprice="109 990 р." data-price="94 990 р." data-size-id="3">
                                                64 ГБ
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-4 col-md-3">
                                            <div class="memory-div " data-id="" data-oldprice="117 990 р." data-price="107 990 р." data-size-id="6">
                                                256 ГБ
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-4 col-md-3">
                                            <div class="memory-div " data-id="" data-oldprice="89 990 р." data-price="117 990 р." data-size-id="6">
                                                512 ГБ
                                            </div>
                                        </div>
                                    </div>
                                    <table class="variations">
                                        <tbody>
                                        <tr style="display: none">
                                            <td class="label">
                                                <label for="pa_color">цвет</label>
                                            </td>
                                            <td class="value">
                                                <select class="" data-attribute_name="attribute_pa_color" id="pa_color" name="attribute_pa_color">
                                                    <option value="">Выбрать опцию</option>
                                                    <option selected="selected" value="black">black</option>
                                                    <option value="white">white</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr style="display: none">
                                            <td class="label">
                                                <label for="pa_memory">объем памяти</label>
                                            </td>
                                            <td class="value"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="row price price_30">
                                        <span>Стоимость со скидкой:</span>
                                        <span class="price-phone">
                      <div class="woocommerce-variation single_variation" style="">
                        <div class="woocommerce-variation-description"></div>
                        <div class="woocommerce-variation-price">
                          <span class="price">
                            <del>
                              <!-- цена x -->
                              <span class="amount main_p">
                                113 990 р.</span>
                            </del>
                            <ins>
                              <span class="amount sale_p">94 990 р.</span>
                            </ins>
                          </span>
                        </div>
                        <div class="woocommerce-variation-availability"></div>
                      </div>
                    </span>
                                    </div>
                                    <div class="row hr">
                                        <p><img class="hr" src="{{ asset('client/uploads/punkt.png') }}">Магазин</p>
                                        <p><img class="hr" src="{{ asset('client/uploads/dost.png') }}">Доставка за 2 часа</p>
                                        <p><img class="hr" src="{{ asset('client/uploads/orig.png') }}">Оригинальная техника</p>
                                        <p><img class="hr" src="{{ asset('client/uploads/gar.png') }}">Гарантия 1 год</p>
                                        <p><img class="hr" src="{{ asset('client/uploads/test.png') }}">Тест драйв 30 дней</p>
                                    </div>
                                    <div class="single_variation_wrap">
                                        <div class="woocommerce-variation-add-to-cart variations_button buy-buttons hidden-opacity">
                                            <span class="popup_model" style="display: none">iPhone X 32Gb jet black</span>
                                            <p class="prod_img_hidden" style="display: none">assets\iphone-11\3.jpg</p>
                                            <span style="display: none">iPhone 11promax</span>
                                            <input name="add-to-cart" type="hidden" value="30">
                                            <input name="product_id" type="hidden" value="30">
                                            <input class="variation_id" name="variation_id" type="hidden" value="1">
                                            <input name="category_id" type="hidden" value="30">
                                            <button class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup">Заказать сейчас</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid delivery" id="akcii">
        <div class="container">
            <div class="row">
                <div id="present" class="module test2 presents-box" style="margin-top:  20px; padding-bottom: 40px;">
                    <div class="container-12 relative">
                        <div id="header3" class="module-header">Защитное стекло и чехол от Apple в подарок!</div>
                        <div style=""></div>
                        <div style="float: left; width: 450px; font-size: 18px; font-weight: 400; padding-top: 40px; padding-left: 40px; visibility: visible; animation-duration: 1s; animation-name: slideInLeft;" class="wow slideInLeft moduleee" data-wow-duration="1s">
                            <div>
                                <div class="point1"></div> Отлично защищает от падений
                            </div>
                            <div style="margin-top: 20px;">
                                <div class="point1"></div> Разные цвета на выбор
                            </div>
                            <div style="margin-top: 20px;">
                                <div class="point1"></div> В наличии чехлы для всех моделей iPhone
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
            <div id="header3" class="module-header">Гарантия - 1 год</div>
            <div style="float: ;left;
width: 960px; padding-top: 40px;" class="newsec2">
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
                            <div> отремонтируют его бесплатно. Вы просто приезжаете</div> с телефоном и гарантийным талоном в сервисный центр.
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
                        <p>Доставка за 2 часа!*
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
                <div class="row delivery-desc hidden-opacity">*Доставка осуществляется нашими курьерами в течении 2-3х часов с момента оформления заказа.<br>
                    Стоимость доставки за пределы МКАД&nbsp; уточняйте у оператора. <br>
                    Доставка в другие регионы осуществлется только после 100% предоплаты за товар. <br>
                    **Предоставляется при покупке.</div>
            </div>
        </div>
    </section>
    <div class="text">
        <section class="container-fluid contacts" id="contacts">
            <address>
                <p class="press-about-title hidden-opacity">Контакты</p>
                <p class="press-about-text-2 hidden-opacity">г. Москва,&nbsp; ТЦ Охотный Ряд, Манежная площадь 1 стр. 2<br>
                    e-mail: apple-store.one@yandex.ru <br>
                    <a href="tel:+7 (800) 707-3117">
                        <span class="lptracker_phone">+7 (800) 707-3117</span>
                    </a>
                </p>
                <p class="press-about-text-2 pickup">Прием заказов: круглосуточно <br>
                    Режим работы магазина: с 9:00 - 21:00 <br>
                    Режим работы доставки: с 11:00 - 24:00 <br>
                </p>
            </address>
            <div class="hidden-opacity" id="map">
                <iframe style="width: 100%; height: 31.25rem;" class="contacts__map-iframe" height="370px" id="myIframe" allowfullscreen="" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.0476849782231!2d24.01453932670205!3d49.83396586074617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7bbe833ba5%3A0xcc24344da6e4e8ac!2z0YPQuy4g0JPQtdC90LXRgNCw0LvQsCDQp9GD0L_RgNGL0L3QutC4LCAxMCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1592824506649!5m2!1sru!2sua"></iframe>
            </div>
            <p style="text-align: center;"><br>Юридическая информация: ООО "ТИТАН", ОГРН: 1157746871160<br> ИНН/КПП: 7743309440/774301001<br>
                Адрес: 40782478, город Москва, ул. Клары Цеткин д.18 к. 8 пом/ком 20/54</p>
        </section>
        <footer class="container-fluid hidden-opacity visible animated fadeInDown full-visible">
            <div class="row">
                <div class="col-md-12 col-lg-12 footer-menu text-center">
                    <ul class="bottom-menu">
                        <li>
                            <a href="index.html">Главная</a>
                        </li>
                        <li>
                            <a href="otzyvy/index.html">Отзывы</a>
                        </li>
                        <li>
                            <a href="#delivery">Доставка</a>
                        </li>
                        <li>
                            <a href="#warranty">Гарантия и поддержка</a>
                        </li>
                        <li>
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div class="popup container" id="package-popup">
                    <div class="row characteristics-popup-title">Комплект поставки</div>
                    <div class="row package-container">
                        <div class="col-md-3 earpods">
                            <img alt="" src="{{ asset('client/themes/site/img/earpods.jpg') }}">
                            <p>
                                Наушники Apple EarPods с<br>
                                пультом управления и<br>
                                микрофоном
                            </p>
                        </div>
                        <div class="col-md-6 package-phone">
                            <figure>
                                <a href="index.html#"><img alt="" src="#"></a>
                            </figure>
                        </div>
                        <div class="col-md-3 adapter">
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/themes/site/img/adapter.jpg') }}"></a>
                            </figure>
                            <a href="index.html#">
                                <p>Адаптер питания USB<br>
                                    мощностью 5 Вт</p>
                            </a>
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/themes/site/img/lighting.jpg') }}"></a>
                            </figure>
                            <a href="index.html#">
                                <p>Кабель Lightning/USB</p>
                            </a>
                        </div>
                    </div>
                    <button onclick="$.fancybox.close()">Вернуться к выбору модели</button>
                </div>
                <div class="popup container" id="package-popup2">
                    <div class="row characteristics-popup-title">Комплект поставки</div>
                    <div class="row package-container">
                        <div class="col-md-3 earpods">
                            <figure><img alt="" style="max-width: 200px;" src="{{ asset('client/uploads/air/3m.jpg') }}"></figure>
                            <figure>
                                Наушники
                            </figure>
                        </div>
                        <div class="col-md-6 package-phone">
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/uploads/air/1m.jpg') }}"></a>
                            </figure>
                        </div>
                        <div class="col-md-3 adapter">
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/uploads/air/4m.jpg') }}"></a>
                            </figure>
                            <a href="index.html#">
                                <p>зарядный чехол</p>
                            </a>
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/themes/site/img/lighting.jpg') }}"></a>
                            </figure>
                            <a href="index.html#">
                                <p>Кабель Lightning/USB</p>
                            </a>
                        </div>
                    </div>
                    <button onclick="$.fancybox.close()">Вернуться к выбору модели</button>
                </div>
                <div class="popup container" id="package-popup3">
                    <div class="row characteristics-popup-title">Комплект поставки</div>
                    <div class="row package-container">
                        <div class="col-md-3 earpods">
                            <figure><img alt="" style="max-width: 200px;" src="{{ asset('client/assets/apro-1.jpg') }}"></figure>
                            <figure>
                                Наушники
                            </figure>
                        </div>
                        <div class="col-md-6 package-phone">
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/assets/apro.jpg') }}"></a>
                            </figure>
                        </div>
                        <div class="col-md-3 adapter">
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/assets/apro-2.jpg') }}"></a>
                            </figure>
                            <a href="#">
                                <p>зарядный чехол</p>
                            </a>
                            <figure>
                                <a href="index.html#"><img alt="" src="{{ asset('client/themes/site/img/lighting.jpg') }}"></a>
                            </figure>
                            <a href="index.html#">
                                <p>Кабель Lightning/USB</p>
                            </a>
                        </div>
                    </div>
                    <button onclick="$.fancybox.close()">Вернуться к выбору модели</button>
                </div>
                <div class="popup container" id="buy-in-click-popup">
                    <div class="buy-in-click-popup-content">
                        <div class="modal_top_wp clearfix">
                            <div class="mt_img">
                                <img alt="" id="ip_img" src="{{ asset('client/5s.png') }}">
                            </div>
                            <div class="mt_info">
                                <p class="mti_title">
                                    <span id="ip_model">iPhone SE</span>
                                    <span id="ip_color"></span>
                                    <span id="ip_memory">32Gb</span>
                                </p>
                                <p class="mti_price">
                                    <span id="ip_oldprice">17 000 р.</span>
                                    <span id="ip_newprice">13 990 р.</span>
                                </p>
                                <div class="modal_forma">
                                    <form id="form1">
                                        <input name="ip-model" type="hidden" value="">
                                        <input name="phone-price" style="display: none" type="hidden" value="">
                                        <input name="phone-old-price" value="" style="display: none;" type="hidden">
                                        <input name="phone-color" style="display: none" type="hidden" value="">
                                        <input name="phone-memory" style="display: none" type="hidden" value="">
                                        <input name="phone-diagonal" style="display: none" type="hidden" value="">
                                        <input name="z" style="display: none" type="hidden" value="1">
                                        <input name="name" placeholder="Имя" type="text">
                                        <input name="phone" placeholder="+7 (___) ___-__-__" type="tel" autocorrect="off" autocomplete="tel">
                                        <input type="text" name="address" placeholder="Адрес">
                                            <span style="font-size: 0.8em;" class="oft"><input class="oftt2" checked="" type="checkbox"> Я согласен с <a target="_blank" href="oft/index.html">публичной офертой</a></span>
                                        <button class="b_o_c modal_btn" type="submit">Купить</button>
                                        <input type="hidden" name="formData" value="Заказ с сайта apple-store.one">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal_bot_wp clearfix">
                            <p class="pr0"> Получите подарок при покупке техники Apple!</p>
                            <div class="row ">
                                <div class="col-xs-12 col-lg-6 pr">
                                    <div class="pri"><img src="{{ asset('client/present.png') }}"></div>
                                    <br>
                                    <p class="pr2"> <span>3000 руб.</span> 0 руб!</p>
                                    Apple Smart Case
                                </div>
                                <div class="col-xs-12 col-lg-6 pr">
                                    <div class=" pri"><img src="{{ asset('client/casesee.jpg') }}"></div>
                                    <br>
                                    <p class="pr2"> <span>1000 руб.</span> 0 руб!</p>
                                    Apple AirPods Case
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popup container" id="buy-in-click-popup2">
                    <div class="buy-in-click-popup-content">
                        <div class="modal_top_wp clearfix">
                            <div class="mt_info">
                                <p class="mti_title">Оставьте свои данные и наш менеджер свяжется с вами.</p>
                                <div class="modal_forma">
                                    <form id="form2" method="post">
                                        <input name="name" placeholder="Имя" required="" type="text">
                                        <input name="phone" placeholder="+7 (___) ___-__-__" required="" type="text">
                                        <button class="b_o_c modal_btn" type="submit">Отправить</button>
                                        <input type="hidden" name="formData" value="Заказ с сайта apple-store.one">
                                        <input name="ip_model" type="hidden" value="">
                                        <input name="phone-price" style="display: none" type="hidden" value="">
                                        <input name="phone-color" style="display: none" type="hidden" value="">
                                        <input name="phone-memory" style="display: none" type="hidden" value="">
                                        <input name="phone-diagonal" style="display: none" type="hidden" value="">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popup container" id="present-popup">
                    <div class="present-content">
                        <img src="{{ asset('client/uploads/prezent1.jpg') }}" style="width: 100%;">
                        <div class="row characteristics-button">
                            <button class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup2">Заказать сейчас</button>
                        </div>
                    </div>
                </div>
                <div class="popup container" id="present-popup2">
                    <div class="present-content">
                        <img src="{{ asset('client/uploads/airpodsban.jpg') }}" style="width: 100%;">
                        <div class="row characteristics-button">
                            <button class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup2">Заказать сейчас</button>
                        </div>
                    </div>
                </div>
                <div class="popup container" id="present-popup3">
                    <div class="present-content">
                        <img src="{{ asset('client/uploads/airpodsbanpro.jpg') }}" style="width: 100%;">
                        <div class="row characteristics-button">
                            <button class="buy-in-click buy-in-click_act fancybox" href="#buy-in-click-popup2">Заказать сейчас</button>
                        </div>
                    </div>
                </div>
                <div class="popup container" id="characteristics-popup">
                    <div class="row characteristics-popup-title">Характеристики</div>
                    <div class="row characteristics-content"></div>
                    <div class="row characteristics-button">
                        <button onclick="$.fancybox.close()">Вернуться к выбору модели</button>
                    </div>
                </div>
                <div class="popup container" id="add-popup">
                    <div class="add-popup-title">Товар добавлен в корзину</div>
                    <img alt="" class="buy-in-click-popup-img" src="{{ asset('client/themes/site/img/iPhone-6-logo.html') }}">
                    <p class="buy-in-click-popup-model">iPhone 6</p>
                    <p class="buy-in-click-popup-price">Итого: 38 000 р.</p>
                    <button class="buy-in-click" onclick="$.fancybox.close()">Продолжить покупки</button>
                    <button class="add-basket">Купить</button>
                </div>
            </div>
        </footer>
@endsection
