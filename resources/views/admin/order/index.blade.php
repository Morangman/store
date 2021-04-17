@extends('layouts.admin')

@section('page_title')
    <i class="icon-list"></i>
    @lang('admin/order.index.title')
@endsection

@section('breadcrumbs')
    <span class="breadcrumb-item active">
        @lang('admin/order.breadcrumbs.index')
    </span>
@endsection

@section('content')
    <order-index
        :ismanager="{{ json_encode($is_manager, true) }}"
    ></order-index>
@endsection
