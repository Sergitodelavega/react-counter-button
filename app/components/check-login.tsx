import { useState } from "react";

function CheckLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogin = () => {
    if(isLoggedIn) {
      alert("You are logged in.");
    } else {
      alert("You are not logged in.");
    }
  }

  return (
    <div className="p-5 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Login Status</h2>
      <p className="mb-4">
        {isLoggedIn ? "You are logged in." : "You are not logged in."}
      </p>

      <button 
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
      >
        Check Login Status
      </button>

      <button
        onClick={toggleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default CheckLogin;