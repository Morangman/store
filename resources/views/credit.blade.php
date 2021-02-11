@extends('layouts.app')

@section('content')
    @yield('header', View::make('header', ['categories' => $categories, 'settings' => $settings]))
    <div class="page-padding">
        <div class="page-guarantee" id="page-guarantee" data-block-lang-key="page__guarantee">
            <div class="container">
                <h2 class="base-title text-left">Кредитование</h2>

                <div class="page-content">
                    <br class="article-text __fullWidth text">
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

                        <h1>Не сложилось с покупкой? Выбирай кредит от 0,01% до 24-36 платежей!</h1>

                        <h2><span style="font-size:20px;"><strong><span style="background-color:#f1c40f;">КАК БЫСТРО ОФОРМИТЬ ПОКУПКУ В РАССРОЧКУ</span></strong></span></h2>

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
                                <p><span style="font-size:18px;"><span style="background-color:#ecf0f1;">Как оформить рассрочку/оплату за 10 минут</span></span></p>
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

                        <h1 style="text-align: center;">Банки-партнеры компании</h1>

                        <p>&nbsp;</p>

                        <p><img alt="" style="width: 100%; height: auto" src="{{ asset('client/uploads/varianty_kredita_rassrichki_oplaty_chastiymy.png') }}" width="1440" /></p>

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

                        <p><br />
                            <strong>Наши консультанты помогут подобрать кредитное решение, которое будет для тебя наиболее удобным.</strong></p>

                        <hr />
                        <p><a id="privatbank" name="privatbank"></a></p>

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/privatbank-kreditovaniye-apple-house(1).png') }}" width="120" /></h2>

                        <h2><strong>ПриватБанк </strong>(Оплата частями, рассрочка)</h2>

                        <p>&nbsp;</p>

                        <h3><strong>Что необходимо для получения рассрочки, оплаты частями в Приватбанке:</strong></h3>

                        <p>Иметь карту с Кредитным лимитом (оплата частями или рассрочка), на сумму приобретаемого клиентом товара. Недостающую разницу кредитного лимита можно компенсировать наличными.</p>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><strong>Например:</strong> клиент выбрал телефон за 25000 грн. Кредитный лимит на карте - 10000 грн. Клиент может оплатить 15000 грн. наличными, остальную сумму (10000 грн.) взять в рассрочку (оплату частями).</div>

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
                                        <li>От 2-24-36 мес.</li>
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

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/alfabank-kreditovaniye-apple-house(1).png') }}" width="120" /></h2>

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
                                <br />
                                <p>Переплата за весь период (24 мес.)-15% от суммы.</p>

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
                                    В отделение или можете заказать курьера Банка и он приедет куда вам удобно. Вся Украина, кроме Луганска, Донецка и АРК Крым.</p>
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

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/ukrsibbank-kreditovaniye-apple-house(1).png') }}" width="120" /></h2>

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

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 4 месяца - комиссия 0% сумма делится на 4 части </div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 6 месяцев - комиссия 2.8% за весь период </div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование на 10 месяцев - комиссия 4.8% за весь период </div>

                        <div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Кредитование в Пятницу –Субботу-Воскресение! действует акция на % (10мес-3.8%-2%)</div>

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

                        <h2><img alt="" height="120" src="{{ asset('client/uploads/otpbank-kreditovaniye-apple-house(1).png') }}" width="120" /></h2>

                        <h2><strong>ОТП Банк&nbsp;</strong>(&nbsp;Онлайн рассрочка до 24 месяцев)</h2>

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
                            - Разовая комиссия –1 %<br />
                            - Срок кредитования – 7 месяцев;<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Страхование – отсутствует<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 5 платежа* от ОТП Кредит</h3>

                        <p>- Ежемесячная комиссия - 0% на 5 мес., 3% с 6 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Срок кредитования &ndash; 9 месяцев;<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Страхование – 0.7% мес.<br />
                            &nbsp;</p>


                        <h3>Условия Рассрочка 6 платежа* от ОТП Кредит</h3>

                        <p>- Ежемесячная комиссия - 0% на 6 мес., 3% с 7 мес.;<br />
                            - Годовая ставка - 0.01%<br />
                            - Разовая комиссия –4 %<br />
                            - Срок кредитования – 10 месяцев;<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Страхование – отсутствует<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 0% на 10 мес. от ОТП Банка:</h3>

                        <p>- Ежемесячная комиссия &ndash; 0% на 10 мес., 3% с 10 мес.;<br />
                            - Ежемесячная комиссия – 0% на 10 мес.<br />
                            - Годовая ставка - 0.01%<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Срок кредитования – 10 месяцев;<br />
                            - Страхование – 0.7 % в мес.<br />
                            &nbsp;</p>

                        <h3>Условия Рассрочка 0% на 24 мес от ОТП Банка:</h3>

                        <p>- Ежемесячная комиссия – 0%;<br />
                            - Годовая ставка - 0.01%<br />
                            - Разовая комиссия – 15%<br />
                            - Первоначальный взнос: от 0% до 80% (по желанию);<br />
                            - Срок кредитования –  24 месяца;<br />
                            - Страхование – отсутствует</p>

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



                        <p>&nbsp;</p>

                        <div class="forward-table">
                        <center style="color: rgb(0, 0, 0); font-size: medium;"><table width="832" cellpadding="7" cellspacing="0"><colgroup><col width="78"><col width="52"><col width="78"><col width="51"><col width="32"><col width="35"><col width="39"><col width="35"><col width="40"><col width="65"><col width="171"></colgroup><tbody><tr><td width="78" height="126" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>Продукт</b></font></font></font></p></td><td width="52" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>льготный период</b></font></font></font></p></td><td width="78" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>комиссия после льготного периода (ежемесячная)</b></font></font></font></p></td><td width="51" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>разовая комиссия</b></font></font></font></p></td><td width="32" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>Дисконт партнера</b></font></font></font></p></td><td width="35" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>страховка</b></font></font></font></p></td><td width="39" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>смс</b></font></font></font></p></td><td width="35" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>минимальный срок</b></font></font></font></p></td><td width="40" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>максимальный срок</b></font></font></font></p></td><td width="65" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>первоначальный взнос</b></font></font></font></p></td><td width="171" bgcolor="#da9694" style="background: rgb(218, 150, 148);"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>сумма кредита</b></font></font></font></p></td></tr><tr valign="bottom"><td width="78" height="6" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">Grace 4-24 льготный период</font></font></font></p></td><td width="52" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>4</b></font></font></font></p></td><td width="78" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">3%</font></font></font></p></td><td width="51" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0,00%</font></font></font></p></td><td width="32" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">нет</font></font></font></p></td><td width="39" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">50 грн</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">12</font></font></font></p></td><td width="40" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">36</font></font></font></p></td><td width="65" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="171" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">85 000</font></font></font></p></td></tr><tr valign="bottom"><td width="78" height="6" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">Grace 5-24 льготный период</font></font></font></p></td><td width="52" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>5</b></font></font></font></p></td><td width="78" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">3%</font></font></font></p></td><td width="51" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">2,5%</font></font></font></p></td><td width="32" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">нет</font></font></font></p></td><td width="39" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">50 грн</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">12</font></font></font></p></td><td width="40" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">36</font></font></font></p></td><td width="65" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="171" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">85 000</font></font></font></p></td></tr><tr valign="bottom"><td width="78" height="6" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">Grace 7-24 льготный период</font></font></font></p></td><td width="52" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>7</b></font></font></font></p></td><td width="78" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">3%</font></font></font></p></td><td width="51" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0%</font></font></font></p></td><td width="32" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0,49</font></font></font></p></td><td width="39" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">50 грн</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">12</font></font></font></p></td><td width="40" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">36</font></font></font></p></td><td width="65" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="171" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">85 000</font></font></font></p></td></tr><tr valign="bottom"><td width="78" height="6" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">Grace&nbsp;12-24-льготный период</font></font></font></p></td><td width="52" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>10</b></font></font></font></p></td><td width="78" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">3%</font></font></font></p></td><td width="51" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">5%</font></font></font></p></td><td width="32" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">нет</font></font></font></p></td><td width="39" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">50 грн</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">15</font></font></font></p></td><td width="40" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">36</font></font></font></p></td><td width="65" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="171" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">85 000</font></font></font></p></td></tr><tr valign="bottom"><td width="78" height="5" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">Grace&nbsp;18-24-льготный период</font></font></font></p></td><td width="52" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;"><b>18</b></font></font></font></p></td><td width="78" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">3%</font></font></font></p></td><td width="51" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">10%</font></font></font></p></td><td width="32" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">нет</font></font></font></p></td><td width="39" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">50 грн</font></font></font></p></td><td width="35" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">21</font></font></font></p></td><td width="40" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">36</font></font></font></p></td><td width="65" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">0</font></font></font></p></td><td width="171" bgcolor="#ffffff" style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><p align="center" style="margin-bottom: 0.25cm; direction: ltr; line-height: 17.15px; background: transparent;"><font color="#000000"><font face="Arial, serif"><font style="font-size: 8pt;">85 000</font></font></font></p></td></tr></tbody></table></center>
                        </div>
                        </br>
                        <h2><strong>ФОРВАРД БАНК&nbsp;</strong></h2>

                        <p>&nbsp;</p>

                        <h3><strong>Требования:</strong></h3>

                        <ul>
                            <li>
                                <p>Возраст заемщика - от 21 до 69 лет;</p>
                            </li>
                        </ul>

                        <p>&nbsp;</p>

                        <p>
                            - Сумма кредита - от 1000 грн до 100 000 грн .;<br />
                            - Льготный период – от 4 месяцев; ( можно проставлять любой)<br />
                            - Срок кредитования – от 3 до 36 месяцев;<br />
                            - Ежемесячная комиссия после грейс периода -  3 % ежемесячно;<br />
                            - Авансовый взнос -   0% ;<br />
                            - Процентная ставка - 0,01% годовых;<br />
                            - Разовая комиссия - 0% ;<br />
                            - Досрочное погашение - допускается без комиссий;<br />
                            - Необходимые документы - паспорт и идентификационный код.<br />
                            &nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    @yield('footer', View::make('footer'))
@endsection
