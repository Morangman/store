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
    <style type="text/css">
        .fancybox-margin {
            margin-right: 17px;
        }
        .main-text {
            position: absolute;
            top: 50px;
            width: 100%;
            color: #FFF;
        }
        .btn-min-block {
            min-width: 170px;
            line-height: 26px;
        }
        .btn-clear {
            color: #FFF;
            background-color: transparent;
            border-color: #FFF;
            margin-right: 15px;
        }
        .btn-clear:hover {
            color: #000;
            background-color: #FFF;
        }

        .topnav {
            display: none;
        }

        #liqpayForm input{
            border: 0px!important;
        }

        .forward-table p{
            margin-left: 20px;
            margin-right: 20px;
        }

        .mobile-phone {
          display: none;
          font-size: 17px;
        }

        .mobile-header_row {
          display: flex;
          justify-content: space-between;
        }

        #mobile-menu {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #2898d2;
          background: linear-gradient(to top, #2797d2, #51b8ec);
          -webkit-transition: all 0.5s ease;
          -moz-transition: all 0.5s ease;
          -ms-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
          transition: all 0.5s ease;
          color: #fff;
          border: none;
          border-radius: 4px;
        }

        #mobile-menu i{
          margin-right: 5px;
        }
        
        #myLinks-2 {
          display: none;
        }

        @media only screen and (max-width: 768px) {
            .topnav {
                display: block;
                overflow: hidden;
                background-color: #333;
                position: relative;
            }

            /* Hide the links inside the navigation menu (except for logo/home) */
            .topnav #myLinks {
                display: none;
            }

            .header-info {
              display: none;
            }

            .mobile-phone {
              display: block;
            }

            /* Style navigation menu links */
            .topnav a {
                color: white;
                padding: 5px 12px;
                text-decoration: none;
                font-size: 17px;
                display: block;
            }

            /* Style the hamburger menu */
            .topnav a.icon {
                display: block;
                right: 0;
                top: 0;
            }

            /* Add a grey background color on mouse-over */
            .topnav a:hover {
                background-color: #ddd;
                color: black;
            }

            .buy-buttons{
                padding-top: 0;
            }
        }

        @media (max-width:768px) {
            #__telerWdTriggerContent .teler-wd__tooltip_right{right:auto!important;left:24px!important}
            #__telerWdTriggerContent .teler-wd__tooltip_right:after{right:auto!important;left:24px!important}
            #__telerWdTriggerContent{right:inherit;left:0;bottom:80px}
        }

        .teler-wd__trigger{
          letter-spacing: normal !important;
          background-color: transparent !important;
          cursor: pointer !important;
          height: 125px !important;
          position: fixed !important;
          transition: visibility 0.5s ease 0s,
          opacity 0.5s ease 0s !important;
          visibility: visible !important;
          opacity: 1! important;
          width: 125px !important;
          /*z-index: 4000020 !important;*/
          z-index: 2147483645 !important;
          box-sizing:content-box !important;
          transform: none !important;
          bottom:3%;right:3%;left:auto;
        }
        /*flipper animation*/
        .teler-wd__flipper_wrapper{
          background-color: rgba(33,150,243, 1) !important;
          height: 75px !important;
          position: absolute !important;
          width: 75px !important;
          top:25px!important;
          left: 25px!important;
          border: 2px solid transparent !important;
          border-radius: 100% !important;
          box-sizing:content-box!important;
          -webkit-perspective: 1000!important;
          -moz-perspective: 1000!important;
          -ms-perspective: 1000!important;
          perspective: 1000!important;
          -ms-transform: perspective(1000px)!important;
          -moz-transform: perspective(1000px)!important;
          -ms-transform-style: preserve-3d!important;
          z-index: 3!important;
          box-shadow: 0 0 2px rgba(0,0,0,.14),0 2px 2px rgba(0,0,0,.28)!important;
        }
        .teler-wd__flipper_wrapper:hover .teler-wd__flipper-back,
        .teler-wd__flipper_wrapper_hover .teler-wd__flipper-back{
          -webkit-transform: rotateY(0deg)!important;
          -moz-transform: rotateY(0deg)!important;
          -o-transform: rotateY(0deg)!important;
          -ms-transform: rotateY(0deg)!important;
          transform: rotateY(0deg)!important;
        }
        .teler-wd__flipper_wrapper:hover{
          box-shadow: 0 0 4px rgba(0,0,0,.16),0 4px 4px rgba(0,0,0,.32)!important;
          -webkit-transition: box-shadow 150ms cubic-bezier(0,0,.2,1)!important;
          transition: box-shadow 150ms cubic-bezier(0,0,.2,1)!important;
        }
        
        .teler-wd__flipper_wrapper:hover .teler-wd__flipper-front,
        .teler-wd__flipper_wrapper_hover .teler-wd__flipper-front{
          -webkit-transform: rotateY(180deg)!important;
          -moz-transform: rotateY(180deg)!important;
          -o-transform: rotateY(180deg)!important;
          transform: rotateY(180deg)!important;
        }
        .teler-wd__flipper,
        .teler-wd__flipper-front,
        .teler-wd__flipper-back{
          position: absolute !important;
          height: 75px !important;
          width: 75px !important;
          background-repeat: no-repeat  !important;
          background-position: center !important;
          transform-origin: 50% 50% 0!important;
        }
        .teler-wd__flipper{
          -webkit-transition: 0.6s!important;
          -webkit-transform-style: preserve-3d!important;
          -ms-transition: 0.6s!important;
        
          -moz-transition: 0.6s!important;
          -moz-transform: perspective(1000px)!important;
          -moz-transform-style: preserve-3d!important;
          -ms-transform-style: preserve-3d!important;
        
          transition: 0.6s!important;
          transform-style: preserve-3d!important;
        
          position: relative!important;
        }
        .teler-wd__flipper-front,
        .teler-wd__flipper-back{
          background-color: rgba(33,150,243, 1) !important;
          border-radius: 100% !important;
          -webkit-backface-visibility: hidden!important;
          -moz-backface-visibility: hidden!important;
          -ms-backface-visibility: hidden!important;
          backface-visibility: hidden!important;
        
          -webkit-transition: 0.6s!important;
          -webkit-transform-style: preserve-3d!important;
          -webkit-transform: rotateY(0deg)!important;
        
          -moz-transition: 0.6s!important;
          -moz-transform-style: preserve-3d!important;
          -moz-transform: rotateY(0deg)!important;
        
          -o-transition: 0.6s!important;
          -o-transform-style: preserve-3d!important;
          -o-transform: rotateY(0deg)!important;
        
          -ms-transition: 0.6s!important;
          -ms-transform-style: preserve-3d!important;
          -ms-transform: rotateY(0deg)!important;
        
          transition: 0.6s!important;
          transform-style: preserve-3d!important;
          transform: rotateY(0deg)!important;
        
          position: absolute!important;
          top: 0!important;
          left: 0!important;
          box-sizing: border-box!important;
        }
        .teler-wd__flipper-front {
          -webkit-transform: rotateY(0deg)!important;
          -ms-transform: rotateY(0deg)!important;
          z-index: 2!important;
          padding: 14px!important;
          fill:rgba(255,255,255,1)!important;
        }
        .teler-wd__icon {
          height: 48px!important;
          width: 48px!important;
        }
        .teler-wd__flipper-back{
          text-align: center!important;
          padding: 0!important;
          display: flex!important;
          display: -webkit-flex!important;
          align-items: center!important;
          -webkit-align-items: center!important;
          justify-content: center!important;
          -webkit-justify-content: center!important;
          -webkit-transform: rotateY(-180deg)!important;
          -moz-transform: rotateY(-180deg)!important;
          -o-transform: rotateY(-180deg)!important;
          -ms-transform: rotateY(-180deg)!important;
          transform: rotateY(-180deg)!important;
          font:normal 300 16px Roboto, sans-serif !important;
          font-size:14px!important;
          line-height: 18px!important;
          color:rgba(255,255,255,1)!important;
        }
        .teler-wd__tooltip {
          display: block!important;
          opacity: 0!important;
          visibility: hidden!important;
          height: 36px!important;
          position: absolute!important;
          width: auto!important;
          top: -40px!important;
          left: 50px!important;
          margin: 0!important;
          padding: 0 14px!important;
          border: 0!important;
          white-space: nowrap!important;
          background-color: rgba(33,150,243, 1)!important;
          color: rgba(255,255,255,1)!important;
          transition: all 1s!important;
          font:normal 300 16px Roboto, sans-serif !important;
          line-height: 36px!important;
          font-size: 14px!important;
          border-radius: 4px!important;
        }
        .teler-wd__tooltip_right {
          left: auto!important;
          right: 45px!important;
        }
        .teler-wd__tooltip:after {
          content: '' !important;
          position: absolute !important;
          top: 35px !important;
          left: 15px !important;
          width: 0 !important;
          height: 0 !important;
          border-top: 12px solid rgba(33,150,243, 1) !important;
          border-right: 12px solid transparent !important;
        }
        .teler-wd__tooltip.teler-wd__tooltip_right:after {
          content: '' !important;
          position: absolute !important;
          top: 35px !important;
          right: 13px !important;
          left: auto !important;
          width: 0 !important;
          height: 0 !important;
          border-top: 12px solid rgba(33,150,243, 1) !important;
          border-left: 12px solid transparent !important;
          border-right: 0 !important;
        }
        .teler-wd__tooltip_show .teler-wd__tooltip {
          visibility: visible!important;
          opacity: 1!important;
        }
        .teler-wd__stepper_hidden {
          display: none!important;
        }
        .teler-wd__timer_hidden {
          display: none!important;
        }
        .teler-wd__trigger_hidden {
          opacity: 0!important;
          visibility: hidden!important;
        }
        .teler-wd__svg {
          fill:rgba(255,255,255,1) !important;
        }
        @media (min-width: 1px) and (max-width: 520px) {
          .teler-wd__trigger {
            height: 100px !important;
            width: 100px !important;
          }
          .teler-wd__flipper,
          .teler-wd__flipper-front,
          .teler-wd__flipper-back,
          .teler-wd__flipper_wrapper {
            height: 60px !important;
            width: 60px !important;
          }
          .teler-wd__flipper-front {
            padding: 10px!important;
          }
          .teler-wd__flipper-back {
            font-size: 12px!important;
            line-height: 16px!important;
          }
          .teler-wd__icon {
            height: 40px!important;
            width: 40px!important;
          }
          .teler-wd__tooltip {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .teler-wd__trigger {
            z-index: 4000020 !important;
          }
        }
        @media (max-width: 768px) {
          .teler-wd__trigger {
            z-index: 4000020 !important;
          }
        }
    </style>

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
    <script src="{{ asset('client/themes/site/js/jquery-ui92fa92fa.js?ver1131') }}"></script>
    <script src="{{ URL::asset('client/plugins/owlcarousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('client/js/client.js') }}"></script>
    <script>
        $(window).on('load', function () {
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
