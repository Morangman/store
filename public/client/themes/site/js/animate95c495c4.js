$(document).ready(function(){
	$('.catalogue-title, .phone-container-title, .guaranty-title, .press-about-title, .dream-title, .phone-preview .show-gallery, footer, .catalogue-desc').addClass('hidden-opacity').viewportChecker({
		offset: 0,
		classToAdd:'visible animated fadeInDown'
	});
	$('.catalogue-row > div, .phone-preview ~.col-md-7, .guaranty-text p, .press-about-img, .advantages-row > div, .advantages-box img, .bonus-img-row img, .press-about-text, .bonus button, .delivery-desc, .press-about-text-1, .press-about-text-2, #map, .dream-text button').addClass('hidden-opacity').viewportChecker({
		offset: 100,
		classToAdd:'visible animated fadeInUp'
	});
	$('.phone-preview > img, .products-ordering').viewportChecker({
		offset: 100,
		// classToAdd:'visible animated fadeInLeft'
	});
	$('.phone-preview button, .link_modal, .phone-preview .show-gallery').viewportChecker({
		offset: 100,
		classToAdd:'visible animated fadeInLeft'
	});
	$('.dream .dream-img, .guaranty .talon-img').addClass('hidden-opacity').viewportChecker({
		offset: 0,
		classToAdd:'visible animated fadeInRight'
	});
	$('.buy-buttons, .phone-preview ~.col-md-7').viewportChecker({
		offset: -50,
		// classToAdd:'visible animated fadeInRight'
	});
	$('.carousel-indicators li').click(function(){
		$(this).parent().parent().find('.buy-buttons, .phone-preview ~.col-md-7').addClass('visible animated fadeInRight full-visible');
		$(this).parent().parent().find('.phone-preview button, .phone-preview .show-gallery').addClass('visible animated full-visible fadeInLeft');
		$(this).parent().parent().find('.phone-preview img').addClass('visible animated fadeInleft full-visible');
	});

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin:10,
        nav : false,
        navText: ['', ''],
        responsive:{
            0:{
                items:1
            }
        },
        autoplay: true,
        stopOnHover : false,
		autoplayTimeout:5000,
		autoplayHoverPause:true
    });

	$('.owl-carousel2').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		navText: ['', ''],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
    });
});
