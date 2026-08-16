import { CardPiece } from "./CardPiece";

interface GameBoardProp {
  updateCurrScore: () => void;
  resetGame: () => void;
}

function GameBoard(props: GameBoardProp) {
  return (
    <section className="gameBoard">
      {Array.from({ length: 10 }).map((_val, i) => (
        <CardPiece {...props} key={i} val={i} />
      ))}
    </section>
  );
}

export { GameBoard, type GameBoardProp };
