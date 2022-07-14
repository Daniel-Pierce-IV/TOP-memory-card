import { useState } from "react";

export default function Card(props) {
  return <div className={`rounded-xl ${props.color}`}></div>;
}
