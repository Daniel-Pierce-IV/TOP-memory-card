import Card from "./Card";

export default function GameArea(props) {
  const colorClasses = [
    "bg-[#FF0000]", // Red
    "bg-[#FF7400]", // Philippine Orange
    "bg-[#FFAA00]", // Chrome Yellow
    "bg-[#000000]", // Black
    // "bg-[#FFD300]", // Cyber Yellow
    "bg-[#FFFF00]", // Yellow
    "bg-[#A2F300]", // Spring Bud
    "bg-[#00DB00]", // Electric Green
    "bg-[#00DFCF]", // Dark Turquoise
    "bg-[#125AFF]", // Blue
    // "bg-[#4B13FF]", // Han Purple
    "bg-[#FFFFFF]", // White
    "bg-[#A502FF]", // Vivid Violet
    "bg-[#FF0090]", // Magenta
  ];

  return (
    <div className="grid grid-rows-2 grid-cols-6">
      {colorClasses.map((e, i) => (
        <Card color={e} key={i} />
      ))}
    </div>
  );
}
