interface ButtonSharedStateProps {
  count: number;
  onClick: () => void;
  label?: string;
}

export const ButtonSharedState = ({ 
  count, 
  onClick,
  label = "I have clicked"
}: ButtonSharedStateProps) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold px-4 py-2 mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`${label} ${count} times. Click to increment.`}
      aria-live="polite"
    >
      {label} {count} time{count !== 1 ? 's' : ''}
    </button>
  );
}

export default ButtonSharedState;

