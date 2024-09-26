<?php

namespace App\Http\Controllers;

use App\Events\MoveEvent;
use App\Events\ResetEvent;
use App\Events\WonEvent;
use App\Models\GameState;
use Illuminate\Http\Request;

class GameStateController extends Controller
{
    public function getGameState()
    {
        $gameState = GameState::where('id', 1)->first();


        return response()->json($gameState);
    }

    public function updateGameState(Request $request)
    {
        $gameState = GameState::find(1);
        // $gameState->update($request->all());
        $current_color = 0;

        if ($request->current_mover == 1) {
            $current_color = 2;
        } else {
            $current_color = 1;
        }

        $gameState->update([
            'game_state'        => $request->game_state,
            'current_color'     => $current_color
        ]);

        $state = $this->checkWin($request->game_state);

        if ($state == 'No winner yet') {
            event(new MoveEvent("Move"));
        } else {
            event(new WonEvent($state));
        }

        return response()->json();
    }

    public function checkWin($gameState)
    {
        // Define black and white winning conditions
        $blackWinningConditions = [
            [2, 2, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 0, 0, 0],
            [2, 0, 0, 2, 0, 0, 2, 0, 0],
            [0, 2, 0, 0, 2, 0, 0, 2, 0],
            [0, 0, 2, 0, 0, 2, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 2],
            [0, 0, 2, 0, 2, 0, 2, 0, 0],
        ];

        $whiteWinningConditions = [
            [0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 0],
        ];

        // Helper function to check if a player meets any winning condition
        $checkPlayerWin = function ($gameState, $winningConditions) {
            foreach ($winningConditions as $condition) {
                $match = true;
                // Compare each position in the condition with the gameState
                for ($i = 0; $i < count($condition); $i++) {
                    if ($condition[$i] !== 0 && $gameState[$i] !== $condition[$i]) {
                        $match = false;
                        break;
                    }
                }
                // Return true if a winning condition is met
                if ($match) {
                    return true;
                }
            }
            return false;
        };

        // Check if black (player 2) wins
        if ($checkPlayerWin($gameState, $blackWinningConditions)) {
            return 'Black wins!';
        }

        // Check if white (player 1) wins
        if ($checkPlayerWin($gameState, $whiteWinningConditions)) {
            return 'White wins!';
        }

        // If no one has won
        return 'No winner yet';
    }

    public function resetGame()
    {
        $gameState = GameState::find(1);

        $gameState->update([
            'game_state'        => [1, 1, 1, 0, 0, 0, 2, 2, 2],
            'current_color'     => 1
        ]);

        event(new ResetEvent());
    }
}
