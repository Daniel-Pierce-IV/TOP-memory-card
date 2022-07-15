export default function DifficultyButton(props) {
  const { label, onClick, isActive } = props;
  const activeClasses = "border-blue-600 bg-blue-200";
  const inactiveClasses = "border-gray-600 bg-white";

  return (
    <button
      className={`w-32 py-1 text-xl border-4 hover:brightness-90 active:brightness-[0.8] ${
        isActive ? activeClasses : inactiveClasses
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
