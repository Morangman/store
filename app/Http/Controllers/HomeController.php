<?php

declare(strict_types = 1);

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View as ViewContract;
use Illuminate\Support\Facades\View;

/**
 * Class HomeController
 *
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index(): ViewContract
    {
        return View::make('home');
    }
}
