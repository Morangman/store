<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">
    <!-- Sidebar mobile toggler -->
    <div class="sidebar-mobile-toggler text-center">
        <a href="#" class="sidebar-mobile-main-toggle">
            <i class="icon-arrow-left8"></i>
        </a>
        <a href="#" class="sidebar-mobile-expand">
            <i class="icon-screen-full"></i>
            <i class="icon-screen-normal"></i>
        </a>
    </div>
    <!-- /sidebar mobile toggler -->
    <div class="sidebar-content">
        <div class="card card-sidebar-mobile">
            <ul class="nav nav-sidebar" data-nav-type="accordion">
                <li class="nav-item">
                    <a href="{{ URL::route('admin.user.index') }}" class="nav-link @active_menu_class('admin.user')">
                        <i class="icon-users2"></i>
                        <span>@lang('common.sidebar.users')</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ URL::route('admin.category.index') }}" class="nav-link @active_menu_class('admin.category')">
                        <i class="icon-drawer"></i>
                        <span>@lang('common.sidebar.categories')</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ URL::route('admin.product.index') }}" class="nav-link @active_menu_class('admin.product')">
                        <i class="icon-basket"></i>
                        <span>@lang('common.sidebar.products')</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ URL::route('admin.order.index') }}" class="nav-link @active_menu_class('admin.product')">
                        <i class="icon-filter4"></i>
                        <span>@lang('common.sidebar.orders')</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ URL::route('admin.comment.index') }}" class="nav-link @active_menu_class('admin.product')">
                        <i class="icon-bubble"></i>
                        <span>@lang('common.sidebar.comments')</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
