import { useState } from "react";

export default function Card(props) {
  const { color, onClick } = props;

  return (
    <div
      className={`rounded-xl cursor-pointer border-8 border-black ${color}`}
      onClick={onClick}
    ></div>
  );
}
