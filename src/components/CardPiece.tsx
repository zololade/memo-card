import { type GifResult } from "@giphy/js-fetch-api";
import { useState, type MouseEvent } from "react";

import type { GameBoardProp } from "./GameBoard";

function CardPiece({
  updateCurrScore,
  resetGame,
  val,
  shuffle,
}: GameBoardProp & { val: GifResult["data"]; shuffle: () => void }) {
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
      <div className="image-container">
        <img
          src={val.images.original.url}
          alt=""
          width={val.images.original.width}
          height={val.images.original.height}
        />
      </div>
    </div>
  );
}
export { CardPiece };
