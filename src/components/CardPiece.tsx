import { useState, type MouseEvent } from "react";

import type { GameBoardProp } from "./GameBoard";

function CardPiece({
  updateCurrScore,
  resetGame,
  val,
  shuffle,
}: GameBoardProp & { val: number; shuffle: () => void }) {
  const [clickedState, setClickedState] = useState(false);

  function handleClick(_e: MouseEvent) {
    if (clickedState === false) {
      setClickedState(true);
      updateCurrScore();
      shuffle();
      return;
    }

    resetGame();
  }

  return (
    <div className="cardPiece" onClick={handleClick}>
      {val}
    </div>
  );
}
export { CardPiece };
