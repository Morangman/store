/*Jnload animate*/
$(window).on('load', function () {




  	// setTimeout(function(){
	// $('.header-baner-title-head').animate({
     //  opacity: 1,
    // }, 500);
	// },500);
	// setTimeout(function(){
	// 	$('.header-baner-title-desc, .header-baner-title').animate({
     //  opacity: 1,
    // }, 500);
	// },500);
	// setTimeout(function(){
	//     $('.know-more').removeClass('hidden-div').addClass('visible-div').viewportChecker({
	// 		offset: -300,
	// 		classToAdd:'animated fadeInUp'
	// 	});
	// },1000);
	// setTimeout(function(){
	// 	$('#map .ymaps-2-1-34-inner-panes .ymaps-2-1-34-places-pane .ymaps-2-1-34-svg-icon').css({'background-image': 'url(img/map-icon.png)','background-size': '64px 76px', 'width': '64px', 'height': '76px', 'margin-top': '-45px'});
	// }, 4000);
	/*if ($(window).width() < 768) {
	 var url = "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.js";
    $.getScript( url, function() {
      $(".popup.gallery").on( "swipeleft", function(){
        $(this).carousel('next');
        $(this).find(".item.active img")[0].click();
      });
      $(".popup.gallery").on( "swiperight", function(){
        $(this).carousel('prev');
        $(this).find(".item.active img")[0].click();
      });
    });
  }*/
});

