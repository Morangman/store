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
                                        <img class="hidden-opacity" :src="selectedColors[product.id] ? selectedColors[product.id].image : product.image">
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
                                                <p><img class="hr" :src="'../client/uploads/dost.png'">Отправка в день заказа</p>
                                                <p><img class="hr" :src="'../client/uploads/orig.png'">Оригинальная техника</p>
                                                <p><img class="hr" :src="'../client/uploads/gar.png'">Гарантия 1 год</p>
                                                <a :href="$r('credit')"><img class="hr" :src="'../client/uploads/credit.png'">Рассрочка / оплата частями</a>
                                            </div>
                                            <div class="single_variation_wrap">
                                                <div class="woocommerce-variation-add-to-cart variations_button buy-buttons hidden-opacity">
                                                    <button v-on:click="orderCheck(product)" class="buy-in-click buy-in-click_act fancybox button-buy button button-animated add-to-basket button-animated--no-after " href="#buy-in-click-popup" data-id="2776830" data-classes="pink-bttn-normal">
                                                        <span class="button-animated__gradient"></span>
                                                        Заказать сейчас
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
                    <p>Рассрочка оформляется на безналичную стоимость товара — <b>26249</b>&nbsp;грн.</p>
                </div>
                <div class="creditTypeTitle">Варианты рассрочки:</div>
                <table style="margin:auto;width: 100%;">
                    <tbody>
                        <tr class="table-mobile">
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">3 платежа</h3>
                                <p class="credit-tariff-i-payments"><b>3</b>&nbsp;платежa&nbsp;по</p>
                                <div class="credit-tariff-i-uah">9511<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(3, 9511)"></div>
                            </td>
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">6 платежей</h3>
                                <p class="credit-tariff-i-payments"><b>6</b>&nbsp;платежей&nbsp;по</p>
                                <div class="credit-tariff-i-uah">5147<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(6, 5147)"></div>
                            </td>
                            <td class="credit-tariff-i" style="display:true;">
                                <h3 class="credit-tariff-i-title" style="background-color:#4e6bb2">10 платежей</h3>
                                <p class="credit-tariff-i-payments"><b>10</b>&nbsp;платежей&nbsp;по</p>
                                <div class="credit-tariff-i-uah">3500<span class="credit-tariff-i-uah-sign">&nbsp;грн.</span></div>
                                <div class="catalog_item_credit"><input type="submit" class="buttons_pl buttons-send" value="Оформить" v-on:click="selectPaymentTerm(10, 3500)"></div>
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
                                <input name="name" placeholder="Имя" type="text" v-model="name" required>
                                <input-mask v-model="phone" :class="{ 'danger-input': isValidPhoneText }" v-on:input="validatePhone" mask="+38\ 999 999 99 99" placeholder="+38 999 999 99 99" maskChar="" required></input-mask>
                                <p class="text-danger" v-if="isValidPhoneText">Введите корректный номер</p>
                                <span style="font-size: 0.8em;" class="oft"><input class="oftt2" checked="" type="checkbox"> Я согласен с <a target="_blank" :href="$r('guarantee')">публичной офертой</a></span>
                                <button v-if="!validateButton" class="b_o_c modal_btn" type="submit" v-on:click="makeOrder">Купить</button><br><br>
                            </form>
                            <span id="liqpayForm" v-html="liqpay"></span>
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
            };
        },

        methods: {
            orderCreditCheck(product) {
                this.orderStatus = 7;
                this.isTermSelected = false;
                this.creditDataError = false;
                this.creditData.term_payment_cnt = null;
                this.creditData.term_payment_summ = null;

                if (this.ordered_product.length) {
                    if (this.ordered_product[0].product.id !== product.id) {
                        this.colorError = true;
                    } else {
                        this.colorError = false;
                    }
                } else {
                    this.colorError = true;
                }
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
            },

            selectPaymentTerm(ctn, summ) {
                this.creditData.term_payment_cnt = ctn;
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

                    this.errors = {};
                    this.formData = new FormData();
                    this.collectFormData(this.orderData);

                    axios.post(
                        Router.route('order'),
                        this.orderData,
                    ).then((data) => {
                        this.orderSuccess = true;
                        this.validateButton = false;

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
    }
</script>
