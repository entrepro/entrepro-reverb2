<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameState extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_state',
        'current_color'
    ];

    protected $casts = [
        'game_state' => 'array',
    ];
}
