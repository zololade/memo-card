import { CardPiece } from "./CardPiece";

interface GameBoardProp {
  updateCurrScore: () => void;
  resetGame: () => void;
}

function GameBoard({ ...prop }: GameBoardProp) {
  return (
    <section className="gameBoard">
      <CardPiece {...prop} />
      <CardPiece {...prop} />
      <CardPiece {...prop} />
    </section>
  );
}

export { GameBoard, type GameBoardProp };
