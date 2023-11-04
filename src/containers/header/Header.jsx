import React from "react";
import './header.css';
import pawn from '../../assets/pawn.jpg';


const Header = () => {
    return (
        <div className="hexapawn__header">
            <img className="hexapawn__header-image" src={pawn} alt="pawn" />
            <h1 className="hexapawn__header-title">Hexapawn</h1>
            <p className="hexapawn__header-text">Link to code: <a href="https://github.com">yayeet</a></p>
        </div>
    )
}

export default Header;