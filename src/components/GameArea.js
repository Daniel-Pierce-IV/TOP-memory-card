import Difficulty from "../enums/Difficulty";
import AlphabetCard from "./AlphabetCard";
import ColorCard from "./ColorCard";
import FontCard from "./FontCard";

export default function GameArea(props) {
  const { selectionPool, onSelection, difficulty, hardLetter } = props;

  let cards;

  if (difficulty === Difficulty.EASY) {
    cards = selectionPool.map((letter, i) => (
      <AlphabetCard
        key={i}
        letter={letter.length > 1 ? null : letter}
        onClick={onSelection.bind(null, letter)}
      />
    ));
  } else if (difficulty === Difficulty.MEDIUM) {
    cards = selectionPool.map((color, i) => (
      <ColorCard
        key={i}
        color={color}
        onClick={onSelection.bind(null, color)}
      />
    ));
  } else {
    cards = selectionPool.map((font, i) => (
      <FontCard
        key={i}
        font={font}
        letter={hardLetter}
        onClick={onSelection.bind(null, font)}
      />
    ));
  }

  return <div className="p-6 grid gap-6 grid-rows-2 grid-cols-6">{cards}</div>;
}
