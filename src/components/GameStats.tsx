import type { BoardState } from "../type";

interface Prop {
  boardState: BoardState;
}

function GameStats({ boardState }: Prop) {
  return (
    <header className="gameHeader">
      <div className="gameTitle">
        <h1>Ops Memory</h1>
        <p>Don't click the same asset twice!</p>
      </div>
      <div className="scoreContainer">
        <div className="scoreBox">
          <span className="scoreLabel">Score</span>
          <span className="scoreValue">{boardState.currentScore}</span>
        </div>
        <div className="scoreBox highest">
          <span className="scoreLabel">Best</span>
          <span className="scoreValue">{boardState.highestScore}</span>
        </div>
      </div>
    </header>
  );
}

export { GameStats };
