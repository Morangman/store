<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreRequest;
use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Product;
use Illuminate\Contracts\View\View as ViewContract;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use LiqPay;

/**
 * Class CategoryController
 *
 * @package App\Http\Controllers\Admin
 */
class CategoryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index(): ViewContract
    {
        return View::make('admin.category.index');
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create(): ViewContract
    {
        return View::make('admin.category.create');
    }

    /**
     * @param \App\Http\Requests\Admin\Category\StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request): JsonResponse
    {
        $category = Category::create($request->all());

        $this->handleDocuments($request, $category);

        Session::flash(
            'success',
            Lang::get('admin/category.messages.create')
        );

        return $this->json()->noContent();
    }

    /**
     * @param \App\Category $category
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(Category $category): ViewContract
    {
        return View::make(
            'admin.category.edit',
            [
                'category' => $category,
                'products' => $category->getAttribute('products'),
            ]
        );
    }

    /**
     * @param \App\Http\Requests\Admin\Category\UpdateRequest $request
     * @param \App\Category $category
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request, Category $category): JsonResponse
    {
        $category->update($request->all());

        if ($request->get('products')) {
            foreach ($request->get('products') as $product) {
                $variations = [];

                foreach ($product['variations'] as $variation) {
                    $variations[] = [
                        'color_name' => $variation['color_name'],
                        'color' => $variation['color'],
                        'price' =>  $product['price'] ?? $variation['price'],
                        'old_price' => $product['old_price'] ?? $variation['old_price'],
                        'image' => $variation['image'],
                    ];
                }

                Product::query()->find($product['id'])->update([
                    'price' => $product['price'],
                    'old_price' => $product['old_price'],
                    'variations' => $variations,
                ]);
            }
        }

        $this->handleDocuments($request, $category);

        Session::flash(
            'success',
            Lang::get('admin/category.messages.update')
        );

        return $this->json()->noContent();
    }

    /**
     * @param \App\Category $category
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Exception
     */
    public function delete(Category $category): JsonResponse
    {
        $category->delete();

        Session::flash(
            'success',
            Lang::get('admin/category.messages.delete')
        );

        return $this->json()->noContent();
    }

    /**
     * @param \App\Category $category
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(Category $category): JsonResponse
    {
        return $this->json()->ok($category);
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \InvalidArgumentException
     */
    public function getAll(Request $request): JsonResponse
    {
        $categories = Category::query()
            ->when(
                $request->get('search'),
                function ($query, $search) {
                    $keyword = "%{$search}%";

                    $query->where('name', 'like', $keyword);
                }
            )
            ->when(
                $request->get('by'),
                function ($q, $sort) use ($request) {
                    $q->orderBy($sort, $request->get('dir', 'asc'));
                }
            )
            ->paginate(20);

        return $this->json()->ok($categories);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Category $category
     *
     * @return void
     *
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded
     */
    protected function handleDocuments(Request $request, Category $category): void
    {
        $media = $category->addMedia($request->file('category_image'))
            ->toMediaCollection(Category::MEDIA_COLLECTION_CATEGORY);

        $category->update(['image' => $media->getFullUrl()]);
    }
}
