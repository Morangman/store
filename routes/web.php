<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');

Route::get('/comments', 'HomeController@comments')->name('comments');

Route::get('/thank', 'HomeController@thank')->name('thank');

Route::get('/guarantee', 'HomeController@guarantee')->name('guarantee');

Route::get('/credit', 'HomeController@credit')->name('credit');

Route::get('/product/{product}', 'HomeController@product')->name('product');

Route::get('/accessories', 'HomeController@accessories')->name('accessories');

Route::get('/category/{slug}', 'HomeController@categoryProduct')->name('category');

Route::get('/check-order/{order}', 'HomeController@checkOrder')->name('check-order');

Route::post('/order', 'HomeController@makeOrder')->name('order');

Route::post('/call', 'HomeController@callMe')->name('call');

Route::post('/comment', 'HomeController@addComment')->name('comment');

Route::group([
    'namespace' => 'Auth',
    'as' => 'admin',
    'prefix' => 'admin',
], static function () {
    require __DIR__.'/web/auth.php';
});
