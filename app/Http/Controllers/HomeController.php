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
use Butschster\Head\Facades\Meta;
use Butschster\Head\Packages\Entities\OpenGraphPackage;
use Illuminate\Contracts\View\View as ViewContract;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use LiqPay;
use Spatie\MediaLibrary\Models\Media;
use App\Http\Controllers\Traits\SpreadsheetTrait;
use App\Http\Controllers\Traits\TelegramTrait;
use App\SuspectIp;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Class HomeController
 *
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{
    use SpreadsheetTrait;
    use TelegramTrait;

    /**
     * @return \Illuminate\Contracts\View\View
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function index(): ViewContract
    {
        // $deleteProducts = Product::query()->delete();

        // $products = DB::connection('mysql2')->table('catalog')->get();

        // foreach($products as $p) {
        //     $info = DB::connection('mysql2')->table('catalog_langs')->where('relation_id', $p->id)->first();

        //     $c_id = 2;

        //     if ($p->viewType === 'case') {
        //         $c_id = 1;
        //     } else {
        //         if (str_contains($info->title, '6')) {
        //             $c_id = 3;
        //         }
        //         if (str_contains($info->title, '6s')) {
        //             $c_id = 5;
        //         }
        //         if (str_contains($info->title, '6 Plus')) {
        //             $c_id = 4;
        //         }
        //         if (str_contains($info->title, '5s')) {
        //             $c_id = 2;
        //         }
        //         if (str_contains($info->title, 'SE')) {
        //             $c_id = 13;
        //         }
        //         if (str_contains($info->title, '6S Plus')) {
        //             $c_id = 6;
        //         }
        //         if (str_contains($info->title, '7')) {
        //             $c_id = 7;
        //         }
        //         if (str_contains($info->title, 'X')) {
        //             $c_id = 11;
        //         }
        //         if (str_contains($info->title, '7 Plus')) {
        //             $c_id = 8;
        //         }
        //         if (str_contains($info->title, '8')) {
        //             $c_id = 9;
        //         }
        //         if (str_contains($info->title, '8 Plus')) {
        //             $c_id = 10;
        //         }
        //         if (str_contains($info->title, 'XR')) {
        //             $c_id = 12;
        //         }
        //         if (str_contains($info->title, 'XS')) {
        //             $c_id = 14;
        //         }
        //         if (str_contains($info->title, 'XS Max')) {
        //             $c_id = 15;
        //         }
        //         if (str_contains($info->title, '11')) {
        //             $c_id = 16;
        //         }
        //         if (str_contains($info->title, '11 Pro')) {
        //             $c_id = 17;
        //         }
        //     }

        //     $product = Product::query()->create([
        //         'id' => $p->id,
        //         'category_id' => $c_id,
        //         'title' => $info->title,
        //         'general_info' => $info->description,
        //         'price' => (float) $info->price,
        //         'old_price' => (float) $info->old_price,
        //         'image' => '',
        //         'variations' => [],
        //         'recommended_products' => [],
        //         'seo' => [],
        //         'is_hidden' => $p->published === 'show' ? 0 : 1,
        //     ]);


        //     try{
        //         $media = $product->addMediaFromUrl("https://imobi-sale.shop/uploads/catalog/$p->id/$p->img_big")
        //         ->toMediaCollection(Category::MEDIA_COLLECTION_CATEGORY);

        //     $product->update(['image' => $media->getFullUrl()]);
        //     } catch(\Exception $e){}

        //     $colors = json_decode($info->color_data, true);

        //     $variations = [];

        //     if ($colors) {
        //         foreach($colors as $color) {
        //             $colorImg = $color['img_big'];

        //             $colorImageUrl = "https://imobi-sale.shop/uploads/catalog/$p->id/$colorImg";

        //             try{
        //                 $mediaColor = $product->addMediaFromUrl($colorImageUrl)
        //                     ->toMediaCollection(Product::MEDIA_COLLECTION_VARIATIONS);

        //                 $imgUrl = $mediaColor->getFullUrl();
        //             } catch(\Exception $e){$imgUrl = '';}

        //             $variations[] = [
        //                 'color_name' => $color['title'],
        //                 'color' => $color['color'],
        //                 'price' => (float) $color['price'],
        //                 'old_price' => (float) $color['old_price'],
        //                 'image' => $imgUrl,
        //             ];
        //         }
        //     }

        //     $product->update(['variations' => $variations]);
        // }

        // $comments = DB::connection('mysql2')->table('reviews')->get();

        // Comment::query()->delete();

        // foreach ($comments as $c) {
        //     Comment::query()->create([
        //         'name' => $c->name,
        //         'email' => $c->email,
        //         'text' => $c->message,
        //         'value' => $c->rate,
        //         'is_hidden' => $c->published === 'show' ? 0 : 1,
        //         'created_at' => date("Y-m-d H:i:s", $c->created_date),
        //         'updated_at' => date("Y-m-d H:i:s", $c->created_date),
        //     ]);
        // }

        // foreach(Product::query()->where('category_id', '!=', 1)->get() as $product) {
        //     $product->update([
        //         'recommended_products' => [
        //                 [
        //                     "id" => "66",
        //                     "title" => "Портативное зарядное устройство U32 13500mAh"
        //                 ],
        //                 [
        //                     "id" =>  "47",
        //                     "title" =>  "Защитное стекло на все модели iPhone 5/5s/6/6s/7/7+/8/8+/X"
        //                 ]
        //         ]
        //     ]);
        // }

        $today = Carbon::now();

        $date = $today;

        if (Storage::disk('public')->exists('date.json')) {
            $actionDate = json_decode(Storage::disk('public')->get('date.json'), true)['date'];
        } else {
            $actionDate = Storage::disk('public')->put('date.json', json_encode(['date' => $today->addDays(3)]));
        }

        if (Carbon::parse($actionDate)->isSameDay(today())) {
            $date = Carbon::parse($actionDate)->addDays(3);

            Storage::disk('public')->put('date.json', json_encode(['date' => $date]));
        } else {
            $date = Carbon::parse($actionDate);
        }
        
        $settings = Setting::latest('updated_at')->first() ?? null;

        $productByCategory = [];

        $products = Product::query()->where('is_hidden', false)->get() ?? [];

        $categories = Category::query()->where('is_hidden', false)->orderBy('seq', 'desc')->get() ?? [];

        foreach ($products as $product) {
            $ids = Arr::pluck($product->getAttribute('recommended_products'), 'id');
            $productCategory = $product->category()->first();
            if ($productCategory->getAttribute('name') !== Category::ACCESSORIES) {
                $productByCategory[$productCategory->getAttribute('slug')][] = [
                    'id' => $product->getKey(),
                    'title' => $product->getAttribute('title'),
                    'image' => $product->getAttribute('image'),
                    'price' => $product->getAttribute('price'),
                    'old_price' => $product->getAttribute('old_price'),
                    'general_info' => $product->getAttribute('general_info'),
                    'variations' => $product->getAttribute('variations'),
                    'recommended' => Product::query()->whereIn('id', $ids)->get(),
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
            'date' => $date->format('d.m'),
            'content' => json_decode(Storage::disk('file')->get('content.json'), true),
            'slimages' => $settings->getMedia(Setting::MEDIA_COLLECTION_SLIDER)
                ->map(static function (Media $media) {
                    return [
                        'id' => $media->getKey(),
                        'url' => $media->getFullUrl(),
                        'title' => $media->getCustomProperty('title'),
                        'target_url' => $media->getCustomProperty('target_url'),
                    ];
                })->toArray()
        ]);
    }

    /**
     * @param string $slug
     * 
     * @return \Illuminate\Contracts\View\View
     */
    public function categoryProduct(string $slug): ViewContract
    {
        $today = Carbon::now();

        $date = $today;

        if (Storage::disk('public')->exists('date.json')) {
            $actionDate = json_decode(Storage::disk('public')->get('date.json'), true)['date'];
        } else {
            $actionDate = Storage::disk('public')->put('date.json', json_encode(['date' => $today->addDays(3)]));
        }

        if (Carbon::parse($actionDate)->isSameDay(today())) {
            $date = Carbon::parse($actionDate)->addDays(3);

            Storage::disk('public')->put('date.json', json_encode(['date' => $date]));
        } else {
            $date = Carbon::parse($actionDate);
        }

        $productByCategory = [];

        $category = Category::query()->where('slug', $slug)->first();

        $products = Product::query()->where('category_id', $category->getKey())->where('is_hidden', false)->get();

        foreach ($products as $product) {
            $ids = Arr::pluck($product->getAttribute('recommended_products'), 'id');
            $productCategory = $product->category()->first();
            if ($productCategory->getAttribute('name') !== Category::ACCESSORIES) {
                $productByCategory[$productCategory->getAttribute('slug')][] = [
                    'id' => $product->getKey(),
                    'title' => $product->getAttribute('title'),
                    'image' => $product->getAttribute('image'),
                    'price' => $product->getAttribute('price'),
                    'old_price' => $product->getAttribute('old_price'),
                    'general_info' => $product->getAttribute('general_info'),
                    'variations' => $product->getAttribute('variations'),
                    'recommended' => Product::query()->whereIn('id', $ids)->get(),
                ];
            }
        }

        return View::make('category_product', [
            'products' => $productByCategory,
            'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
            'date' => $date->format('d.m'),
            'settings' => Setting::latest('updated_at')->first() ?? null,
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
            'comments' => Comment::query()->where('is_hidden', false)->orderBy('created_at', 'desc')->paginate(5) ?? [],
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
        $settings = Setting::latest('updated_at')->first() ?? null;

        $suspectIp = SuspectIp::query()->where('ip_address', $request->ip())->get();

        if ($suspectIp->count() > 0 && isset($settings->getAttribute('general_settings')['block_ctn']) && $suspectIp->count() === (int) $settings->getAttribute('general_settings')['block_ctn']) {

            return $this->json()->noContent();
        } else {
            $orderData = array_merge($request->all(), ['ip_address' => $request->ip(), 'notes' => $request->header('referer')]);

            $order = Order::create($orderData);
    
            switch ($request->get('order_status')) {
                case Order::STATUS_NEW:
                    $this->sendMessage($order, 'Новая заявка!');
    
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
    
                    $this->sendMessage($order, 'Заявка с оплатой!');
    
                    return $this->json()->ok(['form' => $form]);
                case Order::STATUS_NEW_CREDIT:
                    $order->update(['ordered_status' => Order::STATUS_NEW_CREDIT]);
    
                    $this->sendMessage($order, 'Покупка в кредит!');
    
                    $this->setDataToSpreadsheet($order);
    
                    return $this->json()->noContent();
                case Order::STATUS_NEW_FREE_LOAN:
                        $order->update(['ordered_status' => Order::STATUS_NEW_FREE_LOAN]);
        
                        $this->sendMessage($order, 'Покупка в беспроцентный кредит!');
        
                        $this->setDataToSpreadsheet($order);
        
                        return $this->json()->noContent();
            }
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

            $this->sendMessage($order, 'Заявка оплачена!');
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
        $today = Carbon::now();

        $date = $today;

        if (Storage::disk('public')->exists('date.json')) {
            $actionDate = json_decode(Storage::disk('public')->get('date.json'), true)['date'];
        } else {
            $actionDate = Storage::disk('public')->put('date.json', json_encode(['date' => $today->addDays(3)]));
        }

        if (Carbon::parse($actionDate)->isSameDay(today())) {
            $date = Carbon::parse($actionDate)->addDays(3);

            Storage::disk('public')->put('date.json', json_encode(['date' => $date]));
        } else {
            $date = Carbon::parse($actionDate);
        }

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
                'date' => $date->format('d.m'),
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
        $today = Carbon::now();

        $date = $today;

        if (Storage::disk('public')->exists('date.json')) {
            $actionDate = json_decode(Storage::disk('public')->get('date.json'), true)['date'];
        } else {
            $actionDate = Storage::disk('public')->put('date.json', json_encode(['date' => $today->addDays(3)]));
        }

        if (Carbon::parse($actionDate)->isSameDay(today())) {
            $date = Carbon::parse($actionDate)->addDays(3);

            Storage::disk('public')->put('date.json', json_encode(['date' => $date]));
        } else {
            $date = Carbon::parse($actionDate);
        }

        $productByCategory = [];

        $accessories = Product::query()->where('is_hidden', false)->get() ?? [];

        foreach ($accessories as $product) {
            $productCategory = $product->category()->first();
            if ($productCategory->getAttribute('name') === Category::ACCESSORIES) {
                $productByCategory[$productCategory->getAttribute('slug')][] = [
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
                'date' => $date->format('d.m'),
                'categories' => Category::query()->where('is_hidden', false)->get() ?? [],
                'settings' => Setting::latest('updated_at')->first() ?? null,
                'content' => json_decode(Storage::disk('file')->get('content.json'), true)
            ]
        );
    }
}
