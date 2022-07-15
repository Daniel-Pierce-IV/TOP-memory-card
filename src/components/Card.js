export default function Card(props) {
  const { color, onClick, text } = props;

  return (
    <div
      className={`flex justify-center items-center rounded-xl cursor-pointer border-8 border-black ${color}`}
      onClick={onClick}
    >
      <span className=" text-9xl">{text}</span>
    </div>
  );
}
