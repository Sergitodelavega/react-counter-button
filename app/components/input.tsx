import { useState }  from "react";

const MyInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-300 rounded shadow px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type something..."
        />
        <p className="mt-4 text-green-400">You typed : {inputValue}</p>
    </div>
  );
}

export default MyInput;