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

            /* Style navigation menu links */
            .topnav a {
                color: white;
                padding: 6px 12px;
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
    </div>

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

            $("#myLinks ul li").click(() => {
                let x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            });

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
