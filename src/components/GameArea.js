import shuffle from "array-shuffle";
import Difficulty from "../enums/Difficulty";
import AlphabetCard from "./AlphabetCard";
import ColorCard from "./ColorCard";
import FontCard from "./FontCard";

export default function GameArea(props) {
  const { selectionPool, onSelection, difficulty, hardLetter } = props;
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
  } else if (difficulty === Difficulty.MEDIUM) {
    cards = selections.map((color, i) => (
      <ColorCard
        key={i}
        color={color}
        onClick={onSelection.bind(null, color)}
      />
    ));
  } else {
    cards = selections.map((font, i) => (
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
