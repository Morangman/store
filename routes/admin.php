<?php

declare(strict_types = 1);

Route::group(
    [
        'as' => '.user',
        'prefix' => 'user',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/user.php'
);

Route::group(
    [
        'as' => '.category',
        'prefix' => 'category',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/category.php'
);

Route::group(
    [
        'as' => '.product',
        'prefix' => 'product',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/product.php'
);

Route::group(
    [
        'as' => '.order',
        'prefix' => 'order',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/order.php'
);

Route::group(
    [
        'as' => '.comment',
        'prefix' => 'comment',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/comment.php'
);

Route::group(
    [
        'as' => '.notification',
        'prefix' => 'notification',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/notification.php'
);

Route::group(
    [
        'as' => '.setting',
        'prefix' => 'setting',
        'middleware' => ['anyrole:admin|superadmin']
    ],
    __DIR__.'/admin/setting.php'
);
