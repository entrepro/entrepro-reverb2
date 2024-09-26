import ModalWinner from "@/Components/ModalWinner";
import Piece from "@/Components/Piece";
import { useDataStore } from "@/Context/DataStoreContext";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
    const queryClient = useQueryClient();
    const { auth } = usePage().props;
    const { setModalWinnerIsOpen, setWinner } = useDataStore();
    const userColor = auth.user.name == "Sandy" ? "black" : "white";

    const fetchGameState = async () => {
        try {
            const { data } = await axios.get("/api/gameState");

            return data;
        } catch (error) {}
    };

    const { data: boxes, isLoading } = useQuery({
        queryKey: ["fetchGameState"],
        queryFn: fetchGameState,
    });

    const updateGameStateAndCheckWin = async (updatedBoxes) => {
        try {
            // Update the game state in the database
            await axios.patch("/api/gameState", {
                game_state: updatedBoxes,
                current_mover: userColor == "white" ? 1 : 2,
            });

            // Check the win condition after updating the game state
            // const player = userColor == "white" ? 1 : 2;
            // const hasWon = checkSingleWinCondition(updatedBoxes, player);

            // if (hasWon) {
            //     toast.success(`Player ${userColor} wins!`);
            // }

            // Invalidate the query to refetch game state
            queryClient.invalidateQueries({ queryKey: ["fetchGameState"] });
        } catch (error) {
            console.error("Error updating game state:", error);
        }
    };

    const resetGameState = async () => {
        try {
            await axios.patch("/api/gameState", {
                game_state: [1, 1, 1, 0, 0, 0, 2, 2, 2],
                current_mover: 2,
            });
            queryClient.invalidateQueries({ queryKey: ["fetchGameState"] });
        } catch (error) {
            console.error("Error updating game state:", error);
        }
    };

    // const [data, setBoxes] = useState([1, 1, 1, 0, 0, 0, 2, 2, 2]);
    const [draggedPieceIndex, setDraggedPieceIndex] = useState(null);
    // const [clickedBoxIndex, setClickedBoxIndex] = useState(null);
    // const [highlightedMoves, setHighlightedMoves] = useState([]);

    // Handle drag start by storing the index of the dragged piece

    const legalMoves = [
        [0, 1, 0, 1, 1, 0, 0, 0, 0], // Top Left Corner
        [1, 0, 1, 0, 1, 0, 0, 0, 0], // Top Middle
        [0, 1, 0, 0, 1, 1, 0, 0, 0], // Top Right Corner
        [1, 0, 0, 0, 1, 0, 1, 0, 0], // Middle Left
        [1, 1, 1, 1, 0, 1, 1, 1, 1], // Center
        [0, 0, 1, 0, 1, 0, 0, 0, 1], // Middle Right
        [0, 0, 0, 1, 1, 0, 0, 1, 0], // Bottom Left Corner
        [0, 0, 0, 0, 1, 0, 1, 0, 1], // Bottom Middle
        [0, 0, 0, 0, 1, 1, 0, 1, 0], // Bottom Right Corner
    ];

    const reversedLegalMoves = (legalMoves) => {
        return legalMoves.map((move) => move.slice().reverse());
    };

    const blackWinningConditions = [
        [2, 2, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0],
        [2, 0, 0, 2, 0, 0, 2, 0, 0],
        [0, 2, 0, 0, 2, 0, 0, 2, 0],
        [0, 0, 2, 0, 0, 2, 0, 0, 2],
        [2, 0, 0, 0, 2, 0, 0, 0, 2],
        [0, 0, 2, 0, 2, 0, 2, 0, 0],
    ];

    const whiteWinningConditions = [
        [0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 1, 0, 0],
    ];

    const checkSingleWinCondition = (gameState, player) => {
        // Choose the correct winning conditions based on the player
        const winningConditions =
            player === 1 ? whiteWinningConditions : blackWinningConditions;

        // Loop through each condition and check if it matches the gameState
        for (let condition of winningConditions) {
            let match = true;

            // Compare each position in the condition with the gameState
            for (let i = 0; i < condition.length; i++) {
                if (condition[i] !== 0 && gameState[i] !== condition[i]) {
                    match = false;
                    break; // Exit early if it doesn't match
                }
            }

            // Return true if a matching condition is found
            if (match) {
                return true;
            }
        }

        // Return false if no matching condition is found
        return false;
    };

    // Check if the move is legal based on the rules matrix
    const isLegalMove = (currentIndex, targetIndex) => {
        return legalMoves[currentIndex][targetIndex] === 1;
    };

    const isLegalMoveReverse = (currentIndex, targetIndex) => {
        return legalMoves[currentIndex][targetIndex] === 1;
    };

    // Check if the piece is of the allowed color
    const isPieceAllowed = (index) => {
        return (
            (boxes.game_state[index] === 1 && userColor === "white") ||
            (boxes.game_state[index] === 2 && userColor === "black")
        );
    };

    const handleDragStart = (e, index) => {
        if (isPieceAllowed(index)) {
            setDraggedPieceIndex(index); // Set the currently dragged piece index
            e.dataTransfer.setData("pieceIndex", index);
        } else {
            e.preventDefault(); // Prevent drag if piece is not allowed
        } // Store the index of the dragged piece
    };

    // Allow drag over to enable dropping
    const handleDragOver = (e, targetIndex) => {
        e.preventDefault(); // Necessary to allow drop
        if (
            draggedPieceIndex !== null &&
            isLegalMove(draggedPieceIndex, targetIndex)
        ) {
            toast.error("Illegal move.");
            e.dataTransfer.dropEffect = "move"; // Show move cursor
        }
    };

    // Handle drop and update boxes
    const handleDrop = async (e, targetIndex) => {
        e.preventDefault();
        const draggedPieceIndex = e.dataTransfer.getData("pieceIndex");

        // Check if the user is allowed to move
        const currentPlayerColor = userColor == "white" ? 1 : 2;

        if (currentPlayerColor !== boxes.current_color) {
            toast.error("It's not your turn!");
            return;
        }

        // Only move the piece if the target box is empty (0) and the move is legal
        if (
            boxes.game_state[targetIndex] === 0 &&
            isLegalMove(draggedPieceIndex, targetIndex)
        ) {
            const updatedBoxes = [...boxes.game_state];
            updatedBoxes[targetIndex] = boxes.game_state[draggedPieceIndex]; // Move the piece to the target
            updatedBoxes[draggedPieceIndex] = 0; // Clear the original position

            // Update the game state and check the win condition
            await updateGameStateAndCheckWin(updatedBoxes);
        } else {
            toast.error("Illegal move.");
            setDraggedPieceIndex(null);
        }

        setDraggedPieceIndex(null);
    };

    useEffect(() => {
        const channel = window.Echo.channel("game-room-public");

        channel.listen("MoveEvent", (e) => {
            // console.log(e);
            // toast(e.message);
            queryClient.invalidateQueries(["fetchGameState"]);
        });

        channel.listen("WonEvent", (e) => {
            // toast(e.message);

            setWinner(e.message);
            queryClient.invalidateQueries(["fetchGameState"]);
            setModalWinnerIsOpen(true);
        });

        channel.listen("ResetEvent", (e) => {
            // console.log(e);
            toast(e.message);
            queryClient.invalidateQueries(["fetchGameState"]);
            setModalWinnerIsOpen(false);
        });

        return () => {
            window.Echo.leave("game-room-public");
        };
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="Home" />
            <ModalWinner />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-blue-200 shadow-sm sm:rounded-lg h-[70vh]">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center h-[5vh]">
                                {isLoading ? (
                                    <></>
                                ) : (
                                    // <span
                                    //     className={`badge ${
                                    //         boxes.current_color == 1
                                    //             ? "bg-white text-black"
                                    //             : "bg-black text-white"
                                    //     } badge-lg border-0`}
                                    // >
                                    //     {boxes.current_color == 1
                                    //         ? "White's"
                                    //         : "Black's"}{" "}
                                    //     Turn
                                    // </span>

                                    <label
                                        className={`swap swap-flip ${
                                            boxes.current_color == 1
                                                ? "swap-active"
                                                : ""
                                        } text-6xl`}
                                    >
                                        <div className="swap-on">
                                            <span
                                                className={`badge bg-white badge-lg border-0 text-black`}
                                            >
                                                White's Turn
                                            </span>
                                        </div>
                                        <div className="swap-off">
                                            <span
                                                className={`badge bg-black badge-lg border-0 text-white`}
                                            >
                                                Black's Turn
                                            </span>
                                        </div>
                                    </label>
                                )}

                                {/* <button
                                    className="btn btn-sm btn-outline btn-error"
                                    onClick={resetGameState}
                                >
                                    Reset
                                </button> */}
                            </div>
                            <div className="divider"></div>
                            {isLoading ? (
                                <div className="grid grid-cols-3 gap-10 aspect-square bg-slate-500 p-5 rounded-xl mx-auto h-[50vh]"></div>
                            ) : (
                                <div className="grid grid-cols-3 gap-10 aspect-square bg-slate-500 p-5 rounded-xl mx-auto h-[50vh]">
                                    {userColor == "white" ? (
                                        <>
                                            {boxes.game_state
                                                .slice() // Creates a shallow copy of the array
                                                .reverse() // Reverses the copied array
                                                .map((box, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-2 w-full h-full rounded-xl flex items-center justify-center transition duration-200 ease-in ${
                                                            draggedPieceIndex !==
                                                                null &&
                                                            isLegalMove(
                                                                draggedPieceIndex,
                                                                boxes.game_state
                                                                    .length -
                                                                    1 -
                                                                    index,
                                                                reversedLegalMoves
                                                            ) && // Adjust for reversed index
                                                            boxes.game_state[
                                                                boxes.game_state
                                                                    .length -
                                                                    1 -
                                                                    index
                                                            ] === 0
                                                                ? "bg-green-200"
                                                                : "bg-slate-400 hover:bg-slate-300"
                                                        }`}
                                                        onDragOver={
                                                            box == 0
                                                                ? handleDragOver
                                                                : null
                                                        }
                                                        onDrop={(e) =>
                                                            handleDrop(
                                                                e,
                                                                boxes.game_state
                                                                    .length -
                                                                    1 -
                                                                    index
                                                            )
                                                        } // Adjust for reversed index
                                                    >
                                                        {box === 0 && (
                                                            <div
                                                                draggable={
                                                                    false
                                                                }
                                                            />
                                                        )}
                                                        {box === 1 && (
                                                            <Piece
                                                                color="white"
                                                                draggable={true}
                                                                onDragStart={(
                                                                    e
                                                                ) =>
                                                                    handleDragStart(
                                                                        e,
                                                                        boxes
                                                                            .game_state
                                                                            .length -
                                                                            1 -
                                                                            index
                                                                    )
                                                                } // Adjust for reversed index
                                                            />
                                                        )}
                                                        {box === 2 && (
                                                            <Piece
                                                                color="black"
                                                                draggable={true}
                                                                onDragStart={(
                                                                    e
                                                                ) =>
                                                                    handleDragStart(
                                                                        e,
                                                                        boxes
                                                                            .game_state
                                                                            .length -
                                                                            1 -
                                                                            index
                                                                    )
                                                                } // Adjust for reversed index
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                        </>
                                    ) : (
                                        <>
                                            {boxes.game_state.map(
                                                (box, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-5 w-full h-full rounded-xl flex items-center justify-center transition duration-200 ease-in ${
                                                            draggedPieceIndex !==
                                                                null &&
                                                            isLegalMove(
                                                                draggedPieceIndex,
                                                                index
                                                            ) &&
                                                            boxes.game_state[
                                                                index
                                                            ] === 0
                                                                ? "bg-green-200"
                                                                : "bg-slate-400 hover:bg-slate-300"
                                                        }`}
                                                        onDragOver={
                                                            box == 0
                                                                ? handleDragOver
                                                                : null
                                                        }
                                                        onDrop={(e) =>
                                                            handleDrop(e, index)
                                                        }
                                                    >
                                                        {box === 0 && (
                                                            <div
                                                                draggable={
                                                                    false
                                                                } // Piece is draggable if it exists
                                                            />
                                                        )}
                                                        {box === 1 && (
                                                            <Piece
                                                                color="white"
                                                                draggable={true} // Piece is draggable if it exists
                                                                onDragStart={(
                                                                    e
                                                                ) =>
                                                                    handleDragStart(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                        {box === 2 && (
                                                            <Piece
                                                                color="black"
                                                                draggable={true} // Piece is draggable if it exists
                                                                onDragStart={(
                                                                    e
                                                                ) =>
                                                                    handleDragStart(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                        {/* No need to render anything for box === 0 */}
                                                    </div>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
