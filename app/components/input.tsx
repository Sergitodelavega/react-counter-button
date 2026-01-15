import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface MyInputProps {
  placeholder?: string;
  label?: string;
}

const MyInput = ({ 
  placeholder = "Type something...",
  label = "Text Input"
}: MyInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setCharCount(value.length);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      alert(`Submitted: ${inputValue}`);
      setInputValue("");
      setCharCount(0);
    }
  }, [inputValue]);

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <label 
          htmlFor="my-input" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id="my-input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            aria-label={label}
            aria-describedby="input-description"
          />
          {inputValue && (
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
              aria-live="polite"
            >
              {charCount} char{charCount !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </form>
      
      <p 
        id="input-description" 
        className="mt-3 text-green-600 font-medium"
        aria-live="polite"
      >
        {inputValue ? `You typed: "${inputValue}"` : 'Start typing...'}
      </p>
    </div>
  );
}

export default MyInput;

