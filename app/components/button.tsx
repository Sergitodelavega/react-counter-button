interface ButtonProps {
  count: number;
  onClick: () => void;
}

export default function CountButton({count, onClick} : ButtonProps) {

  return (
    <button 
        onClick={onClick} 
        className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-4 py-2 mt-2">
      I have clicked {count} times
    </button>
  );
}
