"use client";
import CountButton from "./components/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-50 font-sans p-24 dark:bg-black">
      <h1>React Count Button</h1>
      <CountButton />
    </div>
  );
}
