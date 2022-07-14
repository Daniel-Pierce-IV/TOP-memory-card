import Card from "./Card";
import shuffle from "array-shuffle";
import { useState } from "react";
import colorArray from "../colors";

export default function GameArea(props) {
  const [colors, setColors] = useState(() => shuffle(colorArray));

  function shuffleCards() {
    setColors(shuffle(colors));
  }

  return (
    <div className="p-6 grid gap-6 grid-rows-2 grid-cols-6">
      {colors.map((color, i) => (
        <Card color={color} key={i} onClick={shuffleCards} />
      ))}
    </div>
  );
}
