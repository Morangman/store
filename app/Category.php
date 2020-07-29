<?php

declare(strict_types = 1);

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Category
 *
 * @package App
 */
class Category extends Model
{
    public const ACCESSORIES = 'Аксессуары';

    /**
     * @var string
     */
    protected $table = 'categories';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'is_hidden',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'is_hidden' => 'bool',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(
            Product::class,
            'category_id',
            $this->primaryKey
        );
    }
}
