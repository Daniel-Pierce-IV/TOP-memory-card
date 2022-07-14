export default function Scoreboard(props) {
  return (
    <div className="flex">
      <div className="flex flex-col h-full justify-center items-center rounded-xl px-4 bg-black text-white">
        <span className="whitespace-nowrap text-lg">Score</span>
        <span className="text-3xl leading-8 pb-0.5">{props.score}</span>
      </div>
    </div>
  );
}
