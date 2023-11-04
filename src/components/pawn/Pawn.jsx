import React from "react";
import './pawn.css';

const Pawn = ( {pawn, isSelected, onSelect} ) => {
    return (
        <button
          css={`
            position: absolute;
            width: 100px;
            height: 100px;
            transform: translateX(calc(100% * ${pawn.x - 1})) translateY(calc(100% * ${pawn.y - 1})) !important;
            line-height: 2rem;
            transition: transform 250ms;
            display: grid;
            place-items: center;
            font-size: 8rem;
            cursor: ${onSelect && 'pointer'};
            color: ${isSelected && '#880808'};
            pointer-events: ${pawn.figure === '♟' && 'none'};
          `}
          onClick={() => onSelect(pawn.id)}
          {...rest}
        >
          {`${pawn.figure}\u{fe0e}`}
        </button>
      );
}

export default Pawn;