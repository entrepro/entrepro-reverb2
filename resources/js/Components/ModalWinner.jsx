import { BsXLg } from "react-icons/bs";
import { useDataStore } from "@/Context/DataStoreContext";
import React from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const ModalWinner = () => {
    const queryClient = useQueryClient();

    const { modalWinnerIsOpen, winner, setWinner } = useDataStore();

    const resetGameState = async () => {
        try {
            await axios.get("/api/resetGameState");
            setWinner("");
            queryClient.invalidateQueries({ queryKey: ["fetchGameState"] });
        } catch (error) {
            console.error("Error updating game state:", error);
        }
    };

    return (
        <dialog className={`modal ${modalWinnerIsOpen ? "modal-open" : ""}`}>
            <div className="modal-box w-6/12 max-w-5xl modal-top text-center bg-white/50">
                <h1 className="font-bold text-2xl">{winner}</h1>

                <button
                    className="btn bg-yellow-400 border-none w-full text-lg my-5"
                    onClick={resetGameState}
                >
                    Reset Game
                </button>
            </div>
        </dialog>
    );
};

export default ModalWinner;
