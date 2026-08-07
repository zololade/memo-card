import type { BoardState } from "../type";

interface Prop {
  boardState: BoardState;
}

function GameStats({ boardState }: Prop) {
  return (
    <>
      <p>{boardState.currentScore}</p>
      <p>{boardState.highestScore}</p>
    </>
  );
}

export { GameStats };
