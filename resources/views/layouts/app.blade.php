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
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link href="{{ asset('client/css/bootstrap.min92fa92fa.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/themes/site/css/woocommerce-layout92fa92fa.css?ver1131') }}" id="woocommerce-layout-css" media="all" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/themes/site/css/woocommerce-smallscreen92fa92fa.css?ver1131') }}" id="woocommerce-smallscreen-css" media="only screen and (max-width: 768px)" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/themes/site/css/woocommerce92fa92fa.css?ver1131') }}" id="woocommerce-general-css" media="all" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/themes/site/css/fonts92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/main92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/jquery-ui92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/media92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/animate92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/dropdown92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/themes/site/css/font-awesome.min92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/plugins/fancybox/jquery.fancybox92fa92fa.css?ver1131') }}" rel="stylesheet">
    <link href="{{ asset('client/css/default92fa92fa.css?ver1131') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/css/component92fa92fa.css?ver1131') }}" rel="stylesheet" type="text/css">
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
    <script src="{{ asset('client/js/client.js') }}"></script>
    <script>
        $(window).on('load', function () {
            var $preloader = $('.cssload-container'),
                $spinner = $preloader.find('.cssload-torus');
            $spinner.fadeOut();
            $preloader.delay(350).fadeOut('slow');
        });
    </script>
    @yield('scripts')
</body>
</html>
