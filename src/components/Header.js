import Difficulty from "../enums/Difficulty";
import DifficultyButton from "./DifficultyButton";
import DifficultyControls from "./DifficultyControls";
import Scoreboard from "./Scoreboard";

export default function Header(props) {
  const { difficulty, updateDifficulty } = props;

  const alphabetText = "Letter";
  const colorText = "Color";
  const fontText = "Font";

  function currentText() {
    switch (difficulty) {
      case Difficulty.MEDIUM:
        return colorText;
      case Difficulty.HARD:
        return fontText;
      default:
        return alphabetText;
    }
  }

  return (
    <header className="flex justify-between p-4 border-b-8 border-black">
      <div className="flex flex-col">
        <span className="text-4xl">{currentText()} Memory</span>
        <span>
          Score points by clicking on {currentText().toLowerCase()}s you havent
          clicked yet.
        </span>
        <span className="italic">
          {currentText()} clicks reset once you click them all, so keep going!
        </span>
      </div>

      <DifficultyControls>
        <DifficultyButton
          label="Easy"
          isActive={Difficulty.EASY === difficulty}
          onClick={updateDifficulty.bind(null, Difficulty.EASY)}
        />

        <DifficultyButton
          label="Medium"
          isActive={Difficulty.MEDIUM === difficulty}
          onClick={updateDifficulty.bind(null, Difficulty.MEDIUM)}
        />

        <DifficultyButton
          label="Hard"
          isActive={Difficulty.HARD === difficulty}
          onClick={updateDifficulty.bind(null, Difficulty.HARD)}
        />
      </DifficultyControls>

      <Scoreboard {...props} />
    </header>
  );
}
