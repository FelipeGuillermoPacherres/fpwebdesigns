<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

Route::get('/', [WebController::class, 'index'])->name('inicio');

Route::post('/language', [WebController::class, 'changeLanguage'])->name('language.change');
