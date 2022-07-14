import Card from "./Card";
import shuffle from "array-shuffle";
import { useState } from "react";

const colorClasses = [
  "bg-[#FF0000]", // Red FF8500
  // "bg-[#FF7400]", // Philippine Orange
  "bg-[#FF8500]", // American Orange
  // "bg-[#FFAA00]", // Chrome Yellow
  "bg-[#FFCA00]", // Philippine Yellow
  "bg-[#000000]", // Black
  // "bg-[#FFD300]", // Cyber Yellow
  "bg-[#FFFF00]", // Yellow
  "bg-[#A2F300]", // Spring Bud
  "bg-[#00DB00]", // Electric Green
  "bg-[#00DFCF]", // Dark Turquoise
  "bg-[#125AFF]", // Blue
  // "bg-[#4B13FF]", // Han Purple
  "bg-[#FFFFFF]", // White
  "bg-[#A502FF]", // Vivid Violet
  "bg-[#FF0090]", // Magenta
];

export default function GameArea(props) {
  const [colors, setColors] = useState(() => shuffle(colorClasses));

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
