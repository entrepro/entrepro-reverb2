import React from "react";

const Piece = ({ color, draggable, onDragStart }) => {
    return (
        <div
            className={`w-full h-full rounded-full ${
                color === "black" ? "bg-black " : ""
            }${color === "white" ? "bg-white " : ""}`}
            draggable={draggable} // Make the piece draggable only if it exists
            onDragStart={onDragStart} // Function to handle drag
        ></div>
    );
};

export default Piece;
