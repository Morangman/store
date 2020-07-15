$(document).ready(function () {

    $('.oftt').click(function () {
        if($(this).is(':checked')) {
            $('.grey-button').removeAttr('disabled');
            $('.grey-button').removeClass('no_valid');
        } else {
            $('.grey-button').attr( "disabled", "disabled" );
            $('.grey-button').addClass('no_valid');
        }
    });

    $('.oftt2').click(function () {
        if($(this).is(':checked')) {
            $('.b_o_c').removeAttr('disabled');
            $('.b_o_c').removeClass('no_valid');
        } else {
            $('.b_o_c').attr( "disabled", "disabled" );
            $('.b_o_c').addClass('no_valid');
        }
    });


    //$('#block_4[data-type="background"]').each(function(){
    //    var $bgobj = $(this); // Назначаем объект
    //    $(window).scroll(function() {
    //        console.log($(window).scrollTop());
    //        console.log($bgobj.data('speed'));
    //        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
    //        var coords = '50% '+ yPos + 'px';
    //        $bgobj.css({ backgroundPosition: coords });
    //    });
    //});


    //new WOW().init();




    $('.fancybox').fancybox({
        closeClick: false,
        scrolling: 'no',
        helpers: {
            overlay: {
                closeClick: false //,
                // locked: true // default behavior
            }
        }
    });

	//$('input').placeholder();


	$(function() {
		$('a.scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top -0
					}, 1000);
					return false;
				}
			}
		});
	});

	getMothName = function(monthIndex) {
		var m = "";
		switch (monthIndex) {
			case 0:
				m = "января";
				break;
			case 1:
				m = "февраля";
				break;
			case 2:
				m = "марта";
				break;
			case 3:
				m = "апреля";
				break;
			case 4:
				m = "мая";
				break;
			case 5:
				m = "июня";
				break;
			case 6:
				m = "июля";
				break;
			case 7:
				m = "августа";
				break;
			case 8:
				m = "сентября";
				break;
			case 9:
				m = "октября";
				break;
			case 10:
				m = "ноября";
				break;
			case 11:
				m = "декабря";
				break;
		}
		return m;
	};

	var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var dd = today.getDate();
	var mm = today.getMonth();




	$(":input").inputmask();

	$('.deadLine').each(function() {
		$( this ).text(dd + ' ' + getMothName(mm));
	});

	function checkPhone (phone) {
		var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var _this = phone.val().trim();

		if(reg.test(_this)) {
			return true;
		} else {
			return false;
		}
	}

	//$("#send_form_2").validate({
	//	rules: {
	//		your_name: "required",
	//		gift: "required",
	//		delivery: "required",
	//		metro: {
	//			required: {
	//				depends: function(element) {
	//					return $("#send_form_2 [name=delivery]").val() === "metro";
	//				}
	//			}
	//		},
	//		address: {
	//			required: {
	//				depends: function(element) {
	//					return $("#send_form_2 [name=delivery]").val() === "address";
	//				}
	//			}
	//		},
	//		date: "required",
	//		"time[from]": "required",
	//		"time[to]": "required",
	//		tphone: {
	//			required: true,
	//			minlength: 3
	//		}
	//	},
	//	errorPlacement: function(error, element) {
	//		/*if (element.is("select")) {
	//		 element.next(".jq-selectbox__select").addClass("error");
	//		 }*/
	//	}
	//});

	$("#send_form_2, #send_form_3").submit(function (event) {
		$("form fieldset").addClass('wow shake animated');
		shakedAjax();

		if ($(".error").length < 1) {
			$.post("mail/index.html", $(this).serialize()).done(function() {
				setTimeout(function () {
					document.location.href = "mail/thanks" + window.location.search;
				}, 1000);
			})
		}
		return false;
	});

	$('#send_form_1').submit(function () {
		$(".error").removeClass("error");

		if ($('#send_form_1 .main_phone').val() == '') {
			$("#send_form_1 .main_phone").addClass("error");
			$("#send_form_1 fieldset").addClass('wow shake animated');
			shakedAjax();
		}

		if ($(".error").length < 1) {
			$.post("mail/index.html", $(this).serialize())
					.done(function() {
						setTimeout(function () {
							document.location.href = "/mail/thanks/" + window.location.search;
						}, 1000);
					});
		}

		return false;
	});

    $('.send_order').click(function () {
		$(".error").removeClass("error");

		if ($('#block_1 .phone').val() == '') {
			$("#block_1 .phone").addClass("error");
			$("#block_1 .shake_box").addClass('wow shake animated');
			shakedAjax();
		}
    console.log($('#block_1 .phone').val());
		if ($(".error").length < 1) {
			$.post("mail/index.html", {z: 1, phone: $('#block_1 .phone').val(), name: $('#block_1 [name=top_name]').val() + ' ' + $('#block_1 .mass_elem.active').html() + ' ' + $('#block_1 .color_action.active .color_name').html()})
					.done(function() {
						setTimeout(function () {
							document.location.href = "/mail/thanks/" + window.location.search;
						}, 1000);
					});
		}

		return false;
	});



	var shakedAjax = function() {
		setTimeout(function() {
			$('form').find('fieldset').removeClass('wow shake animated');
			$('.shake_box').removeClass('wow shake animated');
		}, 500);
	};

	function validate_email(target) {
		if($(target).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(target).val())){
				// Поле email заполнено (здесь будем писать код валидации)
				$(target).removeClass("error");
			} else {
				$(target).addClass("error");
			}
		} else {
			// Поле email пустое, выводим предупреждающее сообщение
			$(target).addClass("error");
		}
	}

	function validate_phone(target) {
		if($(target).val() != '') {
			var pattern = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
			if(pattern.test($(target).val())){
				$(target).removeClass("error");
			} else {
				$(target).addClass("error");
			}
		} else {
			$(target).addClass("error");
		}
	}

	$("form [name=email]").blur(function() {
		validate_email(this);
	});

	$("form [name=phone]").blur(function() {
		validate_phone(this);
	});

	// обмен товара
	$('.change_send').click(function (event) {
		event.preventDefault();
		$(".error").removeClass("error");
		$("#send_form_change .form_select").removeClass("open_select_error");

		validate_email($('#send_form_change [name=email]'));

		validate_phone($('#send_form_change [name=phone]'));

		if ($("#send_form_change [name=date]").val().trim().length < 3) {
			$("#send_form_change [name=date]").addClass("error");
		}
		if ($("#send_form_change [name=item_name]").val().trim().length < 3) {
			$("#send_form_change [name=item_name]").addClass("error");
		}


		var imei_input = $(this).parent('#send_form_change').find("input[name='imei']");
		if($(this).parent('#send_form_change').find("input[name='imei']").val() != '') {
			var pattern = /^\d+$/;
			if(pattern.test(imei_input.val())) {
				imei_input.removeClass("error");
			} else {
				imei_input.addClass("error");
			}
		} else {
			imei_input.addClass("error");
		}

		if ($("#send_form_change [name=serial]").val().trim().length < 3) {
			$("#send_form_change [name=serial]").addClass("error");
		}
		if ($("#send_form_change [name=issue]").val().trim().length < 3) {
			$("#send_form_change [name=issue]").addClass("error");
		}
		var select = $("#send_form_change [name=open] option:selected").attr("value");
		if(select == "") {
			$("#send_form_change .form_select").addClass("open_select_error");
		}

		if ($("#send_form_change [name=defects]").val().trim().length < 3) {
			$("#send_form_change [name=defects]").addClass("error");
		}


		$("#send_form_change fieldset").addClass('wow shake animated');
		shakedAjax();

		if ($('.error').length < 1) {
			var formData = new FormData($('#send_form_change')[0]);
			$.ajax({
				type: 'POST',
				processData: false,
				contentType: false,
				url: '/mail/send_quality',
				data: formData,
				success: function(data){
					$('#change_box').bPopup().close();
				}
			});
		};

		return false;
	});

	$('.approve_btn').click(function (event) {
		event.preventDefault();
		$(".error").removeClass("error");


		if ($("#send_review_form [name=your_name]").val().trim().length < 1) {
			$("#send_review_form [name=your_name]").addClass("error");
		}

        if ($("#send_review_form [name=city]").val().trim().length < 1) {
            $("#send_review_form [name=city]").addClass("error");
        }

        if ($("#send_review_form [name=issue]").val().trim().length < 3) {
            $("#send_review_form [name=issue]").addClass("error");
        }

		$("#send_review_form fieldset").addClass('wow shake animated');
		shakedAjax();

		if ($('.error').length < 1) {
			$('#send_review').bPopup().close();
		}
		return false;
	});

	$('.control_send').click(function (event) {
		event.preventDefault();
		$(".error").removeClass("error");

		validate_email($('#send_form_control [name=email]'));

		validate_phone($('#send_form_control [name=phone]'));

		if ($("#send_form_control [name=issue]").val().trim().length < 3) {
			$("#send_form_control [name=issue]").addClass("error");
		}

		$("#send_form_control fieldset").addClass('wow shake animated');
		shakedAjax();

		if ($('.error').length < 1) {
			$('#control_box').bPopup().close();
		}

		return false;
	});

	$("#send_form_4").submit(function (event) {
		event.preventDefault();
		$(".error").removeClass("error")
		if (($(this).find("[name=name]").val()).trim().length < 3) {
			$(this).find("[name=name]").addClass("error")
		}
		if (($(this).find("[name=city]").val()).trim().length < 3) {
			$(this).find("[name=city]").addClass("error")
		}
		if (($(this).find("[name=review]").val()).trim().length < 3) {
			$(this).find("[name=review]").addClass("error")
		}

		$("#send_form_4 fieldset").addClass('wow shake animated');
		shakedAjax();

		if ($(this).find(".error").length < 1) {
			document.location.href = "/mail/thanks_review" + window.location.search;
		};
	});

	$('#block_3 .item_order_button').click(function(){
		$('#frmOrderPhone .item_name').html($(this).closest('.block_3_cat_row').find('.block_3_cat_title').html());
		$('#frmOrderPhone .item_text').html($(this).parent().find('.item_text').html());
		$('#frmOrderPhone .item_color').html($(this).parent().find('.item_color').html());
		$('#frmOrderPhone .item_color .color').attr('onclick', function( val, attr ) { return "popup" + attr;});
		$('#frmOrderPhone .main_color').attr('id', function( val, attr ) { return "popup" + attr;});
		$('#frmOrderPhone .price').html($(this).closest('.block_3_cat_row').find('.price').html());
		$('#frmOrderPhone .price_not_sale span').html($(this).closest('.block_3_cat_row').find('.price_not_sale span').html());
		$('#frmOrderPhone .item_old_price').attr('id', $(this).parent().find('.item_old_price').attr('id'));
		$('#frmOrderPhone .item_old_price').attr('id', function( val, attr ) { return "popup" + attr;});
		$('#frmOrderPhone .item_new_price').html($(this).parent().find('.item_new_price').html());
		$('#frmOrderPhone .item_new_price').attr('id', $(this).parent().find('.item_new_price').attr('id'));
		$('#frmOrderPhone .item_new_price').attr('id', function( val, attr ) { return "popup" + attr;});
		$('#frmOrderPhone .iphone-img').attr('src', $(this).closest('.block_3_cat_row').find('img').attr('src'));
		$('#frmOrderPhone .iphone-img').attr('id', $(this).closest('.block_3_cat_row').find('img').attr('id'));
		$('#frmOrderPhone .iphone-img').attr('id', function( val, attr ) { return "popup" + attr;});
		$('#frmOrderPhone a.btnAction').attr('valcomment', $(this).attr('valinfo'));

		$('#frmOrderPhone input[name=name]').attr('value', ($(this).closest('.block_3_cat_row').find('.block_3_cat_title').html()   +' '+   ($(this).closest('.block_3_cat_row').find('.mass_elem.active') .html()) +'  '+ ($(this).closest('.block_3_cat_row').find('.color_action.active .color_name').html())));

		$('#frmOrderPhone').bPopup({
            speed: 650,
            transition: 'fadeIn',
			positionStyle: 'fixed',
		});
	});


    $('#block_3 .ch').click(function(){
        $('#frmCh .inner .desc').html($(this).next().html());
        $('#frmCh').bPopup({
            speed: 650,
            transition: 'fadeIn',
        });
        return false;
    });


    function changeTextBlock(cls) {
		var testClass = '.for_'+cls;
		if($('section.block_1').find(testClass).hasClass('active_block')) {
			return;
		}

		$('.block_1 .main_text.active_block').fadeOut('fast', function() {
			$(this).removeClass('active_block');
			$('.block_1').find(testClass).addClass('active_block').fadeIn('fast');
		});//появление второго блока вызываем в коллбэке, чтобы он не успел появиться до ухода первого
	}




    // генерация картинок вверху
	select5s16black = function() {
		$('#button').attr('valinfo', function( val, attr ) { return attr + "Black";});
		changePicFade('img_main', 'themes/site/img/main_img_black.html' );
		$('#img_main_big').attr('href', 'themes/site/img/main_img_black_big.html');
		changeTextBlock('black');//upd
	}

	select5s16silver = function() {
		$('#button').attr('valinfo', function( val, attr ) { return attr + "Silver";});
		changePicFade('img_main', 'themes/site/img/main_img_silver.html' );
		$('#img_main_big').attr('href', 'themes/site/img/main_img_silver_big.html');
		changeTextBlock('silver');//upd
	}

	select5s16gold = function() {
		$('#button').attr('valinfo', function( val, attr ) { return attr + "Gold";});
		changePicFade('img_main', 'themes/site/img/main_img_gold.html' );
		$('#img_main_big').attr('href', 'themes/site/img/main_img_gold_big.html');
		changeTextBlock('gold');//upd

	}

    removeProdHead = function(id)
    {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/mail/removeProdHead/',
            data: {
                id: id
            },
            success: function(result){
                var deletedProduct = $('.delete-product-' + id).parent();
                deletedProduct.slideToggle("slow");
                setTimeout(function(){
                    deletedProduct.remove();
                }, 500);
                $('.product-counter').text('Товаров в корзине: ' + result.count);
                $('.total-product-price span span').text(result.total);
            }
        });
    }


	$('[name="woocommerce_checkout_place_order"]').click(function() {
		setTimeout(sV, 1000);

	});

	function sV(){
		var first = $('.not-valid').first();
		$.scrollTo(first, 1000, {offset:-100});
	}

	dinamicImagesTop = function (target) {
		var sortId = target[0];
		var img    = '/uploads/params/sources/' + target[1];
		var color_name = target[2];
		var prices = target[3];
		var listPrices = '';
		$.each(prices, function () {
			listPrices += '   ' + this.name + ' - <del>' + $.number(this.price, 0, ',', ' ') + '</del> руб. <span><b>' + $.number(this.markup, 0, ',', ' ') + '</b></span> руб.</br>';
		});
		$('#img_main').fadeOut(200, function() {
			$('#img_main').attr('src', img);
			$('#img_main').fadeIn(200);
		});
		sortId = parseInt(sortId);
		$('.block_1 .main_text.active_block').fadeOut('fast', function() {
			var text_inner = '' +
					'Цвет: ' + color_name +
					'</br>' + listPrices;
			$('.block_1').find('.sort_' + sortId + ' .no_red').empty();
			$('.block_1 .sort_' + sortId + ' .no_red').append(text_inner);
			$(this).removeClass('active_block');
			$('.block_1').find('.sort_' + sortId).addClass('active_block').fadeIn('fast');
		});

		//var price  = target[2] + ' руб.';
		//var img    = (target[3] == null) ? 'no-image.jpg' : target[3];

		//$("#prod_" + idProd).parent().find('.main_color').text(color);
		//$("#prod_" + idProd).parent().find('.item_new_price').text(price);
		//changePicFade('item_img_' + idProd, '/uploads/params/sources/' + img);
	}
	// генерация картинок вверху


	// динамика цен и картинок товара
	changePicFade = function(el_id, new_img_url) {
		if ($('#' + el_id).attr('src') == new_img_url) {
			return;
		}
		$('#' + el_id).fadeOut(200, function() {
			$('#' + el_id).attr('src', new_img_url);
			$('#' + el_id).fadeIn(200);
		})
	}

	dinamicParams = function (target) {
		var idProd = target[0];
        var top_id = idProd;
        top_id = parseInt(idProd ) + 50;
		var color  = target[1];
		var price  = target[2] + ' руб.';
		var img    = (target[3] == null) ? 'no-image.jpg' : target[3];
		var paramId = target[4];
		var top = target[5];

        if(top) {
    		changePicFade('item_img_' + top_id, '/uploads/params/sources/' + img);
        } else {
    		changePicFade('item_img_' + idProd, '/uploads/params/sources/' + img);
        }
	}

        $('.mass_elem, .color_action').on('click', function() {

			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			var prodId = $(this).closest('.right').find('.mass_elems .active').attr('data-id');
			var param = $(this).closest('.right').find('.color_actions_box .active').attr('data-param');


            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/mail/getDinamic',
                data: {
                    prodId: prodId,
                    param: param
                },
                success: function(result){
					console.log(result);
                    $('.cat_id_' + result.category).find('.price').html(result.price_2 + ' руб.');
                    $('.cat_id_' + result.category).find('.price_not_sale span').html(result.price + ' руб.');
                }
            });
			return false;
		});

	popupdinamicParams = function (target) {
		var idProd = target[0];
		var color  = target[1];
		var price  = target[2] + ' руб.';
		var img    = (target[3] == null) ? 'no-image.jpg' : target[3];

		$("#frmOrderPhone").find('.main_color').text(color);
		$("#frmOrderPhone").find('.item_new_price').text(price);
		changePicFade('popupitem_img_' + idProd, '/uploads/params/sources/' + img);
	}


    // динамика цен и картинок товара
	$('.item_color').find('.color:first').addClass('active_color');
	$('.item_color').on('click','.color',function() {
		$(this).siblings().removeClass('active_color').end().addClass('active_color');
	});


	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // создаем объект
		if ($(window).width() > 767) {
			$(window).scroll(function() {
				var yPos = ($(window).scrollTop()); // вычисляем коэффициент
				// Присваиваем значение background-position
				var coords = 'center '+ yPos + 'px';
				// Создаем эффект Parallax Scrolling
				$bgobj.css({ 'background-position': coords });
			});
		}
	});

	//$('.press-about-img-row .press-about-img img').hover(function(){
	//	var src = ($(this).attr('src').lastIndexOf('-h') != -1) ? $(this).attr('src').replace('-h', '') : $(this).attr('src').replace('.png', '-h.png');
	//	$(this).attr('src', src);
	//});
	//$(".top-menu, .bottom-menu").navigation();
	//$(window).scroll(function(){
	//	if ($(window).scrollTop()>=$(".header-baner-title").height() + $(".header-baner-title").offset().top) {
	//		$('.know-more').attr('class', '').addClass('know-more');
	//		$('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').css('opacity', 0);
	//	}
	//	if ($(window).scrollTop()<=$(".header-baner-title").offset().top) {
	//		$('.know-more').addClass('animated fadeInUp');
	//		$('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').animate({
	//			opacity: 1,
	//		}, 1000);
	//	}
	//});
	//if ($(window).width() < 510) {
	//	$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//	$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//	$('.press-about-title').each(function(){
	//		$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//	});
	//	$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//	$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//}
	//else {
	//	$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\n/g, "<br>"));
	//	$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\n/g, "<br>"));
	//	$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br \/\>/g, "\n"));
	//	$('.press-about-title').each(function(){
	//		$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\n/g, "<br>"));
	//	});
	//	$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\n/g, "<br>"));
	//}
	//$(window).resize(function(){
	//	if ($(window).width() < 510) {
	//		$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//		$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//		$('.press-about-title').each(function(){
	//			$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//		});
	//		$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//		$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
	//		$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br \/\>/g, "\n"));
	//	}
	//	else {
	//		$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\n/g, "<br>"));
	//		$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\n/g, "<br>"));
	//		$('.press-about-title').each(function(){
	//			$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\n/g, "<br>"));
	//		});
	//		$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\n/g, "<br>"));
	//	}
	//});
	//jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_cart_product', function(response) {
	//	$('#basket-popup').append(response);
	//});
    //
    //
	//$('.logo-link').click(function(){
	//	$("html, body").stop().animate({
	//		scrollTop: 0
	//	});
	//	return false;
	//});

	//$(".delete-product").livequery(function() {
	//	$('.delete-product').click(function(){
	//		var product_id = jQuery(this).attr("data-product_id");
	//		jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=product_remove&product_id=' + product_id, function(data) {
	//			jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_product_count', function(response) {
	//				$('.product-counter').empty();
	//				$('.product-counter').append('Товаров в корзине: ' + response);
	//				if (response == 0) {
	//					jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_cart_product', function(response) {
	//						$('#basket-popup > *').remove();
	//						$('#basket-popup').append(response);
	//					});
	//					$('.basket-icon-active').css('display', 'none');
	//					$('.basket-icon').css('display', 'block');
	//					return false;
	//				}
	//				jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_total_cart_price', function(response1) {
	//					$('.total-product-price').empty();
	//					$('.total-product-price').append(response1);
	//				});
	//			});
	//		});
	//		var deletedProduct = $(this).parent();
	//		deletedProduct.slideToggle("slow");
	//		setTimeout(function(){
	//			deletedProduct.remove();
	//		}, 500);
    //
	//		return false;
	//	});
	//});
	$(function() {
		$('.color-div').click(function() {

			// $(this).closest('.col-md-7').find('.single_add_to_cart_button').attr('disabled','disabled');
			// $(this).closest('.col-md-7').find('.buy-in-click_act').attr('disabled','disabled');


			$(this).parent().parent().find('.color-div').removeClass('active');
			$(this).addClass('active');
			var id = $(this).attr('id');
			$(this).parent().parent().parent().parent().find('select#pa_color option[value="' + id + '"]').prop('selected', true).change();


			$('.product-' + $(this).attr('data-product') + ' .color-slider li').removeClass('active');
			$('.product-' + $(this).attr('data-product') + ' .phone-preview > img').css('display', 'none');
			$('.product-' + $(this).attr('data-product') + ' .phone-preview > img:eq('+($(this).attr('data-number') - 1)+')').fadeIn();
			$('li[number="product-' + $(this).attr('data-product') + '-' + $(this).attr('data-number') + '"]').addClass('active');


			if ($(window).height() < 491) {
				var next = $(this).parent().parent().next().attr('id');
				$("html, body").stop().animate({
					scrollTop: $('#' + next).offset().top - 70
				});
			}

            var prodId = $(this).closest('.col-md-7').find('.memory-div.active').attr('data-id');
            var param = $(this).closest('.col-md-7').find('.color-div.active').attr('data-param');
            // sendAjaxPrice(prodId, param);

			return false;
		});

		$('.memory-div').click(function() {

			// $(this).closest('.col-md-7').find('.single_add_to_cart_button').attr('disabled','disabled');
			// $(this).closest('.col-md-7').find('.buy-in-click_act').attr('disabled','disabled');

			$(this).parent().parent().find('.memory-div').removeClass('active');
			price = $(this).attr('data-price');
			oldprice = $(this).attr('data-oldprice');
			$(this).closest('section').find('.sale_p').text(price);
			$(this).closest('section').find('.main_p').text(oldprice);
			$(this).addClass('active');
			var id = $(this).attr('id');
			$(this).parent().parent().parent().parent().find('select#pa_memory option[value="' + id + '"]').prop('selected', true).change();

			//if ($("html").height() < 991) {
			//	var next = $(this).parent().parent().next().attr('id');
			//	$("html, body").stop().animate({
			//		scrollTop: $('#' + next).offset().top - 70
			//	});
			//}

            var prodId = $(this).closest('.col-md-7').find('.memory-div.active').attr('data-id');
            var param = $(this).closest('.col-md-7').find('.color-div.active').attr('data-param');
            // sendAjaxPrice(prodId, param);
		});

        var sendAjaxPrice = function(p1, p2) {
            $.ajax({
               type: 'POST',
               dataType: 'json',
               url: '/mail/getDinamic',
               data: {
                   prodId: p1,
                   param: p2
               },
               success: function(result){
                   $('.price_' + result.category).parent().find('.variation_id').val(result.prodParamId);
                   $('.price_' + result.category).find('.sale_p').html(result.price_2 + ' руб.');
                   $('.price_' + result.category).find('.main_p').html(result.price + ' руб.');
				   $('.price_' + result.category).parent().find('.single_add_to_cart_button').removeAttr('disabled','disabled');
				   $('.price_' + result.category).parent().find('.buy-in-click_act').removeAttr('disabled','disabled');
			   }
           });
        }

        $('.single_add_to_cart_button').click(function() {
            console.log($(this).parent().find('.prod_img_hidden').text());
			$(this).parent().find('.color-div').addClass('active');
            $.ajax({
                type: 'POST',
                dataType: 'html',
                url: '/mail/addToCart/',
                data: {
                    id: $(this).parent().find('.variation_id').val(),
                    price: ($(this).parent().parent().prev().find('ins > span').text()) ? $(this).parent().parent().prev().find('ins > span').text() : $(this).parent().find('.item_old_price').text(),
                    model: $(this).parent().find('.popup_model').text(),
                    img: $(this).parent().find('.prod_img_hidden').text(),
                    color: $(this).parent().parent().parent().find('.color-div.active p').text(),
                    memory: $(this).parent().parent().parent().find('.memory-div.active').text()
                },
                success: function(result){
                    $('#basket-popup').html(result);
                    $('.basket-icon').css({display: 'none'});
                    $('.basket-icon-active').css({display: 'block'});
                    $.fancybox.open([
                        {
                            href : '#add-popup'
                        }
                    ]);
                }
            });

            $(this).parent().find('.color-div').removeClass('active');
            var model = $('.buy-in-click-popup-model').text($(this).parent().find('.popup_model').text());
            var price = $(this).parent().parent().prev().find('ins > span').text();
            if (price == '') {
                var price = $(this).parent().parent().prev().find('span.amount').text();
            }
            $('.buy-in-click-popup-price').text(price);
            var img = $('.buy-in-click-popup-img').attr('src', $(this).parent().find('.prod_img_hidden').text());
            var color = $(this).parent().parent().parent().find('.color-div.active p').text();
            var memory = $(this).parent().parent().parent().find('.memory-div.active').attr('id');
            return false;
        });

		$('.diagonal-size').click(function() {
			$(this).parent().parent().find('.diagonal-size').removeClass('active');
			$(this).addClass('active');
			var id = $(this).attr('id');
			$(this).parent().parent().parent().parent().find('select#pa_diagonal option[value="' + id + '"]').prop('selected', true).change();
		});

		$('.buy-in-click_act').click(function() {
			// $('.buy-in-click-popup-model').text($(this).parent().find('span').text() + ' ' + $(this).closest('.phone-container').find('.color-div.active').data('param'));
			$('.buy-in-click-popup-model').text($(this).parent().find('.popup_model').text());
			$('input[name="phone-model"]').val($(this).parent().find('span').text());
			var price = $(this).parent().parent().prev().find('ins > span').text();
			if (price == '') {
				var price = $(this).parent().parent().prev().find('span.amount').text();
			}
			$('.buy-in-click-popup-price').text(price);
			$('input[name="phone-price"]').val(price);
			$('.buy-in-click-popup-img').attr('src', $(this).parent().find('.prod_img_hidden').text());
			$('input[name="phone-color"]').val($(this).parent().parent().parent().find('.color-div.active p').text());
			$('input[name="phone-memory"]').val($(this).parent().parent().parent().find('.memory-div.active').text());
			$('input[name="ip-model"]').val($(this).parent().parent().parent().find('.phone-model').text());
			//$('input[name="phone-diagonal"]').val($(this).parent().parent().parent().find('.diagonal-size.active').attr('id').replace('-', '.'));

			return true;
		});
	});

	$(function() {

		function futureDate(days) {
			var result = new Date(),
					rand = days[Math.floor(Math.random() * days.length)];

			result.setDate(result.getDate() + rand);

			return result;
		}

		$(".delivery-self-date").each(function() {
			var date = $.datepicker.formatDate('dd.mm.yy', futureDate([2]));
			$(this).text(date);
		});

		if($.fn.styler) {
			$(".form_select").styler({
				onSelectClosed: function() {
					$(":input", this).blur();
					//console.log($(":input", this));
				}
			});
			$("form").on("reset", function(){
				window.setTimeout($.proxy(function(){
					$(":input", this).trigger("refresh");
				}, this), 1);
			})
		}

		$("select.select-delivery").on("change.delivery", function() {
			var val =  $(this).val(),
					$cont = $(this).closest(".modal-popup"),
					$item = $(".delivery-" + val, $cont),
					$items = $(".delivery-to > *", $cont),
					$deliveryType = $(".delivery-type-name"),
					$deliveryTypeDate = $(".delivery-type-date"),
					$deliveryText = $(".form_field.date"),
					future = $.datepicker.formatDate('dd.mm.yy', futureDate([2])),
					hour = new Date().getHours();

			$(":input", $items).blur();

			if(val) {
				$item.show().siblings().hide();
			}
			else {
				$items.hide();
			}

			if(val === "self") {
				$deliveryType.text("самовывоза");
				$deliveryText.attr("data-date", future);
			}
			else if(val === "metro" || val === "address") {
				$deliveryType.text("доставки");
				$deliveryText.attr("data-date", "");


				if(hour < 19) {
					$deliveryTypeDate.text("сегодня");
				}
				else {
					$deliveryTypeDate.text("завтра");
				}
			}

		}).trigger("change.delivery");


		//$(".select-date").datepicker({
		//	//minDate: 0
		//	onSelect: function(dateText, inst) {
		//		$(this).blur();
		//	}
		//});
		//
		//$(window).on("scroll", function(){
		//	$(".select-date:visible").blur().datepicker( "hide" );
		//});

		$(".question_title").on("click", function(){
			var $cont = $(this).closest(".question"),
					$child = $(".question_content", $cont),
					speed = 150;

			if($cont.hasClass("opened")) {
				$child.slideUp(speed, function() {
					$cont.removeClass("opened");
				});
			}
			else {
				$cont.addClass("opened");
				$child.hide().slideDown(speed);
			}

			return false;
		})

		$('.callback_order_button').click(function(){
			$('#frmOrderCallback').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
		});

		$('.add_review_button').click(function(){
			$('#frmOrderReview').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
		});

		$('.change_btn').click(function(){
			$('#change_box').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
			return false;
		});

		$('.control_btn').click(function(){
			$('#control_box').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
			return false;
		});

		$('.complain_btn').click(function(){
			$('#complain_box').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
			return false;
		});


		$('.top_fade').hide();
		$('.top_fade').fadeIn(3000);

        //$(".top-menu, .bottom-menu").navigation();
        //$(window).scroll(function(){
        //    if ($(window).scrollTop()>=$(".header-baner-title").height() + $(".header-baner-title").offset().top) {
        //        $('.know-more').attr('class', '').addClass('know-more');
        //        $('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').css('opacity', 0);
        //    }
        //    if ($(window).scrollTop()<=$(".header-baner-title").offset().top) {
        //        $('.know-more').addClass('animated fadeInUp');
        //        $('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').animate({
        //            opacity: 1,
        //        }, 1000);
        //    }
        //});


	});




    // $('.block_3.list .color-div, .block_3.list .memory-div').on('click', function () {
    //     return g();
    // });

    $('.dd').easyDropDown({
        onChange: function(selected){
            $('#order_review .input-radio[name="payment_method"]').attr('checked', false);
            $('#order_review .input-radio[value="' + selected.value + '"]').prop('checked', true);
        }
    });
});

