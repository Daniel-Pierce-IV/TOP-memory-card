export default function AlphabetCard(props) {
  const { onClick, letter } = props;

  return (
    <div
      className={`flex justify-center items-center rounded-xl cursor-pointer border-8 border-black`}
      onClick={onClick}
    >
      <span className=" text-9xl">{letter}</span>
    </div>
  );
}
