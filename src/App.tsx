import { useState } from "react";

import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { GameStats } from "./components/GameStats";

const initialBoardState = {
  currentScore: 0,
  highestScore: 0,
  resetGameId: crypto.randomUUID(),
};

function App() {
  const [boardState, setBoardState] = useState(initialBoardState);

  function currentScoreHnd() {
    setBoardState((prev) => {
      return { ...prev, currentScore: prev.currentScore + 1 };
    });
  }

  function resetGameHnd() {
    setBoardState((prev) => {
      return {
        ...prev,
        currentScore: 0,
        highestScore:
          boardState.currentScore > boardState.highestScore ? prev.currentScore : prev.highestScore,
        resetGameId: crypto.randomUUID(),
      };
    });
  }

  return (
    <>
      <GameStats boardState={boardState} />
      <GameBoard
        updateCurrScore={currentScoreHnd}
        resetGame={resetGameHnd}
        key={boardState.resetGameId}
      />
    </>
  );
}

export default App;
