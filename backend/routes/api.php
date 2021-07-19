<?php

use App\Models\Ingredient;
use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// use App\Models\Pizza;
Route::get('/pizza', function () {
    return Pizza::where('name', 'like', '%'.request()->q.'%')->get();
    // return Pizza::all();
});

Route::get('/pizza/{pizza}', function (Pizza $pizza) {
    return $pizza;
});

Route::post('/pizza', function () {
    request()->validate([
        'name' => 'required|min:2',
        'price' => 'required|numeric|between:1,100',
    ]);

    return Pizza::create(request()->all('name', 'price'));
})->middleware('auth:sanctum');

Route::put('/pizza/{pizza}', function (Pizza $pizza) {
    // header('Access-Control-Allow-Origin: *');
    // dump(request()->name);
    // dump(request()->price);
    // dump(request()->all('name', 'price'));
    request()->validate([
        'name' => 'required|min:2',
        'price' => 'required|numeric|between:1,100',
    ]);

    $pizza->update(
        request()->all('name', 'price')
    );

    return $pizza;
});

Route::get('/ingredient', function () {
    return Ingredient::all();
});
