import { useState } from "react";
import GameArea from "./components/GameArea";
import colorArray from "./colors";

export default function App() {
  const [selections, setSelections] = useState([]);

  function addSelection(selection) {
    if (!selections.includes(selection)) {
      setSelections([...selections, selection]);
    } else if (selections.length === colorArray.length) {
      // Allow the game to continue after all cards have been selected
      setSelections([selection]);
    } else {
      setSelections([]);
      alert("You lost!");
    }
  }

  return (
    <div className="App grid grid-cols-1">
      <GameArea onSelection={addSelection} selectionPool={colorArray} />
    </div>
  );
}
