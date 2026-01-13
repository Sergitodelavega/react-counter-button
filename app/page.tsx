"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-50 font-sans p-24 dark:bg-black">
      <h1>React Count Button</h1>
      <CountButton />
    </div>
  );
}

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 100);
  }

  return (
    <button 
        onClick={handleClick} 
        className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-4 py-2 mt-2">
      I have clicked {count} times
    </button>
  );
}
