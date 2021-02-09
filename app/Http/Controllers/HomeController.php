<?php

declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Category;
use App\Comment;
use App\Http\Requests\Admin\Order\StoreRequest;
use App\Http\Requests\Client\Order\StoreRequest as ClientOrderStoreRequest;
use App\Notifications\CommentNotification;
use App\Order;
use App\Product;
use App\Setting;
use App\User;
use Butschster\Head\Packages\Entities\OpenGraphPackage;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View as ViewContract;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Butschster\Head\Facades\Meta;
use LiqPay;
use Spatie\MediaLibrary\Models\Media;

/**
 * Class HomeController
 *
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function index(): ViewContract
    {
        $settings = Setting::latest('updated_at')->first() ?? null;

        $productByCategory = [];

        $products = Product::query()->where('is_hidden', false)->get() ?? [];

        $categories = Category::query()->where('is_hidden', false)->get() ?? [];

        foreach ($products as $product) {
            $productCategory = $product->category()->first();
            if ($productCategory->getAttribute('name') !== Category::ACCESSORIES) {
                $productByCategory[$productCategory->getAttribute('name')][] = [
                    'id' => $product->getKey(),
                    'title' => $product->getAttribute('title'),
                    'image' => $product->getAttribute('image'),
                    'price' => $product->getAttribute('price'),
                    'old_price' => $product->getAttribute('old_price'),
                    'general_info' => $product->getAttribute('general_info'),
                    'variations' => $product->getAttribute('variations'),
                ];
            }
        }

        $seoTitle = isset($settings) && isset($settings->getAttribute('general_settings')['seo_title'])
            ? $settings->getAttribute('general_settings')['seo_title']
            : '';
        $seoImage = isset($settings) && isset($settings->getAttribute('general_settings')['seo_image'])
            ? $settings->getAttribute('general_settings')['seo_image']
            : '';

        $og = new OpenGraphPackage('home_og');

        $og->setType('OG META TAGS')
            ->setSiteName($seoTitle)
            ->setTitle($seoTitle)
            ->addImage($seoImage);

        $og->toHtml();

        Meta::registerPackage($og);

        Meta::prependTitle($seoTitle)
            ->setKeywords(isset($settings) ? $settings->getAttribute('general_settings')['seo_keywords'] : '')
            ->setDescription($seoTitle);

        return View::make('home', [
            'settings' => $settings ?? [],
            'products' => $productByCategory,
            'categories' => $categories,
            'content' => json_decode(Storage::disk('file')->get('content.json'), true),
            'slimages' => $settings->getMedia(Setting::MEDIA_COLLECTION_SLIDER)
                ->map(static function (Media $media) {
                    return [
                        'id' => $media->getKey(),
                        'url' => $media->getFullUrl(),
                        'title' => $media->getCustomProperty('title'),
                    ];
                })->toArray()
        ]);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function comments(): ViewContract
    {
        return View::make('comments', [
            'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
            'settings' => Setting::latest('updated_at')->first() ?? null,
            'comments' => Comment::query()->where('is_hidden', false)->paginate(5) ?? [],
        ]);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function guarantee(): ViewContract
    {
        return View::make('guarantee', [
            'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
            'settings' => Setting::latest('updated_at')->first() ?? null,
        ]);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function credit(): ViewContract
    {
        return View::make('credit', [
            'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
            'settings' => Setting::latest('updated_at')->first() ?? null,
        ]);
    }

    /**
     * @param \App\Http\Requests\Admin\Order\StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function makeOrder(StoreRequest $request): JsonResponse
    {
        $orderData = array_merge($request->all(), ['ip_address' => $request->ip()]);

        $order = Order::create($orderData);

        switch ($request->get('order_status')) {
            case Order::STATUS_NEW:
                $botApiToken = env('TELEGRAM_BOT_API');

                $ordedrUrl = route('admin.order.edit', ['order' => $order->getKey()]);

                $data = [
                    'chat_id' => env('TELEGRAM_CHAT_ID'),
                    'text' => "Новая заявка! $ordedrUrl",
                ];

                file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );

                return $this->json()->noContent();
            case Order::STATUS_PAYED:
                $price = 0;
                $description = '';

                foreach ($order->getAttribute('ordered_product') as $product) {
                    $price += $product['price'];
                    $description .= $product['product_title'].' ';
                }

                $liqpay = new LiqPay(env('LIQPAY_PUBLIC_KEY'), env('LIQPAY_PRIVATE_KEY'));

                $form = $liqpay->cnb_form(array(
                    'action' => 'pay',
                    'sandbox' => 1,
                    'amount' => $price,
                    'currency' => 'UAH',
                    'description' => $description,
                    'order_id' => $order->getKey(),
                    'version' => '3',
                    'server_url' => route('check-order', ['order' => $order->getKey()]),
                    'result_url' => route('check-order', ['order' => $order->getKey()]),
                ));

                $botApiToken = env('TELEGRAM_BOT_API');

                $ordedrUrl = route('admin.order.edit', ['order' => $order->getKey()]);

                $data = [
                    'chat_id' => env('TELEGRAM_CHAT_ID'),
                    'text' => "Заявка с оплатой! $ordedrUrl",
                ];

                file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );

                return $this->json()->ok(['form' => $form]);
            case Order::STATUS_NEW_CREDIT:
                $botApiToken = env('TELEGRAM_BOT_API');

                $ordedrUrl = route('admin.order.edit', ['order' => $order->getKey()]);

                $data = [
                    'chat_id' => env('TELEGRAM_CHAT_ID'),
                    'text' => "Покупка в кредит! $ordedrUrl",
                ];

                file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );

                $order->update(['ordered_status' => Order::STATUS_NEW_CREDIT]);

                return $this->json()->noContent();
        }
    }

    /**
     * @param \App\Order $order
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function checkOrder(Order $order): ViewContract
    {
        $liqpay = new LiqPay(env('LIQPAY_PUBLIC_KEY'), env('LIQPAY_PRIVATE_KEY'));

        $res = $liqpay->api("payment/status", array(
            'version' => '3',
            'order_id' => $order->getKey(),
        ));

        if ($res->result == 'ok') {
            $order->update(['ordered_status' => Order::STATUS_PAYED]);

            $botApiToken = env('TELEGRAM_BOT_API');

            $ordedrUrl = route('admin.order.edit', ['order' => $order->getKey()]);

            $data = [
                'chat_id' => env('TELEGRAM_CHAT_ID'),
                'text' => "Заявка оплачена! $ordedrUrl",
            ];

            file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );
        } elseif($res->result == 'error') {
            return View::make('guarantee', [
                'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
                'settings' => Setting::latest('updated_at')->first() ?? null,
            ]);
        }

        return View::make('succes_payed', [
            'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
            'settings' => Setting::latest('updated_at')->first() ?? null,
            'order' => $order
        ]);
    }

    /**
     * @param \App\Http\Requests\Client\Order\StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function callMe(ClientOrderStoreRequest $request): JsonResponse
    {
        $orderData = $request->except(
                [
                    'ordered_product',
                ]
            ) + [
                'ordered_product' => $request->get('ordered_product') ?? [],
            ];

        Order::create(array_merge($orderData, ['ip_address' => $request->ip()]));

        return $this->json()->noContent();
    }

    /**
     * @param \App\Http\Requests\Admin\Comment\StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function addComment(\App\Http\Requests\Admin\Comment\StoreRequest $request): JsonResponse
    {
        $comment = Comment::create(array_merge($request->all(), ['is_hidden' => true]));

        Notification::send(
            User::query()->scopes(['notifiableUsers'])->get(),
            new CommentNotification($comment->getKey())
        );

        return $this->json()->noContent();
    }

    /**
     * @param \App\Product $product
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function product(Product $product): ViewContract
    {
        $og = new OpenGraphPackage('product_og');

        $og->setType('OG META TAGS')
            ->setTitle($product->getAttribute('seo')['title'] ?? '')
            ->addImage($product->getAttribute('seo')['image'] ?? '');

        $og->toHtml();

        Meta::registerPackage($og);

        Meta::prependTitle($product->getAttribute('seo')['title'] ?? '')
            ->setKeywords($product->getAttribute('seo')['keywords'] ?? '')
            ->setDescription($product->getAttribute('seo')['meta'] ?? '');

        $ids = Arr::pluck($product->getAttribute('recommended_products'), 'id');

        return View::make(
            'product',
            [
                'product' => $product,
                'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
                'settings' => Setting::latest('updated_at')->first() ?? null,
                'recommended' => Product::query()->whereIn('id', $ids)->get(),
            ]
        );
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function accessories(): ViewContract
    {
        $productByCategory = [];

        $accessories = Product::query()->where('is_hidden', false)->get() ?? [];

        foreach ($accessories as $product) {
            $productCategory = $product->category()->first();
            if ($productCategory->getAttribute('name') === Category::ACCESSORIES) {
                $productByCategory[$productCategory->getAttribute('name')][] = [
                    'id' => $product->getKey(),
                    'title' => $product->getAttribute('title'),
                    'image' => $product->getAttribute('image'),
                    'price' => $product->getAttribute('price'),
                    'old_price' => $product->getAttribute('old_price'),
                    'general_info' => $product->getAttribute('general_info'),
                    'variations' => $product->getAttribute('variations'),
                ];
            }
        }

        return View::make(
            'accessories',
            [
                'products' => $productByCategory,
                'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
                'settings' => Setting::latest('updated_at')->first() ?? null,
                'content' => json_decode(Storage::disk('file')->get('content.json'), true)
            ]
        );
    }
}
