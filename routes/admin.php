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
