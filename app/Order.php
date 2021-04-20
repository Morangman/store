<?php

declare(strict_types = 1);

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Order
 *
 * @package App
 */
class Order extends Model
{
    public const STATUS_VIEWED = 1;

    public const STATUS_NEW = 1;
    public const STATUS_IN_PROCESS = 2;
    public const STATUS_PAYMENT_EXPECTED = 3;
    public const STATUS_COMPLETED = 4;
    public const STATUS_POSTPONED = 5;
    public const STATUS_PAYED = 6;
    public const STATUS_NEW_CREDIT = 7;
    public const STATUS_NEW_FREE_LOAN = 8;
    public const STATUS_СALL = 9;
    public const STATUS_NEW_CREDIT_CHECK = 10;
    public const STATUS_NEW_FREE_LOAN_CHECK = 11;
    public const STATUS_СALL_CHECK = 12;

    /**
     * @var string
     */
    protected $table = 'orders';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'notes',
        'ordered_product',
        'credit_data',
        'ordered_status',
        'form_name',
        'is_view',
        'ip_address',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'phone' => 'string',
        'email' => 'string',
        'notes' => 'string',
        'ordered_product' => 'array',
        'credit_data' => 'array',
        'ordered_status' => 'int',
        'form_name' => 'int',
        'is_view' => 'int',
        'ip_address' => 'string',
    ];

    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('d-m-Y H:i:s');
    }
}
