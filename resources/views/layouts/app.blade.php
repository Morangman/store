<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @meta_tags
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Apple iPhone - магазин оригинальной техники Apple</title>

    <!-- Fonts -->
    <link href="{{ asset('client/css/app.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ URL::asset('client/plugins/owlcarousel/assets/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('client/plugins/owlcarousel/assets/owl.theme.default.min.css') }}">
    <link rel="dns-prefetch" href="//oligator555.phonet.com.ua">

    {!! $settings->getAttribute('code_insert') !!}
</head>
<body>
    <div id="app">
        <main class="py-4">
            <div class="content">
            @yield('content')
            </div>
        </main>

        <div class="tl-call-catcher" onclick="return false">
        </div>

        <div ct-phonet="true"></div>

        <div id="emailSend" data-email="oaligator555@gmail.com"></div>
        <div ct-phonet="true"> 
            <div id="__telerWdTriggerContent" class="teler-wd__trigger  teler-wd__tooltip_show">
                <div class="teler-wd__tooltip teler-wd__tooltip_right" style="display: none;">
                    Перезвоним за 25 секунд
                </div>
                <div class="teler-wd__flipper_wrapper teler-wd__flipper_wrapper_hover">
                    <div class="teler-wd__flipper">
                        <div class="teler-wd__flipper-front">
                            <svg class="teler-wd__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                            </svg>
                        </div>
                        <div class="teler-wd__flipper-back">КНОПКА СВЯЗИ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>var telerWdWidgetId="9eb1b3e5-7c3c-4041-ab88-7c85c57cf350";var telerWdDomain="oligator555.phonet.com.ua";</script>
    <script src="//oligator555.phonet.com.ua/public/widget/call-catcher/lib-v3.js"></script>
    <script>var telerTrackerWidgetId="ea773b9b-2d4b-4835-9209-fef7eccdbf63";var telerTrackerDomain="oligator555.phonet.com.ua";</script>
    <script src="//oligator555.phonet.com.ua/public/widget/call-tracker/lib.js"></script>

    <script src="{{ URL::asset('common/js/routes.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('client/plugins/jquery95c495c4.js?ver12') }}"></script>
    <script src="{{ URL::asset('client/plugins/owlcarousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('client/js/client.js') }}"></script>
    <script>
        $(window).on('load', function () {
            var carousel = $('.owl-carousel');
            carousel.on({
            
                'initialized.owl.carousel': function () {
                    carousel.find('.owl-item').show();
                    carousel.find('.loading-placeholder').hide();
                }
            
            }).owlCarousel({
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

            var carousel = $('.owl-carousel2');
            carousel.on({

                'initialized.owl.carousel': function () {
                    carousel.find('.owl-item').show();
                    carousel.find('.loading-placeholder').hide();
                }

            }).owlCarousel({
                loop: true,
                margin:5,
                nav: false,
                navText: ['', ''],
                responsiveClass: true,
                responsive:{
                    0:{
                        items:3,
                        nav:true,
                        loop:true
                    },
                    600:{
                        items:3,
                        nav:false,
                        loop:true
                    },
                    1000:{
                        items:6,
                        nav:false,
                        loop:true
                    }
                },
                autoplay: true,
                stopOnHover : true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            });
            let $preloader = $('.cssload-container'),
                $spinner = $preloader.find('.cssload-torus');
            $spinner.fadeOut();
            $preloader.delay(350).fadeOut('slow');

            $( "#mobile-menu" ).click(() => {
                let x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            });

            $( "#mobile-menu-2" ).click(() => {
              if ($(".hide-mobile").is(":visible")) {
                $(".hide-mobile").hide();
              } else {
                $(".hide-mobile").show();
              }
                let x = document.getElementById("myLinks-2");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            });

            $("#myLinks ul li").click(() => {
                let x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            });

            $("#myLinks-2 ul li").click(() => {
                let x = document.getElementById("myLinks-2");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            });
            
            function openModal() {
                document.getElementById("callback-button").click();
            }

            setTimeout(function() {
                openModal();
            }, 70000);

            $(".rating").rate({
                max_value: 5,
                step_size: 1,
                selected_symbol_type: 'utf8_star',
                cursor: 'pointer',
            });
        });
    </script>
    @yield('scripts')
</body>
</html>
