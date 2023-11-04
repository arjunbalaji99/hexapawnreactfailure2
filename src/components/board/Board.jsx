import React from "react";
import Square from "../square/Square";
import './board.css';
import { useState } from "react";

const Board = () => {
    return (
        <div className="hexapawn__board">
            <div className="hexapawn__board-row1">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="hexapawn__board-row2">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="hexapawn__board-row3">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}

export default Board;