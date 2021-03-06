import { useEffect, useState } from "react";
import arrayShuffle from "array-shuffle";
import randomLetter from "./random-letter";
import Alphabet from "./data/Alphabet";
import Colors from "./data/Colors";
import Fonts from "./data/Fonts";
import Difficulty from "./enums/Difficulty";
import GameArea from "./components/GameArea";
import Header from "./components/Header";

export default function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState(Difficulty.EASY);
  const [selections, setSelections] = useState([]);
  const [selectionPool, setSelectionPool] = useState(() =>
    createRandomizedSelectionPool()
  );
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [hasReset, setHasReset] = useState(false);
  const resetTimer = 0.15; // Seconds
  const [hardLetter, setHardLetter] = useState(() => randomLetter());

  function createRandomizedSelectionPool() {
    return arrayShuffle(determineSelectionPool());
  }

  function determineSelectionPool() {
    if (currentDifficulty === Difficulty.EASY) return Alphabet;
    else if (currentDifficulty === Difficulty.MEDIUM) return Colors;
    else if (currentDifficulty === Difficulty.HARD) return Fonts;
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

  function chooseNewLetter() {
    let newLetter;

    do {
      newLetter = randomLetter();
    } while (hardLetter === newLetter);

    setHardLetter(newLetter);
  }

  function resetGame() {
    updateBestScore();
    setSelections([]);
    resetScore();
    chooseNewLetter();
    setHasReset(true);
  }

  function addSelection(selection) {
    if (!selections.includes(selection)) {
      setSelections([...selections, selection]);
      incrementScore();
    } else if (selections.length === Colors.length) {
      // Allow the game to continue after all cards have been selected
      setSelections([selection]);
      incrementScore();
    } else {
      resetGame();
    }

    setSelectionPool(createRandomizedSelectionPool());
  }

  useEffect(() => {
    // Affects sub-component styling
    if (hasReset) {
      setTimeout(() => {
        setHasReset(false);
      }, resetTimer * 1000);
    }
  });

  useEffect(() => {
    setSelectionPool(createRandomizedSelectionPool());
  }, [currentDifficulty]);

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
        selectionPool={selectionPool}
        difficulty={currentDifficulty}
        hardLetter={hardLetter}
      />
    </div>
  );
}
