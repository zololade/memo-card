import { useState, type MouseEvent } from "react";

import type { GameBoardProp } from "./GameBoard";

function CardPiece({ updateCurrScore, resetGame }: GameBoardProp) {
  const [clickedState, setClickedState] = useState(false);

  function handleClick(_e: MouseEvent) {
    return clickedState === false ? (setClickedState(true), updateCurrScore()) : resetGame();
  }

  return (
    <div className="cardPiece" onClick={handleClick}>
      {clickedState.toString()}
    </div>
  );
}
export { CardPiece };
