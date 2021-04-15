<footer class="container-fluid hidden-opacity visible animated fadeInDown full-visible">
    <div class="row">
        <div class="col-md-12 col-lg-12 footer-menu text-center">
            <ul class="bottom-menu">
                <li>
                    <a href="/">Главная</a>
                </li>
                <li>
                    <a href="{{ URL::route('comments') }}">Отзывы</a>
                </li>
                <li>
                    <a href="/#delivery">Доставка</a>
                </li>
                <li>
                    <a href="{{ URL::route('guarantee') }}">Гарантия и поддержка</a>
                </li>
                <li>
                    <a href="/#contacts">Контакты</a>
                </li>
            </ul>
        </div>
        <div class="popup container" id="buy-in-click-popup2">
            <div class="buy-in-click-popup-content">
                <div class="modal_top_wp clearfix">
                    <div class="mt_info">
                        <p class="mti_title">Оставьте свои данные и получите подарок!) <br> Ожидайте звоночка😉</p>
                        <div class="modal_forma">
                            <form id="contact-form" method="post">
                                <input name="name" placeholder="Имя" required="" type="text">
                                <input name="phone" placeholder="+38 (___) ___-__-__" required="" type="tel">
                                <button class="b_o_c modal_btn" type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
                <div class="col-md-6 package-phone"></div>
                <div class="col-md-3 adapter">
                    <figure>
                        <a href="#"><img alt="" src="{{ asset('client/themes/site/img/adapter.jpg') }}"></a>
                    </figure>
                    <a href="#">
                        <p>Адаптер питания USB<br>
                            мощностью 5 Вт</p>
                    </a>
                    <figure>
                        <a href="#"><img alt="" src="{{ asset('client/themes/site/img/lighting.jpg') }}"></a>
                    </figure>
                    <a href="#">
                        <p>Кабель Lightning/USB</p>
                    </a>
                </div>
            </div>
            <button onclick="$.fancybox.close()">Вернуться к выбору модели</button>
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
