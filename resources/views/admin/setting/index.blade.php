@extends('layouts.admin')

@section('page_title')
    <i class="icon-list"></i>
    @lang('admin/setting.breadcrumbs.index')
@endsection

@section('breadcrumbs')
    <span class="breadcrumb-item active">
        @lang('admin/setting.breadcrumbs.index')
    </span>
@endsection

@section('content')
    <setting-index
        :settings="{{ json_encode($settings) }}"
        :content="{{ json_encode($content) }}"
        :slimages="{{ json_encode($slimages) }}"
        :creditimages="{{ json_encode($creditimages) }}"
    ></setting-index>
@endsection
