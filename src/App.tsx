import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { GameStats } from "./components/GameStats";

function App() {
  return (
    <>
      <GameStats />
      <GameBoard />
    </>
  );
}

export default App;
