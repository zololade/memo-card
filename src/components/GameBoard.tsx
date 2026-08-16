import { useState } from "react";

import { CardPiece } from "./CardPiece";

interface GameBoardProp {
  updateCurrScore: () => void;
  resetGame: () => void;
}

let myArray = Array.from({ length: 10 }).map((_val, index) => {
  return { val: index, id: `key${index}` };
});

function GameBoard(props: GameBoardProp) {
  const [pics, setPics] = useState([...myArray]);

  function handleShuffle() {
    setPics((prev) => {
      return [...shuffleArray(prev)];
    });
  }

  return (
    <section className="gameBoard">
      {pics.map((val) => (
        <CardPiece {...props} key={val.id} val={val.val} shuffle={handleShuffle} />
      ))}
    </section>
  );
}

//helper
function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { GameBoard, type GameBoardProp };
