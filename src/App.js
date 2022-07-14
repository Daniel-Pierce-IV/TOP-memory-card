import { useState } from "react";
import GameArea from "./components/GameArea";
import colorArray from "./colors";
import Header from "./components/Header";

export default function App() {
  const [selections, setSelections] = useState([]);
  const [score, setScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function addSelection(selection) {
    if (!selections.includes(selection)) {
      setSelections([...selections, selection]);
      incrementScore();
    } else if (selections.length === colorArray.length) {
      // Allow the game to continue after all cards have been selected
      setSelections([selection]);
      incrementScore();
    } else {
      setSelections([]);
      alert("You lost! Your score: " + score);
      resetScore();
    }
  }

  return (
    <div className="App grid grid-cols-1 grid-rows-[auto,1fr]">
      <Header score={score} />
      <GameArea onSelection={addSelection} selectionPool={colorArray} />
    </div>
  );
}
