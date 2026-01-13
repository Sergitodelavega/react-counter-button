"use client";
import { useState } from "react";
import CountButton from "./components/button";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-50 font-sans p-24 dark:bg-black">
      <h1>React Count Button</h1>
      <CountButton count={count} onClick={handleClick} />
      <CountButton count={count} onClick={handleClick} />
    </div>
  );
}
