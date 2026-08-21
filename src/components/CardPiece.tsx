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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
        {!isImageLoaded && <div className="skeleton-box" />}

        <img
          src={val.images.fixed_height_still.url}
          alt={val.title || "Game card"}
          onLoad={() => setIsImageLoaded(true)}
          style={{ opacity: isImageLoaded ? 1 : 0 }}
          loading="lazy"
        />
      </div>

      {!isImageLoaded ? (
        <div className="skeleton-text" />
      ) : (
        <span className="card-title">{val.title || "Call of Duty Asset"}</span>
      )}
    </div>
  );
}
export { CardPiece };
