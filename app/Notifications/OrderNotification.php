<?php

declare(strict_types = 1);

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use phpDocumentor\Reflection\Types\Integer;

/**
 * Class OrderNotification
 *
 * @package App\Notifications
 */
class OrderNotification extends Notification
{
    use Queueable;

    /**
     * @var array
     */
    protected $orderId;

    /**
     * OrderNotification constructor.
     *
     * @param int $orderId
     */
    public function __construct(int $orderId)
    {
        $this->orderId = $orderId;
    }

    /**
     * @return array
     */
    public function via()
    {
        return ['database'];
    }

    /**
     * @return array
     *
     * @throws \Exception
     */
    public function toArray(): array
    {
        return [
            'title' => 'Нове замовлення',
            'order_id' => $this->orderId,
        ];
    }
}
