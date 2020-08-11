const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.copyDirectory('resources/client', 'public/client');

mix.js([
        'resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js',
        'resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js',
        'resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js',
        'resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js',
        'resources/client/themes/site/js/vch95c495c4.js',
        'resources/client/themes/site/js/mask95c495c4.js',
        'resources/client/plugins/auxiliary-rater/rater.min.js',
        'resources/client/themes/site/js/common95c495c4.js',
        'resources/client/plugins/dropdown/dropdown95c495c4.js',
        'resources/client/themes/site/js/jquery.livequery.min95c495c4.js',
        'resources/client/themes/site/js/animate95c495c4.js',
        'resources/client/themes/site/js/script95c495c4.js',
        'resources/client/plugins/parallax.min95c495c4.js',
        'resources/client/themes/site/js/form95c495c4.js',
        'resources/client/js/jquery.dlmenu92fa92fa.js',
    ],
    'public/client/js/client.js'
);

// Common.
mix.sass('resources/common/sass/app.scss', 'public/common/css')
    .js([
            'resources/common/js/utils/notify.js',
            'resources/common/js/utils/confirmation.js',
        ],
        'public/common/js/main.js'
    );

// Admin.
mix.copyDirectory('resources/admin/css', 'public/admin/css')
    .copyDirectory('resources/admin/fonts', 'public/admin/fonts')
    .copyDirectory('resources/admin/js/main', 'public/admin/js/main');

mix.js([
        'resources/admin/js/theme.js',
        'resources/admin/js/custom.js',
        'resources/admin/js/app.js',
    ],
    'public/admin/js/main.js'
);
