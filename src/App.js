import { useEffect, useState } from "react";
import GameArea from "./components/GameArea";
import colorArray from "./colors";
import Header from "./components/Header";
import Difficulty from "./Difficulty";
import Alphabet from "./data/Alphabet";

export default function App() {
  const [selections, setSelections] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [hasReset, setHasReset] = useState(false);
  const resetTimer = 0.15; // Seconds
  const [currentDifficulty, setCurrentDifficulty] = useState(Difficulty.MEDIUM);

  function determineSelectionPool() {
    if (currentDifficulty === Difficulty.EASY) return Alphabet;
    else if (currentDifficulty === Difficulty.MEDIUM) return colorArray;
  }

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function updateBestScore() {
    if (score > best) {
      setBest(score);
    }
  }

  function resetGame() {
    updateBestScore();
    setSelections([]);
    resetScore();
    setHasReset(true);
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
      resetGame();
    }
  }

  useEffect(() => {
    // Affects sub-component styling
    if (hasReset) {
      setTimeout(() => {
        setHasReset(false);
      }, resetTimer * 1000);
    }
  });

  return (
    <div className="App grid grid-cols-1 grid-rows-[auto,1fr]">
      <Header
        score={score}
        best={best}
        hasReset={hasReset}
        difficulty={currentDifficulty}
        updateDifficulty={setCurrentDifficulty}
      />
      <GameArea
        onSelection={addSelection}
        selectionPool={determineSelectionPool()}
        difficulty={currentDifficulty}
      />
    </div>
  );
}
