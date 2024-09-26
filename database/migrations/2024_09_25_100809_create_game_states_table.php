<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('game_states', function (Blueprint $table) {
            $table->id();
            $table->json('game_state');
            $table->integer('current_color');
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('game_states');
    }
};
