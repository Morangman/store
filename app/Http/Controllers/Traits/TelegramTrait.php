<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Traits;

use App\Order;

/**
 * Trait TelegramTrait
 *
 * @package App\Http\Controllers\Traits
 */
trait TelegramTrait
{
    /**
     * @param \App\Order $order
     * @param string $status
     *
     * @return void
     */
    protected function sendMessage(Order $order, string $status): void
    {
        $botApiToken = env('TELEGRAM_BOT_API');

        $orderUrl = route('admin.order.edit', ['order' => $order->getKey()]);

        $data = [
            'chat_id' => env('TELEGRAM_CHAT_ID'),
            'text' => "$status $orderUrl",
        ];

        file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data));
    }
}
