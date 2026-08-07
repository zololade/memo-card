import { useState, type MouseEvent } from "react";

import type { GameBoardProp } from "./GameBoard";

function CardPiece({ updateCurrScore, resetGame }: GameBoardProp) {
  const [clickedState, setClickedState] = useState(false);

  function handleClick(_e: MouseEvent) {
    if (clickedState === false) {
      setClickedState(true);
      updateCurrScore();
      return;
    }

    resetGame();
  }

  return (
    <div className="cardPiece" onClick={handleClick}>
      {clickedState.toString()}
    </div>
  );
}
export { CardPiece };
