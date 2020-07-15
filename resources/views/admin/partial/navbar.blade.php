<div class="navbar navbar-expand-md navbar-dark navbar-slide-top fixed-top">
    <div class="navbar-brand">
    </div>
    <div class="d-md-none">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
            <i class="icon-tree5"></i>
        </button>
        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
            <i class="icon-paragraph-justify3"></i>
        </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                    <i class="icon-paragraph-justify3"></i>
                </a>
            </li>
        </ul>
        <span class="ml-md-3 mr-md-auto hidden"></span>
        <ul class="navbar-nav">
            <li class="nav-item dropdown dropdown-user">
                @if($user = Auth::user())
                    <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                        <span>{{ $user->getAttribute('name') }}</span>
                    </a>
                @endif
                <div class="dropdown-menu dropdown-menu-right">
                    <a
                        class="dropdown-item"
                        href="{{ route('admin.logout') }}"
                    >
                        <i class="icon-switch2"></i>
                        @lang('common.navbar.logout')
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
