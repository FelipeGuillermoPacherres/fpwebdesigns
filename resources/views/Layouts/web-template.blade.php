<!DOCTYPE html>
<html lang="{{ $lang ?? 'en' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @yield('seo')

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0B0F14">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/favicon.png') }}" type="image/x-icon">

    @viteReactRefresh
    @vite(['resources/scss/app.scss', 'resources/js/app.jsx'])
</head>
<body>

    <div id="header" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ $lang }}"></div>

    <section class="main-content">
        @yield('content')
    </section>

    <!-- <div id="footer" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ $lang }}"></div> -->

</body>
</html>
