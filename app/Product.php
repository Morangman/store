<?php

declare(strict_types = 1);

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\Models\Media;

/**
 * Class Product
 *
 * @package App
 */
class Product extends Model implements HasMedia
{
    use HasMediaTrait;

    public const MEDIA_COLLECTION_PRODUCT = 'product';

    /**
     * @var string
     */
    protected $table = 'products';

    /**
     * @var array
     */
    protected $fillable = [
        'category_id',
        'title',
        'general_info',
        'variations',
        'is_hidden',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'category_id' => 'int',
        'title' => 'string',
        'general_info' => 'string',
        'variations' => 'array',
        'is_hidden' => 'bool',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(
            Category::class,
            'category_id',
            'id',
            'category'
        );
    }

    /**
     * @return array
     */
    public function getCarImagesAttribute(): array
    {
        return $this->getMedia(static::MEDIA_COLLECTION_PRODUCT)
            ->map(static function (Media $media) {
                return [
                    'id' => $media->getKey(),
                    'url' => $media->getUrl(),
                ];
            })
            ->toArray();
    }
}
