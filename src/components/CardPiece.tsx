import { useState, type MouseEvent } from "react";

function CardPiece() {
  const [clickedState, setClickedState] = useState(false);

  function handleClick(_e: MouseEvent) {
    if (clickedState === false) {
      setClickedState(true);
    }
  }

  return (
    <div className="cardPiece" onClick={handleClick}>
      {clickedState.toString()}
    </div>
  );
}
export { CardPiece };