$(document).ready(function() {
  /*Cart*/
  $('form[name="checkout"]').submit(function(){
    var flagChekout = false;
    $('form[name="checkout"]').find('input[name="billing_first_name"], textarea').each(function(){
      if ($(this).val() == "") {
        flagChekout = true;
        var input = $(this);
        $(this).removeClass('not-valid shake animated');
        setTimeout(function() {
            input.addClass('not-valid shake animated');
        },0.01);
     }
    });

    if ($('input[name="billing_phone"]').length === 0 || $('input[name="billing_phone"]').length === 0) {
      flagChekout = true;
      $('input[name="billing_phone"]').removeClass('not-valid shake animated');
      setTimeout(function() {
          $('input[name="billing_phone"]').addClass('not-valid shake animated');
      },0.01);
    }

    if (flagChekout) return false;

    products = [];

    $('.product-row').each(function() {
      $(this).find('.product-name-text').text();
      var product = $(this).find('.product-name-text').text() +
                    $(this).find('.product-name-descr').html().replace('<br>', ' ') +
                    $(this).find('.quantity > input').val() + ' ' +
                    $(this).find('.product-price span').text();
      products.push(product);
    });

    console.log(products);
    data = {
      name: $('input[name="billing_first_name"]').val(),
      phone: $('input[name="billing_phone"]').val(),
      address: $('textarea[name="billing_address_1"]').val(),
      time: $('input[name="billing_new_fild11"]:checked').val(),
      total: $('.products .total-product-price .amount').text(),
      date: $('select[name="billing_new_fild13"]').val(),
      products: products,
    };





    //return false;
  });
  $('.header-baner').css('height',$(window).width()/1.6);
  $('input[type="text"], textarea').keyup(function(){
    if ($(this).val() != "")
      $(this).removeClass('not-valid');
    else
      $(this).addClass('not-valid');
  });
  var i = 1;
  setTimeout(function(){
  $('.products.container .product-row').each(function(){
    var product = $(this);
    setTimeout(function(){
      product.addClass('visible animated fadeInLeft').fadeIn(200);
    },500*i);
    i++;
  });
  },800);

  $(".minus").click(function(){
    var new_val = parseInt($(this).next().find('input').val());
    if (new_val > 1) {
        $(this).next().find('input[name="qty"]').val(--new_val).change();
    }
//  $.ajax({
//      type: 'POST',
//      dataType: 'json',
//      url: '/mail/minus',
//      data: {
//          new_val: new_val,
//          key: $(this).parent().find('input[name="c_key"]').val()
//      },
//      success: function(result){
//          $('.products-total .total-product-price .amount').text(result.price);
//          $('.product-counter').text('Товаров в корзине: ' + result.count);
//          var dlvr  = $('select[name="delivery"]').val();
//          if(dlvr == 'flat_rate') {
//              var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
//          }else {
//              var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
//          }
//          $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
//
//          //function intervalReload()
//          //{
//          //    window.location.reload();
//          //}
//          //setInterval(intervalReload, 1000);
//      }
//  });
return false;
  });

  $(".plus").click(function(){
    var new_val = parseInt($(this).prev().find('input').val());
    $(this).prev().find('input[name="qty"]').val(++new_val).change();
  //
  //    $.ajax({
  //        type: 'POST',
  //        dataType: 'json',
  //        url: '/mail/plus',
  //        data: {
  //            new_val: new_val,
  //            key: $(this).parent().find('input[name="c_key"]').val()
  //        },
  //        success: function(result){
  //            $('.products-total .total-product-price .amount').text(result.price);
  //            $('.product-counter').text('Товаров в корзине: ' + result.count);
  //            var dlvr  = $('select[name="delivery"]').val();
  //            if(dlvr == 'flat_rate') {
  //                var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
  //            }else {
  //                var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
  //            }
  //            $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
  //
  //            //function intervalReload()
  //            //{
  //            //    window.location.reload();
  //            //}
  //            //setInterval(intervalReload, 1000);
  //        }
  //    });
    return false;
  });

    $("input[name=qty]").change(function() {
        //var new_val = parseInt($(this).prev().find('input').val());
        var newVal = $(this).val();
/*

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'send.php',
            data: {
                new_val: newVal,
                key: $(this).parent().find('input[name="c_key"]').val()
            },
            success: function(result){
                $('.products-total .total-product-price .amount').text(result.price);
                $('.product-counter').text('Товаров в корзине: ' + result.count);
                var dlvr  = $('select[name="delivery"]').val();
                if(dlvr == 'flat_rate') {
                    var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
                }else {
                    var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
                }
                $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
                $('.total-product-price .amount').text(result.price);



                //function intervalReload()
                //{
                //    window.location.reload();
                //}
                //setInterval(intervalReload, 1000);
            }
        });

        $.ajax({
            type: 'POST',
            dataType: 'html',
            url: 'send.php',
            success: function(data){
                $('.inner_b_p').empty().html(data);
            }
        })*/
        return false;
    });

    function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
        //
        // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +	 bugfix by: Michael White (http://crestidg.com)

        var i, j, kw, kd, km;

        // input sanitation & defaults
        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 2;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = ".";
        }

        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

        if( (j = i.length) > 3 ){
            j = j % 3;
        } else{
            j = 0;
        }

        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


        return km + kw + kd;
    }

  $('input[name=phone], input[name="billing_phone"], input[name="phone2"]').inputmask("+38 (999) 999-99-99");
  /*End Cart*/

  $('.header-baner .know-more, .dream-text button').click(function(){
    $("html, body").stop().animate({
      scrollTop: $('#catalogue').offset().top - 53
    });
  });
 var productI = 1;
