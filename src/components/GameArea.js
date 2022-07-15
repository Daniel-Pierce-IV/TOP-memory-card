import Card from "./Card";
import shuffle from "array-shuffle";
import Difficulty from "../Difficulty";

export default function GameArea(props) {
  const { selectionPool, onSelection, difficulty } = props;
  const selections = shuffle(selectionPool);

  let cards;

  if (difficulty === Difficulty.EASY) {
    cards = selections.map((selection, i) => (
      <Card
        text={selection}
        key={i}
        onClick={() => {
          onSelection(selection);
        }}
      />
    ));
  } else {
    cards = selections.map((selection, i) => (
      <Card
        color={selection}
        key={i}
        onClick={() => {
          onSelection(selection);
        }}
      />
    ));
  }

  return <div className="p-6 grid gap-6 grid-rows-2 grid-cols-6">{cards}</div>;
}
