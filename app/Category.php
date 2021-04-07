<?php

declare(strict_types = 1);

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

/**
 * Class Category
 *
 * @package App
 */
class Category extends Model implements HasMedia
{
    use HasMediaTrait;
    
    public const ACCESSORIES = 'Аксессуары';
    public const MEDIA_COLLECTION_CATEGORY = 'category';

    /**
     * @var string
     */
    protected $table = 'categories';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'image',
        'is_hidden',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'slug' => 'string',
        'iamge' => 'string',
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