$(window).load(function(){
    var hash = window.location.hash;
    // var hash = document.URL.substr(document.URL.indexOf('#')+1);
    if($(hash).length > 0) {
        destination = $(hash).offset().top - 0;
        $('html, body').animate({ scrollTop: destination }, 1100);
        return false;
    }
});



// новый метод генериции выборки телефонов
function dinamPhones(attr) {
    $(function() {
        $('.color-div').on('click', function () {
            var colorId = $(this).data('param-color');
            var sizeId = $(this).parent().parent().parent().find('.memory-div.active').data('size-id');
            var category = $(this).parent().parent().parent().find('input[name="category_id"]').val();
            returnChanngePage(colorId, sizeId, category);
        });

        $('.memory-div').on('click', function () {
            var sizeId = $(this).data('size-id');
            var colorId = $(this).parent().parent().parent().find('.color-div.active').data('param-color');
            var category = $(this).parent().parent().parent().find('input[name="category_id"]').val();
            returnChanngePage(colorId, sizeId, category);
        });

        function returnChanngePage(colorId, sizeId, category) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'send333.php',
                data: {
                    category: category,
                    colorId: colorId,
                    sizeId: sizeId
                },
                success: function(result){
                    if(result.prodId) {
                        if (attr) {
                            window.location.href = '/' + result.sef + '/';
                        } else {
							$('#product-' + result.cat).find('.single_variation_wrap').fadeIn();
							$('.price_' + result.cat).fadeIn();

							$('#product-' + result.cat).find('.amount.main_p').text(result.price);
                            $('#product-' + result.cat).find('.amount.sale_p').text(result.price2);
                            $('#product-' + result.cat).find('.popup_model').text(result.name);
                            $('#product-' + result.cat).find('.prod_img_hidden').text('/uploads/params/sources/' + result.img);
                            $('#product-' + result.cat).find('.popup_model').text(result.product_name);
                            $('#product-' + result.cat).find('.variation_id').val(result.prodId);
                        }
                    } else {
						$('#product-' + category).find('.single_variation_wrap').fadeOut();
						$('.price_' + category).fadeOut();
						// $('.woocommerce-variation-add-to-cart').fadeOut();
					}
                }
            });
        }
    }());
};



