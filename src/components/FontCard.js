export default function FontCard(props) {
  const { onClick, letter, font } = props;

  return (
    <div
      className={`flex justify-center items-center rounded-xl cursor-pointer border-8 border-black`}
      onClick={onClick}
    >
      <span className="select-none text-9xl" style={{ fontFamily: font }}>
        {letter}
      </span>
    </div>
  );
}
