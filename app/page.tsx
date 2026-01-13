"use client";
import { useState } from "react";
import { ButtonSharedState } from "./components/button-shared-state";
import { ButtonIndependentState } from "./components/button-independent-state";
import  MyInput from "./components/input";
import TaskManager from "./components/task-manager";
import CheckLogin from "./components/check-login";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="flex justify-center items-center flex-col bg-zinc-50 font-sans p-24 dark:bg-black">
      <h1 className="text-3xl font-bold">React Count Button</h1>
      <h2 className="text-xl">Buttons with shared state</h2>
      <ButtonSharedState count={count} onClick={handleClick} />
      <ButtonSharedState count={count} onClick={handleClick} />

      <h2 className="text-xl mt-3">Buttons with independent state</h2>
      <ButtonIndependentState />
      <ButtonIndependentState />

      <h2 className="text-xl mt-3">Input Component</h2>
      <MyInput />

      <h2 className="text-2xl mt-2">Task Manager</h2>
      <TaskManager />

      <h2 className="text-2xl mt-2">Check Login</h2>
      <CheckLogin />
    </div>
  );
}
