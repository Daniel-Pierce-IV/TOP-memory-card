import Scoreboard from "./Scoreboard";

export default function Header(props) {
  return (
    <header className="flex justify-between p-4 border-b-8 border-black">
      <div className="flex flex-col">
        <span className="text-4xl">Color Memory</span>
        <span>Score points by clicking on colors you havent clicked yet.</span>
        <span className="italic">
          Color clicks reset once you click them all, so keep going!
        </span>
      </div>
      <Scoreboard score={props.score} />
    </header>
  );
}
