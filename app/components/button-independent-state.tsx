import { useState, useCallback } from "react";

interface ButtonIndependentStateProps {
  initialCount?: number;
}

export const ButtonIndependentState = ({ initialCount = 0 }: ButtonIndependentStateProps) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <button 
      onClick={handleClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-4 py-2 mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Button clicked ${count} times. Click to increment.`}
      aria-live="polite"
    >
      I have clicked {count} time{count !== 1 ? 's' : ''}
    </button>
  );
}

export default ButtonIndependentState;

