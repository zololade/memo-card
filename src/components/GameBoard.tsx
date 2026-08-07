import { useState } from "react";

import { CardPiece } from "./CardPiece";

const initialBoardState = {
  currentScore: 0,
  highestScore: 0,
  resetGame: false,
};

function GameBoard() {
  const [boardState, setBoardState] = useState(initialBoardState);

  return (
    <section className="gameBoard">
      <CardPiece />
      <CardPiece />
      <CardPiece />
    </section>
  );
}

export { GameBoard };
