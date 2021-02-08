@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <div class="page-padding">
        <div class="page-guarantee" id="page-guarantee" data-block-lang-key="page__guarantee">
            <div class="container">
                <h2 class="base-title text-left">Кредитование</h2>

                <div class="page-content">
                    <div class="article-text __fullWidth text">
                        <div class="owl-carousel owl-theme owl-loaded">
                            <div class="owl-stage-outer">
                                <div class="owl-stage">
                                    <div class="owl-item slider-item-1">
                                        <img alt="" height="527" src="{{ asset('client/uploads/glav-varianty-kredita-rassrichki-oplaty-chastiymy-2-black(3).jpg') }}" width="1522" />
                                    </div>
                                    <div class="owl-item slider-item-2">
                                        <img alt="" height="527" src="{{ asset('client/uploads/glav-varianty-kredita-rassrichki-oplaty-chastiymy-2-black(3).jpg') }}" width="1522" />
                                    </div>
                                    <div class="owl-item slider-item-3">
                                        <img alt="" height="527" src="{{ asset('client/uploads/glav-varianty-kredita-rassrichki-oplaty-chastiymy-2-black(3).jpg') }}" width="1522" />
                                    </div>
                                </div>
                            </div>
                            <div class="owl-controls">
                                <div class="owl-nav">
                                    <div class="owl-prev"></div>
                                    <div class="owl-next"></div>
                                </div>
                            </div>
                        </div>

                        <h1>Не сложилось с покупкой? Выбирай кредит от 0,01% до 25 платежей!</h1>

                        <h2><span style="font-size:20px;"><strong><span style="background-color:#f1c40f;">КАК БЫСТРО ОФОРМИТЬ ПОКУПКУ РАССРОЧКУ</span></strong></span></h2>

                        <ol>
                            <li>
                                <p><strong><span style="font-size:20px;">Выберите товар</span></strong></p>
                            </li>
                            <li>
                                <p><strong><span style="font-size:20px;">Оформите заявку, </span></strong><span style="font-size:20px;">нажав кнопку &quot;Купить в рассрочку&quot;</span></p>
                            </li>
                            <li><strong><span style="font-size:20px;">Ожидайте звонка нашего специалиста</span></strong></li>
                        </ol>

                        <p><span style="font-size:18px;"><span style="color:#2c3e50;">Наш&nbsp;експерт свяжеться с Вами&nbsp;в рабочее время в теченнии 25 минут.</span></span></p>

                        <p>&nbsp;</p>

                        <h2><span style="font-size:20px;"><strong>В результате разговора вы узнаете:</strong></span></h2>

                        <ul>
                            <li>
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Какой тариф будет самым выгодным для Вас</span></span></p>
                            </li>
                            <li>
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Как оформить рассрочку/оплату за 15 минут</span></span></p>
                            </li>
                            <li>
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Как правильно подписать договор</span></span></p>
                            </li>
                            <li>
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Как и когда можно забрать приобретенный Вами товар</span></span></p>
                            </li>
                            <li>
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Какие гарантии и документы вы получаете при покупке</span></span></p>
                            </li>
                        </ul>

                        <p><span style="color:#e74c3c;"><strong><span style="font-size:18px;">Оставляйте заявку и заберите вашу покупку уже сегодня!</span></strong></span></p>

                        <h3>&nbsp;</h3>

                        <h1 style="text-align: center;">Банки-партнеры компании Apple House</h1>

                        <p>&nbsp;</p>

                        <p><img alt="" style="width: 100%; height: auto" src="{{ asset('client/uploads/varianty_kredita_rassrichki_oplaty_chastiymy.jpg') }}" width="1440" /></p>

                        <p>&nbsp;</p>

                        <hr />
                        <p>&nbsp;</p>

                        <h1>Условия кредитования:</h1>

                        <p>Необходимые документы:</p>

                        <p>- Оригинал паспорта. Обязательно должны быть вклеены фотографии на 25 и 45 лет, если клиент достиг этого возраста.<br />
                            - Оригинал/копия идентификационного кода.<br />
                            - Пенсионное удостоверение для людей, основным источником доходов которых является пенсия.<br />
                            <br />
                            - Возраст клиента: от 21 до 69 лет.<br />
                            - Первоначальный взнос отсутствует.<br />
                            - Возможная сума кредита от 300 до 100 000 грн.<br />
                            - Срок кредитования - до 24 месяцев.<br />
                            - Погашение кредита - ежемесячно.<br />
                            - Возможно досрочное погашение без дополнительных комиссий;<br />
                            - Местная регистрация не обязательна.</p>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Акция &quot;Силиконовый чехол + защитное стекло в подарок&quot; не распространяется на товары, оформленные в рассрочку, кредит или оплату частями</div>

                        <p><br />
                            <strong>Наши консультанты помогут подобрать кредитное решение, которое будет для тебя наиболее удобным.</strong></p>

                        <hr />
                        <p><a id="privatbank" name="privatbank"></a></p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/5--privatbank(2).png') }}" width="120" /></h2>

                        <h2><strong>ПриватБанк </strong>(Оплата частями, рассрочка)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Что необходимо для получения рассрочки, оплаты частями в Приватбанке:</strong></h3>

                        <p>Иметь карту с Кредитным лимитом (оплата частями или рассрочка), на сумму приобретаемого клиентом товара. Недостающую разницу кредитного лимита можно компенсировать наличными.</p>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><strong>Например:</strong> клиент выбрал телефон за 15000 грн. Кредитный лимит на карте - 10000 грн. Клиент может оплатить 5000 грн. наличными, остальную сумму (10000 грн.) взять в рассрочку (оплату частями).</div>

                        <p>&nbsp;</p>

                        <p><span style="color:#c0392b;"><strong>*Товары который попадают под РАСПРОДАЖУ или со СКИДКОЙ:</strong></span></p>

                        <p>Оформления &ldquo;Оплату Частями&rdquo; - цена будет меняться за счет % банка.</p>

                        <p>&nbsp;</p>

                        <h2>Ваши опции:</h2>

                        <table cellpadding="0" cellspacing="10">
                            <tbody>
                            <tr>
                                <td valign="top">
                                    <h3>Оплата частями</h3>

                                    <ul>
                                        <li>От 2-24 мес.</li>
                                        <li>Ежемесячная комиссия 0.01%.</li>
                                        <li>Первоначальный взнос - от 5%.</li>
                                    </ul>

                                    <ul>
                                    </ul>
                                </td>
                                <td valign="top">
                                    <h3>Мгновенная рассрочка</h3>

                                    <ul>
                                        <li>От 2-24 мес.</li>
                                        <li>Ежемесячная комиссия 2.9%.</li>
                                        <li>Все оформления происходит в Онлайн Режиме</li>
                                    </ul>

                                    <ul>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <hr />
                        <p>&nbsp;</p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/8--alfa-bank.png') }}" width="120" /></h2>

                        <h2><strong>Альфа-Банк </strong>(&nbsp;Рассрочка до 10 месяцев)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Что необходимо для получения рассрочки в Альфа-Банке:</strong></h3>

                        <ul>
                            <li>
                                <p>Паспорт Украины</p>
                            </li>
                            <li>
                                <p>ИНН (Идентификационный номер)</p>
                            </li>
                            <li>
                                <p>Официальные и неофициальные доходы (без справок о доходах)</p>
                            </li>
                            <li>
                                <p>Чистая (хорошая) банковская история</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <h3><strong>Условия кредитования:</strong></h3>

                        <ul>
                            <li>
                                <p><strong>Рассрочка на 5 месяцев.</strong><br />
                                    Переплата за весь период (5 мес.) - 2.5 % от суммы.</p>
                            </li>
                            <li>
                                <p><strong>Рассрочка на 10 месяцев</strong><br />
                                    Переплата за весь период (10 мес.) - 5 % от суммы.</p>
                            </li>
                        </ul>

                        <p><span style="color:#c0392b;"><strong>*Первый взнос не требуется</strong></span></p>

                        <p>&nbsp;</p>

                        <h3>Как оформить рассрочку:</h3>

                        <ol>
                            <li>
                                <p><strong>Заявка</strong><br />
                                    Оставьте заявку на сайте, нажав кнопку &ldquo;Купить в рассрочку&rdquo; и заполните все поля в форме заявки.</p>
                            </li>
                            <li>
                                <p><strong>Согласование условий</strong><br />
                                    В течении 60 мин (в рабочее время) вами свяжется консультант Альфа-Банка, для уточнения всех деталей.</p>
                            </li>
                            <li>
                                <p><strong>Подписание договора</strong><br />
                                    В отделение или можете заказать курьера Банка и он приедет куда вам удобно. Вся Украина, кроме Луганска, Донецка и Крыма.</p>
                            </li>
                        </ol>

                        <hr />
                        <p>&nbsp;</p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/6--monobank.png') }}" width="120" /></h2>

                        <h2><strong>Monobank&nbsp;</strong>(&nbsp;Универсал Банк)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Что необходимо для получения кредита или рассрочки в Монобанк:</strong></h3>

                        <ul>
                            <li>
                                <p>Иметь карту с достаточным кредитным лимитом</p>
                            </li>
                            <li>
                                <p>Быть зарегистрированным(зарегистрированной) в приложении Монобанка (вся процедура оформления происходит через приложение)</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <h3><strong>Условия кредитования:</strong></h3>

                        <ul>
                            <li>
                                <p>Ежемесячная комиссия 0.01%</p>
                            </li>
                            <li>
                                <p>Первоначальный взнос от 5%</p>
                            </li>
                        </ul>

                        <h4><span style="color:#c0392b;">*Товары который попадают под РАСПРОДАЖУ или со СКИДКОЙ:</span></h4>

                        <ul>
                        </ul>

                        <p>Оформления &ldquo;Оплату Частями&rdquo; - цена будет меняться за счет % банка.</p>

                        <hr />
                        <p>&nbsp;</p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/7--ukrsibbank.png') }}" width="120" /></h2>

                        <h2><strong>УкрСибБанк&nbsp;</strong>(&nbsp;Кредит до 10 месяцев)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Для получения кредита клиенту необходимо:</strong></h3>

                        <ul>
                            <li>
                                <p>Быть в возрасте от 21 до 65 лет</p>
                            </li>
                            <li>
                                <p>Предоставить паспорт гражданина Украины и идентификационный код;</p>
                            </li>
                            <li>
                                <p>Быть официально/неофициально трудоустроенным (документальное подтверждение не требуется)</p>
                            </li>
                            <li>
                                <p>Предоставить рабочий номер телефона (желательно стационарный)</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <h3><strong>Тарифная сетка:</strong></h3>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 3 месяца - комиссия 3%</div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 6 месяцев - комиссия 6%</div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 9 месяцев - комиссия 9%</div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 12 месяцев - комиссия 12%</div>

                        <p>&nbsp;</p>

                        <h3>Процесс оформления:</h3>

                        <ol>
                            <li>
                                <p><strong>Заявка</strong><br />
                                    Оставьте заявку на сайте, нажав кнопку &ldquo;Купить в рассрочку&rdquo; и заполните все поля в форме заявки.</p>
                            </li>
                            <li>
                                <p><strong>Согласование условий</strong><br />
                                    В течении 60 мин (в рабочее время) вами свяжется консультант УкрсибБанка, для уточнения всех деталей.</p>
                            </li>
                            <li>
                                <p><strong>Подписание договора</strong><br />
                                    После получения положительного ответа по кредиту, клиент приходит в ближайшее отделение АО &laquo;УКРСИББАНК&rdquo; для подписание трехстороннего договора.</p>
                            </li>
                        </ol>

                        <p>&nbsp;</p>

                        <p>*В договоре с Банком будет обозначена стоимость товара, указанная на сайте магазина и кредитный процентный (комиссионный сбор) банка-кредитора.</p>

                        <h4><span style="color:#c0392b;">Больше сумма ежемесячного платежа не изменяется.</span></h4>

                        <hr />
                        <p>&nbsp;</p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/otp-bank.png') }}" width="120" /></h2>

                        <h2><strong>ОТП Банк&nbsp;</strong>(&nbsp;Онлайн рассрочка до 24 месяцев)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Условия кредитования Прозрачный от ОТП Банка:</strong></h3>

                        <ul>
                            <li>
                                <p>Первоначальный взнос: от 0% до 80% (по желанию);</p>
                            </li>
                            <li>
                                <p>Досрочное погашение без дополнительных комиссий;</p>
                            </li>
                            <li>
                                <p>Срок кредитования - от 3 до 24 месяцев</p>
                            </li>
                            <li>
                                <p>Разовая комиссия - 3%</p>
                            </li>
                            <li>
                                <p>Ежемесячная комиссия &ndash; отсутствует</p>
                            </li>
                            <li>
                                <p>Страхование &ndash; отсутствует</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <h3><strong>Требования:</strong></h3>

                        <ul>
                            <li>
                                <p>Паспорт, Идентификационный код, ID паспорт.</p>
                            </li>
                            <li>
                                <p>Возрастные ограничения: от 21 до 69 лет.</p>
                            </li>
                            <li>
                                <p>Трудоустройство &ndash; официальное, не официальное</p>
                            </li>
                            <li>
                                <p>Cумма кредитования &ndash; от 300 грн до 200000 грн.</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <h3>Условия Рассрочка 3 платежа* от ОТП Кредит</h3>

                        <p>- Ежемесячная комиссия - 0% на 3 мес., 3% с 4 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Срок кредитования &ndash; 24 месяца;<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Страхование &ndash; отсутствует<br />
                            - Услуга СМС + Справка во всех кредитах &ndash; 350 грн<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 5 платежа* от ОТП Кредит</h3>

                        <p>- Ежемесячная комиссия - 0% на 5 мес., 3% с 6 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Срок кредитования &ndash; 24 месяца;<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Страхование &ndash; отсутствует<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 0% на 10 мес. от ОТП Банка:</h3>

                        <p>- Ежемесячная комиссия &ndash; 0% на 9 мес., 3% с 10 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Разовая комиссия &ndash;5 %.<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Срок кредитования &ndash; 24 месяца;<br />
                            - Страхование &ndash; отсутствует<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 0% на 12 мес. от ОТП Банка:</h3>

                        <p>- Ежемесячная комиссия &ndash; 0% на 11 мес., 3% с 12 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Разовая комиссия &ndash;6 %.<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Срок кредитования &ndash; 24 месяца;<br />
                            - Страхование &ndash; отсутствует</p>

                        <h3>Условия Рассрочка 0% на 24 мес от ОТП Банка:</h3>

                        <p>- Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Досрочное погашение без дополнительных комиссий;<br />
                            - Срок кредитования - от 3 до 24 месяцев<br />
                            - Разовая комиссия - 15%<br />
                            - Ежемесячная комиссия &ndash; отсутствует<br />
                            - Страхование &ndash; отсутствует</p>

                        <p>&nbsp;</p>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">
                            <h3>Как оформить кредит через OТП Банк:</h3>

                            <ul>
                                <li>Оформить заказ удобным для Вас способом: через корзину сайта, либо по телефону.</li>
                                <li>Специалиста OTП Банка, свяжется с Вами для краткого собеседования</li>
                                <li>В течении 10 минут &ndash; получаете смс-сообщение с решением о выдаче кредита</li>
                                <li>После оформления кредита Вам остается получить товар удобным Вам способом.</li>
                            </ul>
                        </div>

                        <p>&nbsp;</p>

                        <p>.*В зависимости от рисковой политики банка, покупателю может быть предложена покупка страховки от несчастного случае (покупка не обязательна). Банк не кредитует в зоне АРК Крым</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    @yield('footer', View::make('footer'))
@endsection
