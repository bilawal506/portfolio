"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>count = {count} </h1>
    </>
  );
}