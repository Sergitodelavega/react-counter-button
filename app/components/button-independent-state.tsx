import { useState } from "react";

export const ButtonIndependentState = () => 
{
    const [count, setCount] = useState(0);

    function handleClick(){
      setCount(count + 1);
    }

  return (
    <button 
        onClick={handleClick} 
        className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-4 py-2 mt-2"
    >
      I have clicked {count} times
    </button>
  );
}
