<template>
    <div>
        <div v-for="(product, category) in products" :key="`category_${category}`">
            <h1 class="text-center" :class="category.replace(/\s+/g, '_')">{{ category }}</h1>
            <section v-for="(product, i) in product" :key="`product_${i}`" class="phone-container container-fliud" :id="category.replace(/\s+/g, '_')">
                <div class="mti_template">
                    <p>{{ product.general_info }}</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 hidden-opacity"></div>
                        <div class="col-md-7 hidden-opacity">
                            <div class="phone-container-title hidden-opacity" :id="category.replace(/\s+/g, '-')">
                                <span>
                                  <a :href="$r('product', { product: product.id })">{{ product.title }} {{ selectedColors[product.id] ? selectedColors[product.id].color_name : '' }}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel slide" data-interval="false" data-ride="carousel" id="">
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-5 phone-preview">
                                        <img class="hidden-opacity" :src="selectedColors[product.id] ? selectedColors[product.id].image ? selectedColors[product.id].image : product.image : product.image">
                                        <div class="clear"></div>
                                        <div class="clear"></div>
                                        <div class="preview-buttons">
                                            <button v-if="!accessories" class="delivery-kit fancybox-2 link_modal" href="#package-popup">Комплект поставки</button>
                                            <button class="characteristics fancybox-2 hidden-xs" href="#characteristics-popup">Характеристики</button>
                                            <div style="display: none">
                                                <p class="text-center">
                                                    {{ product.general_info }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 hidden-opacity">
                                        <form class="variations_form cart" enctype="multipart/form-data" method="post">
                                            <div class="check-color">Выберите цвет:</div>
                                            <div class="row col colorflex">
                                                <div class="col-xs-2 col-md-2 col col-md-2 col-md-offset-0 col" v-for="(color, i) in product.variations" :key="`variation_${i}`">
                                                    <div class="color-div" :id="color.color_name + i" v-on:click="selectColor(product, color)">
                                                        <div class="color-img color-img-white" :style="'background: ' + color.color"></div>
                                                        <p>{{ color.color_name }}</p>
                                                    </div>
                                                </div>
                                            </div>
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
                                                {{ selectedColors[product.id] ? selectedColors[product.id].old_price : product.old_price }} грн.</span>
                                            </del>
                                            <ins>
                                              <span class="amount sale_p">{{ selectedColors[product.id] ? selectedColors[product.id].price : product.price }} грн.</span>
                                            </ins>
                                          </span>
                                        </div>
                                        <div class="woocommerce-variation-availability"></div>
                                      </div>
                                    </span>
                                            </div>
                                            <div class="row hr">
                                                <p><img class="hr" src="client/uploads/dost.png">Отправка в день заказа</p>
                                                <p><img class="hr" src="client/uploads/orig.png">Оригинальная техника</p>
                                                <p><img class="hr" src="client/uploads/gar.png">Гарантия 1 год</p>
                                                <a :href="$r('credit')"><img class="hr" :src="'../client/uploads/credit.png'">Рассрочка / оплата частями</a>
                                            </div>
                                            <div class="single_variation_wrap">
                                                <div class="woocommerce-variation-add-to-cart variations_button buy-buttons hidden-opacity">
                                                    <button v-on:click="addToBox(product)" class="buy-in-click buy-in-click_act fancybox button-buy button button-animated add-to-basket button-animated--no-after " href="#cart-popup" data-id="2776830" data-classes="pink-bttn-normal">
                                                        Добавити в корзину
                                                    </button>
                                                    <button v-on:click="orderFreeLoanCheck(product)" class="buy-in-click buy-in-click_act fancybox button-buy button add-to-basket" href="#buy-in-click-popup" data-id="2776830" data-classes="pink-bttn-normal">
                                                        Беспроцентный кредит
                                                    </button>
                                                    <button v-on:click="orderCreditCheck(product)" class="buy-in-click buy-in-click_act fancybox credit-btn" href="#creedit-popup">Купить в рассрочку</button>
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
        </div>

        <div class="popup container creditWindow" id="creedit-popup">
            <div  v-if="!colorError && !isTermSelected">
                <div id="creditTitle" style="color:#4e6bb2"><span>Онлайн покупка в рассрочку</span></div>
                <div class="popup-credit-content" style="font-size:12px;">
                    <div style="padding:15px;">Вы подписываете электронный договор рассрочки и оплачиваете первый платеж до получения товара согласно полученных инструкций.<br>Остальные платежи оплачиваете до 20 числа каждого месяца. Указанные суммы платежей - окончательные.
                    <p>Полное онлайн оформление, без визитов в банк и справок, никаких скрытых платежей и страховок. После выплаты рассрочки Вы получаете лимит на покупки в рассрочку в нашем магазине</p>
                    <p>Рассрочка оформляется на безналичную стоимость товара — <b>{{ number_format(creditTotalSumm, 2) }}</b>&nbsp;грн.</p>
                </div>
                <div class="creditTypeTitle">Варианты рассрочки:</div>
                <table style="margin:auto;width: 100%;">
                    <tbody>
                        <tr class="table-mobile">
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">3 платежа</h3>
                                <p class="credit-tariff-i-payments"><b>3</b>&nbsp;платежa&nbsp;по</p>
                                <div class="credit-tariff-i-uah">{{ number_format(creditThreeMonth, 2) }}<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(3, number_format(creditThreeMonth, 2))"></div>
                            </td>
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">6 платежей</h3>
                                <p class="credit-tariff-i-payments"><b>6</b>&nbsp;платежей&nbsp;по</p>
                                <div class="credit-tariff-i-uah">{{ number_format(creditSixMonth, 2) }}<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(6, number_format(creditSixMonth, 2))"></div>
                            </td>
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">10 платежей</h3>
                                <p class="credit-tariff-i-payments"><b>10</b>&nbsp;платежей&nbsp;по</p>
                                <div class="credit-tariff-i-uah">{{ number_format(creditTenMonth, 2) }}<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(10, number_format(creditTenMonth, 2))"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size:10px;">Для оформления рассрочки необходимо нажать на кнопку "Оформить" и перейти к заполнению анкеты оформления рассрочки</p></div>
            </div>
            <div class="modal_forma" v-if="colorError">
                <div class="isa_warning" style="text-align: center;">
                    <i class="icon-notification2"></i>
                    Сначала выберите цвет
                </div>
            </div>
            <div v-if="isTermSelected && !orderSuccess">
                <div id="creditTitle" style="color:#4e6bb2"><span>Онлайн покупка в рассрочку</span></div>
                <div class="personal-info" style="margin-top:20px;">
                    <div class=" form-column-1">
                        <div class="form-column-title">Все данные обязательные для заполнения</div>
                            <div>
                                <div class="form-field-row">
                                    <label class="form-label field-required">ФИО*:</label>
                                    <input id="fio" v-model="name" type="text" class="credit-input" style="width:65%;" required="" autofocus="">
                                </div>
                                <div class="form-field-row">
                                    <label class="form-label field-required">Дата рождения*:</label>
                                    <div class="form-field-group">
                                        <input v-model="creditData.birth_date" placeholder="День" id="bdd" type="text" class="form-field-day" style="width:19%; display: initial;" required="">
                                        <input v-model="creditData.birth_month" placeholder="Месяц" id="bdm" type="text" class="form-field-month" style="display: initial; width:19%;" required="">
                                        <input v-model="creditData.birth_year" placeholder="Год" id="bdy" type="text" class="form-field-year" style=" display: initial; width:19%;" required="">
                                    </div>
                                    <div class="form-field-row">
                                        <label class="form-label field-required">Контактный телефон*:</label>
                                        <input-mask v-model="phone" :class="{ 'danger-input': isValidPhoneText }" v-on:input="validatePhone" mask="+38\ 999 999 99 99" placeholder="+38 999 999 99 99" maskChar="" required></input-mask>
                                    </div>
                                    </div>
                                    <div class="form-field-row">
                                        <label class="form-label field-required">Идентификационный код:</label>
                                        <input v-model="creditData.ind_code" id="inn" type="text" class="credit-input" style="width:65%;" required="">
                                    </div>
                                    <div class="form-field-row" id="ch">
                                        <label class="form-label field-required">ID паспорт</label>
                                        <input v-model="creditData.id_passport" style=" display: initial; -webkit-appearance: revert;" id="checkBox" type="checkbox">
                                    </div>
                                    <div class="form-field-row">
                                        <label class="form-label field-required">Серия и номер паспорта:</label>
                                        <input v-model="creditData.passport_serial" maxlength="8" id="psp" type="text" class="credit-input" style="width:65%;" required="">
                                    </div>
                                    <div class="form-field-row">
                                        <label class="form-label">Почтовый ящик:</label>
                                        <input v-model="email" id="hpe" type="text" class="credit-input" style="width:65%;">
                                    </div>
                            </div>
                            <div class="modal_forma" v-if="creditDataError">
                                <div class="isa_warning" style="text-align: center;">
                                    <i class="icon-notification2"></i>
                                     Заполните обязательные поля*
                                </div>
                            </div>
                            <div class="form-buttons-group" style="margin: 20px 0;">
                                <span class="buttons-group-half buttons-group-half-right">
                                    <input type="submit" class="buttons_pl buttons-send" v-on:click="makeOrder" value="Оформить" id="submitCreditId">
                                </span>
                            </div>
                        </div>
                    </div>
                <div class="form-bottom-group creditInfoBottom"><div>*Нажимая кнопку "Оформить" Я даю согласие на обработку моих личных данных</div><div><br>Внимание! Рассрочка выдается только гражданам Украины!<br>Более детальную информацию Вы можете получить у агента по продаже.</div></div>
            </div>
            <div class="isa_success" style="text-align: center;" v-if="orderSuccess">
                <i class="icon-checkmark-circle"></i>
                Спасибо за Ваш заказ!<br>
                Отправьте копии страниц паспорта, где есть отметки и ид. кода на <b>oaligator555@gmail.com</b>
                Подойдут отсканированные копии или сфотографированные на мобильный телефон
                В ближайшее время с Вами свяжется сотрудник магазина для уточнения заказа.
            </div>
        </div>


        <div class="popup container" id="buy-in-click-popup">
            <div class="buy-in-click-popup-content">
                <div class="modal_top_wp clearfix">
                    <div class="mt_img">
                        <img alt="" id="ip_img" src="client/5s.png">
                    </div>
                    <div class="mt_info">
                        <p class="mti_title">
                            <span id="ip_model">iPhone SE</span>
                            <span id="ip_color"></span>
                            <span id="ip_memory">32Gb</span>
                        </p>
                        <p class="mti_price">
                            <span id="ip_oldprice">17 000 грн.</span>
                            <span id="ip_newprice">13 990 грн.</span>
                        </p>
                        <div class="modal_forma" v-if="!colorError">
                            <form id="form1" v-if="!orderSuccess">
                                <input name="name" :class="{ 'border-danger': errors.name }" placeholder="Имя" type="text" v-model="name" required>
                                <input-mask v-model="phone" :class="{ 'danger-input': isValidPhoneText }" v-on:input="validatePhone" mask="+38\ 999 999 99 99" placeholder="+38 999 999 99 99" maskChar="" required></input-mask>
                                <p class="text-danger" v-if="isValidPhoneText">Введите корректный номер</p>
                                <div class="promo">
                                    <p class="mti_title">ОСТАВЬТЕ ЗАЯВКУ</p>
                                    <p>и получите в подарок защитное стекло!</p>
                                    <b style="color: #1a86d6;">Цена снижена до 14 апреля</b>
                                </div>
                                <span style="font-size: 0.8em;" class="oft"><input class="oftt2" checked="" type="checkbox"> Я согласен с <a target="_blank" :href="$r('guarantee')">публичной офертой</a></span>
                                <button v-if="!validateButton" class="b_o_c modal_btn" type="submit" v-on:click="makeOrder">Купить</button><br><br>
                            </form>
                            <span id="liqpayForm" v-html="liqpay"></span>
                            <div v-for="(error, i) in errors.name"
                                :key="`name__error__${i}`"
                                class="text-danger error"
                            >
                                <p class="text-danger">{{ error }}</p>
                            </div>
                            <div class="isa_warning" v-if="colorError">
                                <i class="icon-notification2"></i>
                                Сначала выберите цвет
                            </div>
                            <div class="isa_success" v-if="orderSuccess">
                                <i class="icon-checkmark-circle"></i>
                                Спасибо за Ваш заказ!
                            </div>
                        </div>
                        <div class="modal_forma" v-if="colorError">
                            <div class="isa_warning">
                                <i class="icon-notification2"></i>
                                Сначала выберите цвет
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup container" id="cart-popup">
            <div class="buy-in-click-popup-content">
                <div class="modal_top_wp">


                    <div class="products" v-for="(product, i) in orders.order" :key="`order__${i}`">
                        <div class="product-image">
                            <a :href="$r('product', { product: product.id })" class="product-image_url">
                                <img :src="product.variation.image ? product.variation.image  : product.image" alt="">
                            </a>
                        </div>
                        <div class="product-info">
                            <p class="product-title">{{ product.product_title }}</p>
                            <p class="product-color">Цвет: {{ product.variation.color_name }}</p>
                            <div class="product-prices">
                                <p class="old">{{ product.variation.old_price }} грн.</p>
                                <p class="new">{{ product.variation.price }} грн.</p>
                            </div>
                        </div>
                        <div class="modal-order-product__product-base-quantity">
                            <div class="plus-minus">
                                <span class="plus-minus__button plus-minus__button--plus spinner-plus" v-on:click="plusQtn(i)">+</span>
                                <input class="plus-minus__input plus-minus-input cart-update-quantity" autocomplete="off" min="1" max="99" name="quantity-base" v-model="orders.order[i].quantity" v-on:keyup="onChangeQtn(i)">
                                <span class="plus-minus__button plus-minus__button--minus spinner-minus" v-on:click="minusQtn(i)">-</span>
                            </div>
                        </div>
                        <div class="modal-order-product__product-base-remove remove-one-row-cart-data" v-on:click="removeFromCart(i)" data-modal-close="false"></div>
                    </div>

                    <p v-if="orders['order'].length" class="to_pay">К ОПЛАТЕ: {{ totalSumm }} грн.</p>

                    <p v-if="!orders['order'].length" style="margin-top:10px;" class="to_pay">Корзина пуста!</p>

                    <p v-if="recommended.length && orders['order'].length" class="to_pay">Рекомендуем к товару:</p>

                    <span v-if="orders['order'].length">
                        <div class="products" v-for="(product, i) in recommended" :key="`order_recommended__${i}`">
                            <div class="product-image">
                                <a :href="$r('product', { product: product.id })" class="product-image_url">
                                    <img :src="product.image" alt="">
                                </a>
                            </div>
                            <div class="product-info">
                                <p class="product-title">{{ product.title }}</p>
                                <p class="product-color">Цвет: {{ product.variations[0].color_name }}</p>
                                <div class="product-prices">
                                    <p class="old">{{ product.variations[0].old_price }} грн.</p>
                                    <p class="new">{{ product.variations[0].price }} грн.</p>
                                </div>
                            </div>
                            <div class="modal-order-product__product-base-quantity">
                                <a href="javascript:;" v-on:click="addToBox(product)">Добавить</a>
                            </div>
                        </div>
                    </span>

                    <div class="modal_forma" v-if="orders['order'].length">
                        <form id="form1" v-if="!orderSuccess">
                            <input name="name" :class="{ 'border-danger': errors.name }" placeholder="Имя" type="text" v-model="name" required><br>
                            <input-mask v-model="phone" :class="{ 'danger-input': isValidPhoneText }" v-on:input="validatePhone" mask="+38\ 999 999 99 99" placeholder="+38 999 999 99 99" maskChar="" required></input-mask>
                            <p class="text-danger" v-if="isValidPhoneText">Введите корректный номер</p>
                            <div class="promo">
                                <p class="mti_title">ОСТАВЬТЕ ЗАЯВКУ</p>
                                <p>и получите в подарок защитное стекло!</p>
                                <b style="color: #1a86d6;">Цена снижена до 16 апреля</b>
                            </div>
                            <span style="font-size: 0.8em;" class="oft"><input class="oftt2" checked="" type="checkbox"> Я согласен с <a target="_blank" :href="$r('guarantee')">публичной офертой</a></span>
                            <button v-if="!validateButton" class="b_o_c modal_btn" type="submit" v-on:click="makeOrder">Купить</button><br><br>
                        </form>
                        <span id="liqpayForm" v-html="liqpay"></span>
                        <div v-for="(error, i) in errors.name"
                            :key="`name__error__${i}`"
                            class="text-danger error"
                        >
                            <p class="text-danger">{{ error }}</p>
                        </div>
                        <div class="isa_success" v-if="orderSuccess">
                            <i class="icon-checkmark-circle"></i>
                            Спасибо за Ваш заказ!
                        </div>
                    </div>
    
                </div>
            </div>
        </div>

    <a class="fancybox add-to-cart" href="#cart-popup"><div class="count">{{ ctn }}</div></a>
        
    </div>
</template>

<script>
    import InputMask from 'vue-input-mask';
    import FormHelper from "../../admin/js/mixins/form_helper";

    export default {
        mixins: [FormHelper],

        components: {
            InputMask: InputMask,
        },

        props: {
            products: {
                type: Object,
                required: true,
            },
            accessories: {
                type: Boolean,
                required: false,
            },
        },

        data() {
            return {
                selectedColors: [],
                creditData: {
                    birth_date: null,
                    birth_month: null,
                    birth_year: null,
                    ind_code: null,
                    id_passport: null,
                    passport_serial: null,
                    term_payment_cnt: null,
                    term_payment_summ: null,
                },
                isTermSelected: false,
                orderData: null,
                email: '',
                name: '',
                phone: '',
                errors: {},
                colorError: false,
                creditDataError: false,
                orderSuccess: false,
                ordered_product: [],
                isValidPhone: false,
                isValidPhoneText: false,
                validateButton: false,
                liqpay: null,
                orderStatus: 1,
                creditTotalSumm: null,
                creditThreeMonth: null,
                creditSixMonth: null,
                creditTenMonth: null,
                orders: {order: []},
                totalSumm: 0,
                ctn: 0,
                recommended: [],
            };
        },

        methods: {
            addToBox(product){
                if (product.recommended && product.recommended.length){
                    this.recommended = product.recommended;
                }

                if (product.recommended_products && product.recommended_products.length){
                    this.recommended = product.recommended_products;
                }

                let localValue = localStorage.getItem("orders");
                let storedNames = JSON.parse(localStorage.getItem("orders"));

                let variation = this.selectedColors[product.id] ? this.selectedColors[product.id] : product.variations[0];

                if(localValue){
                    //Добавляем или изменяем значение:
                    storedNames.order.push({
                        id: product.id,
                        image: product.image,
                        product: product,
                        summ: product.price,
                        price: product.price,
                        product_color: variation.color_name,
                        product_title: product.title,
                        quantity: 1,
                        variation: variation,
                    });
                    localStorage.setItem("orders", JSON.stringify(storedNames));

                    this.orders = JSON.parse(localStorage.getItem("orders"));
                }else{
                    this.orders.order.push({
                        id: product.id,
                        product: product,
                        image: product.image,
                        summ: product.price,
                        price: product.price,
                        product_color: variation.color_name,
                        product_title: product.title,
                        quantity: 1,
                        variation: variation,
                    });
                    localStorage.setItem("orders", JSON.stringify(this.orders));
                }

                this.valuate();

                this.$forceUpdate();
            },

            removeFromCart(index) {
                this.orders.order.splice(index,1);
                localStorage.setItem("orders", JSON.stringify(this.orders));
                this.valuate();
            },
            clearCart() {
                let orders = {
                    order: []
                };
                localStorage.setItem("orders", JSON.stringify(orders));
                this.totalSumm = 0;
            },
            plusQtn(index) {
                this.orders.order[index].quantity =  parseInt(this.orders.order[index].quantity) + 1;
                this.orders.order[index].summ = this.orders.order[index].price * this.orders.order[index].quantity;
                localStorage.setItem("orders", JSON.stringify(this.orders));
                this.valuate();
            },
            minusQtn(index) {
                if (parseInt(this.orders.order[index].quantity) !== 1) {
                    this.orders.order[index].quantity =  parseInt(this.orders.order[index].quantity) - 1;
                }
                this.orders.order[index].summ = this.orders.order[index].price * this.orders.order[index].quantity;
                localStorage.setItem("orders", JSON.stringify(this.orders));
                this.valuate();
            },
            onChangeQtn(index) {
                this.orders.order[index].summ = this.orders.order[index].price * parseInt(this.orders.order[index].quantity);
                localStorage.setItem("orders", JSON.stringify(this.orders));
                this.valuate();
            },
            valuate(){
                this.totalSumm = 0;
                if (this.orders.order && this.orders.order.length) {
                    _.each(this.orders.order, (key, value) => {
                        if(key) {
                            this.totalSumm += parseFloat(key.summ);
                        }
                    });
                }

                this.productsCount();
            },

            orderCreditCheck(product) {
                this.orderStatus = 7;
                this.isTermSelected = false;
                this.creditDataError = false;
                this.creditData.term_payment_cnt = null;
                this.creditData.term_payment_summ = null;

                this.creditTotalSumm = null;

                this.creditThreeMonth = null;
                this.creditSixMonth = null;
                this.creditTenMonth = null;

                if (this.ordered_product.length) {
                    this.creditTotalSumm = parseFloat(this.ordered_product[0].price) * 5 / 100 + parseFloat(this.ordered_product[0].price);

                    this.creditThreeMonth = this.creditTotalSumm / 0.92 / 3;
                    this.creditSixMonth = this.creditTotalSumm / 0.85 / 6;
                    this.creditTenMonth = this.creditTotalSumm / 0.75 / 10;

                    if (this.ordered_product[0].product.id !== product.id) {
                        this.colorError = true;
                    } else {
                        this.colorError = false;
                    }
                } else {
                    this.colorError = true;
                }
                this.$forceUpdate();
            },

            number_format(number, decimals) {
                return Number(Math.round(number+"e"+decimals)+"e-"+decimals); 
            },

            orderCheck(product) {
                this.orderStatus = 1;

                if (this.ordered_product.length) {
                    if (this.ordered_product[0].product.id !== product.id) {
                        this.colorError = true;
                    } else {
                        this.colorError = false;
                    }
                } else {
                    this.colorError = true;
                }
                this.$forceUpdate();
            },

            orderFreeLoanCheck(product) {
                this.orderStatus = 8;

                if (this.ordered_product.length) {
                    if (this.ordered_product[0].product.id !== product.id) {
                        this.colorError = true;
                    } else {
                        this.colorError = false;
                    }
                } else {
                    this.colorError = true;
                }
                this.$forceUpdate();
            },

            selectPaymentTerm(quantity, summ) {
                this.creditData.term_payment_cnt = quantity;
                this.creditData.term_payment_summ = summ;

                this.isTermSelected = true;
                this.$forceUpdate();
            },

            selectColor(product, color) {
                this.colorError = false;

                this.selectedColors[product.id] = color;

                this.ordered_product = [{
                    price: color.price,
                    product: product,
                    product_color: color.color_name,
                    product_title: product.title,
                    quantity: 1,
                    variation: color,
                }];

                this.$forceUpdate();
            },

            validatePhone() {
                if (this.phone.length < 17) {
                    this.isValidPhone = false;
                } else {
                    this.isValidPhone = true;
                }
            },

            productsCount() {
                this.ctn = 0;

                if (this.orders && this.orders['order'].length) {
                    _.each(this.orders['order'], (key, value) => {
                        if(key) {
                            this.ctn += parseInt(key.quantity);
                        }
                    });
                } else {
                    this.ctn = 0;
                }

                this.$forceUpdate();
            },

            makeOrder() {
                this.colorError = false;
                this.creditDataError = false;
                this.isValidPhoneText = false;
                this.validateButton = false;

                if (this.isValidPhone) {
                    this.validateButton = true;

                    if (this.orderStatus === 7) {
                        if (this.name === null ||
                                this.phone === null ||
                                this.creditData.birth_date === null ||
                                this.creditData.birth_month === null ||
                                this.creditData.birth_year === null ||
                                this.creditData.birth_year === null
                        ) {
                            this.creditDataError = true;
                            return;
                        } else {
                            this.orderData = {
                                name: this.name,
                                email: this.email,
                                phone: this.phone,
                                ordered_product: this.ordered_product,
                                order_status: this.orderStatus,
                                credit_data: this.creditData,
                            };
                        }
                    } else {
                        this.orderData = {
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            ordered_product: this.ordered_product,
                            order_status: this.orderStatus,
                        };
                    }

                    if (this.orderStatus === 1) {
                        this.orderData = {
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            ordered_product: this.orders.order,
                            order_status: this.orderStatus,
                        };
                    }

                    this.errors = {};
                    this.formData = new FormData();
                    this.collectFormData(this.orderData);

                    axios.post(
                        Router.route('order'),
                        this.orderData,
                    ).then((data) => {
                        this.orderSuccess = true;
                        this.validateButton = false;

                        this.clearCart();

                        if (this.orderStatus === 1) {
                            setTimeout(() => location.href = Router.route('home'), 2000);
                        }

                        if (this.orderStatus === 6) {
                            this.liqpay = data.data.form;
                        }
                    }).catch(({ response: { data: { errors } } }) => {
                        this.errors = errors;

                        this.validateButton = false;

                        if (this.errors.ordered_product) {
                            this.colorError = true;
                        } else {
                            this.colorError = false;
                        }
                    });
                } else {
                    this.isValidPhoneText = true;
                }
            },
        },

        created() {
            let localValue = localStorage.getItem("orders");

            if (localValue) {
                this.orders = JSON.parse(localStorage.getItem("orders"));
            }

            this.valuate();
        },
    }
</script>
