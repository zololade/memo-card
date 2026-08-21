import { type GifResult, GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "react";

import { CardPiece } from "./CardPiece";

interface GameBoardProp {
  updateCurrScore: () => void;
  resetGame: () => void;
}

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
const searchTerm = "call of duty";

function GameBoard(props: GameBoardProp) {
  const [gifs, setGifs] = useState<GifResult["data"][]>([]);

  function handleShuffle() {
    setGifs((prev) => [...shuffleArray(prev)]);
  }

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const randomOffset = Math.floor(Math.random() * 150);
        const { data: gifs } = await gf.search(searchTerm, { limit: 10, offset: randomOffset });
        if (isMounted) {
          setGifs(gifs);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="gameBoard">
      {gifs.map((val) => (
        <CardPiece {...props} key={val.id} val={val} shuffle={handleShuffle} />
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