$('.basket-icon, .basket-icon-active').click(function(){
  if ( $(window).width() < 920) {
      if ($('.top-menu').is(':visible')) {
        $('.toggle-menu').click();
      }
  }
  if ($('#basket-popup').css('display') == 'none') {
    $('#basket-popup').fadeIn();
    $('#basket-popup').css('top', 60);
    $('#basket-popup .product-row').each(function(){
      var product = $(this);
      setTimeout(function(){
        product.addClass('visible animated fadeInRight').fadeIn(200);
      },300*productI);
      productI++;
    });
    setTimeout(function(){
      $('.total-product-price, .blue-button').addClass('visible animated fadeInRight').fadeIn(200);
    },300*productI++);

    $(this).addClass('active');
  }
  else {
    $('#basket-popup').hide('slow');
    $(this).removeClass('active');
  }
  return false;
 });
 $(document).mouseup(function (e)
  {
      var container = $("#basket-popup");
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.fadeOut(400);
      }
  });
  $('.carousel-indicators li:first-child').addClass('active');
  $('.carousel-indicators.color-slider li').click(function(){
    /*$(this).parent().parent().find('.carousel-indicators li').removeClass('active');
    $(this).parent().parent().find('.phone-preview img').css('display', 'none');
    $(this).parent().parent().find('.phone-preview img:eq('+$( this ).index()+')').fadeIn();*/
    $(this).parent().parent().find('.color-div:eq('+$( this ).index()+')').click();
    $(this).addClass('active');
    return false;
  });
  /*fancybox with white bg*/
  $(".fancybox-2").fancybox({
    helpers : {
     overlay: {
      opacity: 1,
      css: {'background': '#fff'}
     },
     custom: {}
    },
    tpl : {
     closeBtn : '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
    },
    openMethod : 'dropIn',
    openSpeed : 300,
    closeMethod : 'dropOut',
    closeSpeed : 300,
    margin: [0, 0, 0, 0],
    beforeShow: function(){
      $('header').slideToggle(200);
    },
    beforeClose: function(){
      $('header').slideToggle(200);
    },
  });
  /*fancybox extentionx*/
  (function ($, F) {
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.left = (parseInt(endPos.left, 10) - 200) + 'px';

        F.wrap.css(endPos).show().animate({
            left: '+=200px'
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            left: '-=500px'
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };

  }(jQuery, jQuery.fancybox));

  $.fancybox.helpers.custom = {
    defaults: {
        position: 'top',
        space: 0
    },
    onUpdate: function(opts, obj) {
        this.setPosition(opts, obj);
    },
    afterShow: function(opts, obj) {
        this.setPosition(opts, obj);
    },
    setPosition: function(opts, obj) {
        $('.fancybox-close').css({'top': '30px', 'right': '10px'});
    }
  };
  $(".fancybox-grey").fancybox({
      helpers : {
        overlay : {
            locked: false
        },
      },
      tpl : {
       closeBtn : '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
      },
      openMethod : 'dropIn',
      minHeight: 830,
      fitToView   : false,
      fixed: false,
      openSpeed : 200,
      closeMethod : 'dropOut',
      closeSpeed : 100,
      beforeShow: function(){
        $('header').slideToggle(200);
        $('.fancybox-wrap').addClass('fancybox-wrap22');
        if ($(window).width() < 480) {
          $('.fancybox-inner').addClass('fancybox-inner-mobile');
          $('.fancybox-wrap').addClass('fancybox-wrap-left');
        }
      },
      beforeClose: function(){
        $('header').slideToggle(200);
      }
  });
  /*fancybox with grey bg*/
  if ($(window).width() > 990) {
  $(".fancybox").fancybox({
     openMethod : 'dropIn',
      openSpeed : 200,

      closeMethod : 'dropOut',
      closeSpeed : 100,
      beforeShow: function(){
        $('header').slideToggle(200);
      },
      beforeClose: function(){
        $('header').slideToggle(200);
      },
  });
  }
  else {
    $(".fancybox").fancybox({
      helpers : {
       overlay: {
        opacity: 1,
        css: {'background': '#fff'}
       },
       custom: {}
      },
      tpl : {
       closeBtn : '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
      },
      openMethod : 'dropIn',
      openSpeed : 300,
      closeMethod : 'dropOut',
      closeSpeed : 300,
      margin: [0, 0, 0, 0],
      beforeShow: function(){
        $('header').slideToggle(200);
      },
      beforeClose: function(){
        $('header').slideToggle(200);
      }
    });
  }
  /*gallery scripts*/
  $('.gallery-desktop-photo-container').click(function(){
    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').remove();
    if ($(this)[0].hasAttribute('large-img')) {
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').append('<img>');
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').find('img').attr('src', $(this).attr('large-img'));
    }
    else if ($(this)[0].hasAttribute('large-video')) {
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').append('<iframe style="display:none; max-width: 500px; width: 90%; height: 300px" src="'+$(this).attr('large-video')+'" frameborder="0" allowfullscreen></iframe>');
    }
    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').css('display', 'none');
    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').addClass('visible animated fadeInLeft').fadeIn();
  });

  /*$('.gallery-mobile-photos.carousel .gallery-mobile-photo-container').click(function(){
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').remove();
    if ($(this)[0].hasAttribute('large-img')) {
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').append($(this).html());
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').find('img').attr('src', $(this).attr('large-img'));
    }
    else if ($(this)[0].hasAttribute('large-video')) {
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').append('<iframe style="max-width: 500px; width: 90%; height: 250px; margin-bottom: 30px" src="'+$(this).attr('large-video')+'" frameborder="0" allowfullscreen></iframe>');
    }
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').css('display', 'none');
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').addClass('visible animated fadeInLeft').fadeIn();
  });*/
	/*top menu sctipt*/
	$('.toggle-menu').click(function(){
	 $(".sandwich").toggleClass("active");
		if ($('.top-menu').is(':visible')) {
		  $('body, html').css('position', 'relative');
			$('.top-menu').fadeOut();
			$('.toggle-menu p').text('меню');
			setTimeout(function(){
			$('.top-menu').css('margin-left', '0');
			},300);
			$('header').animate({
			    height: "64px"
			  }, 300 );
			  $('.toggle-menu p').css('margin-top', '-11px');
			  $('.sandwich').css('margin-top', '0px');
		}
		else {
		  $('body, html').css('position', 'fixed');
			$('.top-menu').fadeIn();
			$('.toggle-menu p').text('закрыть');
			$('header').animate({
			    height: $(window).height()
			  }, 300 );
			$('.sandwich').css('margin-top', '5px');
			if ($(window).width() > 990)
			$('.top-menu').css('margin-left', '-20%');
		}
		return false;
	});
	$('.header-baner').height($(window).height());


    $('.top-menu a').click(function(){
		if ($('.top-menu').is(':visible') && $(window).width() < 920) {
			$('.toggle-menu').click();
			// $(".sandwich").toggleClass("active");
		}
	});

	/*$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});*/
  /*top video paralax*/
  $(window).scroll(function(){
    if ($(window).scrollTop() < 900)
      $('.header-baner video').css('top', $(window).scrollTop());
  });
  /*top menu hidden*/
	$(window).resize(function(){
		if ($(this).width() > 920) {
			$('.top-menu').css('dislay','inline-block');
			$('.top-menu').css('margin-left', '0');
		}
	});

	$('.header-baner .know-more').click(function(){
    $("html, body").stop().animate({
      scrollTop: $('#catalogue').offset().top - 53
    });
  });

  $(".select-phone, .select-phone2").click(function() {
      target = $(this).attr('data-ttarget');
      $('html,body').stop().animate({ scrollTop: $('#' + target).offset().top - 51}, 800);
  });

	$('.characteristics').click(function() {
	 $('.characteristics-content').empty();
	 $('.characteristics-content').append($(this).next().html());
	});

	$('.delivery-kit').click(function() {
   $('#package-popup .package-phone img').attr('src', $(this).next().text());
  });
  $("#buy-in-click-popup2 form").submit(function(e) {
    var flagChekout = false;
    e.preventDefault();
    this_form = $('#buy-in-click-popup2');
    if ($('#buy-in-click-popup2 form').find('input[name="name"]').length === 0) {
        flagChekout = true;
        var input = $('#buy-in-click-popup2 form').find('input[name="name"]');
        input.removeClass('not-valid shake animated');
        setTimeout(function() {
            input.addClass('not-valid shake animated');
        },0.01);
     }
    if ($('#buy-in-click-popup2 form input[name="phone"]').length === 0) {
      flagChekout = true;
      $('#buy-in-click-popup2 form input[name="phone"]').removeClass('not-valid shake animated');
      setTimeout(function() {
          $('#buy-in-click-popup2 form input[name="phone"]').addClass('not-valid shake animated');
      },0.01);
    }
    if (flagChekout) return false;
      axios.post(Router.route('call', {
          name: this_form.find('input[name=name]').val(),
          phone: this_form.find('input[name=phone]').val(),
      }))
          .then((data) => {
              $.fancybox.close();
              $.fancybox({
                  'autoScale': true,
                  'transitionIn': 'fade',
                  'transitionOut': 'fade',
                  'content': '<p class="thanks_text">Спасибо за Ваш Заказ!<p>'
              });

              setInterval(function() {
                  window.location.reload(true);
              }, 3000);
          })
          .catch(function (error) {
              $('#buy-in-click-popup2 form').html(error.responseText);
              setInterval(function() {
                  window.location.reload(true);
              }, 3000);
          });

    return false;
  });
  $("#buy-in-click-popup form").submit(function(e) {
    var flagChekout = false;
    e.preventDefault();
    this_form = $('#buy-in-click-popup');
    if ($('#buy-in-click-popup form').find('input[name="name"]').length === 0) {
        flagChekout = true;
        var input = $('#buy-in-click-popup form').find('input[name="name"]');
        input.removeClass('not-valid shake animated');
        setTimeout(function() {
            input.addClass('not-valid shake animated');
        },0.01);
     }
    if (flagChekout) return false;
                //Отправка данных на сервер
    			var data = new FormData();
          data.append('name',this_form.find('input[name=name]').val());
          data.append('phone',this_form.find('input[name=phone]').val());
      data.append('address',this_form.find('input[name=address]').val());
      data.append('ip-model',this_form.find('input[name=ip-model]').val());
          data.append('phone-price',$('#ip_newprice').text());
          data.append('phone-old-price',$('#ip_oldprice').text());
          data.append('phone-color',$('#ip_color').text());
          data.append('phone-memory',$('#ip_memory').text());
          data.append('formData',this_form.find('input[name=formData]').val());
          data.append('ip_model',$('#ip_model').text());



    			//отправка через аякс
    		// 	$.ajax({
    		// 		url: 'send.php',
    		// 		data: data,
    		// 		processData: false,
    		// 		contentType: false,
    		// 		type: 'POST',
    		// 		dataType:'json',
    		// 		success: function(dataItem){
            //   $('#buy-in-click-popup form').html(dataItem);
            //   setInterval(function() {
            //     window.location.reload(true);
            //   }, 3000);
    		// 		},
            // error: function (error) {
            //   $('#buy-in-click-popup form').html(error.responseText);
            //   setInterval(function() {
            //     window.location.reload(true);
            //   }, 3000);
            // }
    		// 	});


    return false;
  });

    $("#review form").submit(function() {
        this_form = $(this);
        var flagChekout = false;
        var flagChekout2 = false;
        if ($('#review form').find('input[name="name"]').val() == "") {
            flagChekout = true;
            var input = $('#review form').find('input[name="name"]');
            input.removeClass('not-valid shake animated');
            setTimeout(function() {
                input.addClass('not-valid shake animated');
            },0.01);
        }
        if ($('#review form textarea[name="text"]').val().length == 0) {
            flagChekout2 = true;
            $('#review form textarea[name="text"]').removeClass('not-valid shake animated');
            setTimeout(function() {
                $('#review form textarea[name="text"]').addClass('not-valid shake animated');
            },0.01);
        }

        if (flagChekout || flagChekout2) {
            return false;
        }

        axios.post(Router.route('comment', {
            name: this_form.find('input[name=name]').val(),
            text: this_form.find('textarea[name=text]').val(),
        }))
            .then((data) => {
                $.fancybox.close();
                $.fancybox({
                    'autoScale': true,
                    'transitionIn': 'fade',
                    'transitionOut': 'fade',
                    'content': '<p class="thanks_text">Спасибо за Ваш Отзыв!<p>'
                });

                setInterval(function() {
                    window.location.reload(true);
                }, 3000);
            })
            .catch(function (error) {
                $('#review form').html(error.responseText);
                setInterval(function() {
                    window.location.reload(true);
                }, 3000);
            });

        return false;
    });


  $("#present-popup form").submit(function() {
    var flagChekout = false;
    if ($('#present-popup form').find('input[name="name"]').val() == "") {
        flagChekout = true;
        var input = $('#present-popup form').find('input[name="name"]');
        input.removeClass('not-valid shake animated');
        setTimeout(function() {
            input.addClass('not-valid shake animated');
        },0.01);
     }
    if ($('#present-popup form input[name="phone"]').val().length == 0 || $('#present-popup form input[name="phone"]').val().match( /\d/g ).length < 11) {
      flagChekout = true;
      $('#present-popup form input[name="phone"]').removeClass('not-valid shake animated');
      setTimeout(function() {
          $('#present-popup form input[name="phone"]').addClass('not-valid shake animated');
      },0.01);
    }
    if (flagChekout) return false;

    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function() {
      location.href = ''
    });
    return false;
  });
  function validate_email(target) {
      target.removeClass('not-valid shake animated');
      if($(target).val() != '') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if(pattern.test($(target).val())){
              //
          } else {
              setTimeout(function() {
                target.addClass('not-valid shake animated');
            },0.01);
          }
      } else {
          setTimeout(function() {
              target.addClass('not-valid shake animated');
          },0.01);
      }
  }

   function validate_error(element) {
    element.removeClass('not-valid shake animated');
      setTimeout(function() {
          element.addClass('not-valid shake animated');
      },0.01);
   }
  $("#contacts-popup form").submit(function() {
    var flagChekout = false;
    if ($('#contacts-popup form').find('input[name="name"]').val() == "") {
        flagChekout = true;
        validate_error($('#contacts-popup form').find('input[name="name"]'));
     }
     if ($('#contacts-popup form').find('textarea[name="issue"]').val() == "") {
        flagChekout = true;
        validate_error($('#contacts-popup form').find('textarea[name="issue"]'));
     }
    validate_email($('#contacts-popup form').find('input[name="email"]'));
    if ($('#contacts-popup form input[name="phone"]').val().length == 0 || $('#contacts-popup form input[name="phone"]').val().match( /\d/g ).length < 11) {
      flagChekout = true;
      validate_error($('#contacts-popup form input[name="phone"]'));
    }
    if($(this).find("input[name='imei']").val() != '') {
        var pattern = /^\d+$/;
        if(pattern.test($(this).find("input[name='imei']").val())) {
            //imei_input.removeClass("error");
        } else {
            flagChekout = true;
            validate_error($(this).find("input[name='imei']"));
        }
    } else {
        flagChekout = true;
        validate_error($(this).find("input[name='imei']"));
    }
    if ($(this).find("input[name=date]").val().trim().length < 3) {
        flagChekout = true;
        validate_error($(this).find("input[name=date]"));
    }
    else $(this).find("input[name=date]").removeClass('not-valid shake animated');
    if ($(this).find("input[name=item_name]").val().trim().length < 3) {
        flagChekout = true;
        validate_error($(this).find("input[name=item_name]"));
    }
    if ($(this).find("select[name=open]").val().trim().length < 1) {
        flagChekout = true;
        validate_error($(this).find(".selected"));
    }
    else $(this).find(".selected").removeClass('not-valid shake animated');
    if ($(this).find("input[name=serial]").val().trim().length < 3) {
        flagChekout = true;
        validate_error($(this).find("input[name=serial]"));
    }
    if (!(parseInt($("input[name=count]").val().trim()) > 0)) {
        flagChekout = true;
        validate_error($(this).find("input[name=count]"));
    }
    if ($(this).find("textarea[name=issue]").val().trim().length < 3) {
        flagChekout = true;
        validate_error($(this).find("textarea[name=issue]"));
    }
    if ($(this).find("textarea[name=defects]").val().trim().length < 3) {
        flagChekout = true;
        validate_error($(this).find("textarea[name=defects]"));
    }
    if (flagChekout) return false;
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function(data) {
      console.log(data);
      $.fancybox.close();
      setTimeout(function() {
        alert("Спасибо за заявку!");
      }, 500);
    });
    return false;
  });
    $(function() {
        $('#add-popup .add-basket').click(function() {
            window.location.href = "";
        });
    });
});
