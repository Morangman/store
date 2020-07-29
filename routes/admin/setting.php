<?php

declare(strict_types = 1);

Route::get('/', [
    'as' => '.index',
    'uses' => 'SettingController@index',
]);

Route::post('', [
    'as' => '.store',
    'uses' => 'SettingController@store',
]);

Route::patch('{setting}', [
    'as' => '.update',
    'uses' => 'SettingController@update',
]);
