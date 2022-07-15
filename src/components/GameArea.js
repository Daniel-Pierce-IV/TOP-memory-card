import shuffle from "array-shuffle";
import Difficulty from "../enums/Difficulty";
import AlphabetCard from "./AlphabetCard";
import ColorCard from "./ColorCard";

export default function GameArea(props) {
  const { selectionPool, onSelection, difficulty } = props;
  const selections = shuffle(selectionPool);

  let cards;

  if (difficulty === Difficulty.EASY) {
    cards = selections.map((letter, i) => (
      <AlphabetCard
        key={i}
        letter={letter}
        onClick={onSelection.bind(null, letter)}
      />
    ));
  } else {
    cards = selections.map((color, i) => (
      <ColorCard
        key={i}
        color={color}
        onClick={onSelection.bind(null, color)}
      />
    ));
  }

  return <div className="p-6 grid gap-6 grid-rows-2 grid-cols-6">{cards}</div>;
}
