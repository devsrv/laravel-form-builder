<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'FormBuilder@showBuilder')->name('app.home');

Route::get('/show-form', 'FormBuilder@showForm')->name('show.form');
Route::post('/save-form', 'FormBuilder@saveForm')->name('save.form');
Route::post('/submit-form', 'FormBuilder@handleFormRequest')->name('submit.form');
