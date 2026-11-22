@extends('Layouts.web-template')

@section('seo')
    @php
        $isSpanish = ($lang ?? 'en') === 'es';

        $pageTitle = $isSpanish
            ? 'FP Web Designs | Diseño y desarrollo web a medida'
            : 'FP Web Designs | Custom Web Design & Development';

        $pageDescription = $isSpanish
            ? 'Diseño y desarrollo web a medida para tu negocio. Presencia digital, SEO e integración con Shopify o Square. Conoce los proyectos de FP Web Designs.'
            : 'Custom web design and development for your business. Digital presence, SEO, and Shopify or Square integrations. Explore projects by FP Web Designs.';
    @endphp

    <title>{{ $pageTitle }}</title>

    <meta name="description" content="{{ $pageDescription }}">

    <link rel="canonical" href="https://fp-webdesigns.com/">

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="FP Web Designs">
    <meta property="og:title" content="{{ $pageTitle }}">
    <meta property="og:description" content="{{ $pageDescription }}">
    <meta property="og:url" content="https://fp-webdesigns.com/">
    <meta property="og:locale" content="{{ $isSpanish ? 'es_US' : 'en_US' }}">

    <meta property="og:image" content="{{ asset('img/og-v3.png') }}">
    <meta property="og:image:width" content="1731">
    <meta property="og:image:height" content="909">

@endsection

@section('content')
    <div
        id="index"
        data-url="{{ url('/') }}"
        data-lang="{{ $lang ?? 'en' }}"
    ></div>
@endsection
