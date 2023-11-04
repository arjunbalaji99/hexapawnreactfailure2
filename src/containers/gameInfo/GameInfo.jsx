import React from "react";
import './gameInfo.css';

const GameInfo = () => {
    return (
        <div className="hexapawn__gameinfo">
            <h1>Rules</h1>
            <p>
                You move as with pawns in chess! 
                <br /> You win by eliminating all the enemy's pieces, preventing the enemy from making a legitimate move or bringing a pawn to the enemy's front line            
            </p>
        </div>
    )
}

export default GameInfo;