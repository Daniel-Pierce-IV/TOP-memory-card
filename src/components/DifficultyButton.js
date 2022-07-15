export default function DifficultyButton(props) {
  const { label, onClick, isActive } = props;
  const activeClasses = "border-blue-600 bg-blue-200";

  return (
    <button
      className={`grow basis-0 w-32 py-1 text-xl border-4 border-gray-600 bg-white hover:brightness-90 active:brightness-[0.8] ${
        isActive ? activeClasses : ""
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
