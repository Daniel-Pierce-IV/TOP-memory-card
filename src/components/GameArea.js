import Card from "./Card";
import shuffle from "array-shuffle";

export default function GameArea(props) {
  const { selectionPool, onSelection } = props;
  const colors = shuffle(selectionPool);

  return (
    <div className="p-6 grid gap-6 grid-rows-2 grid-cols-6">
      {colors.map((color, i) => (
        <Card
          color={color}
          key={i}
          onClick={() => {
            onSelection(color);
          }}
        />
      ))}
    </div>
  );
}
