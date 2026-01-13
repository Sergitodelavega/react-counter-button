import { useState } from "react";

export default function CountButton() {
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
