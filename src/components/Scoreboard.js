export default function Scoreboard(props) {
  const { score, best } = props;

  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="flex flex-col h-full justify-center items-center rounded-xl px-4 bg-black text-white">
        <span className="whitespace-nowrap text-lg">Score</span>
        <span className="text-3xl leading-8 pb-0.5">{score}</span>
      </div>

      <div className="flex flex-col h-full justify-center items-center rounded-xl px-4 bg-black text-white">
        <span className="whitespace-nowrap text-lg">Best</span>
        <span className="text-3xl leading-8 pb-0.5">{best}</span>
      </div>
    </div>
  );
}
