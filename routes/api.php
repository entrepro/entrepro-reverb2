<?php

use App\Http\Controllers\GameStateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('gameState', [GameStateController::class, 'getGameState']);
Route::patch('gameState', [GameStateController::class, 'updateGameState']);

Route::get('resetGameState', [GameStateController::class, 'resetGame']);
