<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Admin;

use App\Setting;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setting\StoreRequest;
use App\Http\Requests\Admin\Setting\UpdateRequest;
use Illuminate\Contracts\View\View as ViewContract;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

/**
 * Class SettingController
 *
 * @package App\Http\Controllers\Admin
 */
class SettingController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index(): ViewContract
    {
        return View::make('admin.setting.index', [
            'settings' => Setting::latest('updated_at')->first() ?? (object)[]
        ]);
    }

    /**
     * @param \App\Http\Requests\Admin\Setting\StoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded
     */
    public function store(StoreRequest $request): JsonResponse
    {
        $settingData = $request->except(
                [
                    'code_insert',
                ]
            ) + [
                'code_insert' => $request->get('code_insert') ?? '',
            ];

        $setting = Setting::create($settingData);

        $this->handleDocuments($request, $setting);

        Session::flash(
            'success',
            Lang::get('admin/setting.messages.create')
        );

        return $this->json()->noContent();
    }

    /**
     * @param \App\Http\Requests\Admin\Setting\UpdateRequest $request
     * @param \App\Setting $setting
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded\DiskDoesNotExist
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded\FileDoesNotExist
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded\FileIsTooBig
     */
    public function update(UpdateRequest $request, Setting $setting): JsonResponse
    {
        $settingData = $request->except(
                [
                    'code_insert',
                ]
            ) + [
                'code_insert' => $request->get('code_insert') ?? '',
            ];

        $setting->update($settingData);

        $this->handleDocuments($request, $setting);

        Session::flash(
            'success',
            Lang::get('admin/setting.messages.update')
        );

        return $this->json()->noContent();
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Setting $setting
     *
     * @return void
     *
     * @throws \Spatie\MediaLibrary\Exceptions\FileCannotBeAdded
     */
    protected function handleDocuments(Request $request, Setting $setting): void
    {
        if ($settingSeoImage = $request->file('general_settings')['seo_image']) {
            $media = $setting->addMedia($settingSeoImage)
                ->toMediaCollection(Setting::MEDIA_COLLECTION_SETTING);

            $setting->update(['general_settings' => [
                'email' => $request->get('general_settings')['email'] ?? null,
                'contact_email' => $request->get('general_settings')['contact_email'] ?? null,
                'phone' => $request->get('general_settings')['phone'] ?? null,
                'seo_meta' => $request->get('general_settings')['seo_meta'] ?? null,
                'seo_title' => $request->get('general_settings')['seo_title'] ?? null,
                'seo_keywords' => $request->get('general_settings')['seo_keywords'] ?? null,
                'seo_image' => $media->getFullUrl(),
                'iframe_map' => $request->get('general_settings')['iframe_map'] ?? null,
            ]]);
        } elseif (
            $request->has('general_settings')['seo_image']
            && $setting->getAttribute('general_settings')['seo_image']
            !== $image = $request->get('general_settings')['seo_image']
        ) {
            $setting->update(['general_settings' => [
                'email' => $request->get('general_settings')['email'] ?? null,
                'contact_email' => $request->get('general_settings')['contact_email'] ?? null,
                'phone' => $request->get('general_settings')['phone'] ?? null,
                'seo_meta' => $request->get('general_settings')['seo_meta'] ?? null,
                'seo_title' => $request->get('general_settings')['seo_title'] ?? null,
                'seo_keywords' => $request->get('general_settings')['seo_keywords'] ?? null,
                'seo_image' => $setting->getAttribute('general_settings')['seo_image'] ?? '',
                'iframe_map' => $request->get('general_settings')['iframe_map'] ?? null,
            ]]);
        }
    }
}