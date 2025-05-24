"use client";
import { useState } from "react";
export default function Home() {
  const [player, setPlayer] = useState("X")
  function handleClick(){
    if (player === "O"){
    setPlayer("X")
  }
  else{
    setPlayer("O")
  }
  }
  return (
    <>
    <h1>player = {player} </h1>
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">Click to Increament Count</button>
    </>
  );
}
