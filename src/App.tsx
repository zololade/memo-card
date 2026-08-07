import { useState } from "react";

import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { GameStats } from "./components/GameStats";

const initialBoardState = {
  currentScore: 0,
  highestScore: 0,
  resetGame: false,
};

function App() {
  const [boardState, setBoardState] = useState(initialBoardState);

  function currentScoreHnd() {
    setBoardState((prev) => {
      return { ...prev, currentScore: prev.currentScore + 1 };
    });
  }

  function resetGameHnd() {
    if (boardState.currentScore > boardState.highestScore) {
      setBoardState((prev) => {
        return { ...prev, highestScore: prev.currentScore };
      });
    }

    setBoardState((prev) => {
      return { ...prev, currentScore: 0 };
    });
  }

  return (
    <>
      <GameStats boardState={boardState} />
      <GameBoard updateCurrScore={currentScoreHnd} resetGame={resetGameHnd} />
    </>
  );
}

export default App;
