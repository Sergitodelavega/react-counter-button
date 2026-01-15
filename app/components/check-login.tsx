import { useState, useCallback } from "react";

interface CheckLoginProps {
  initialState?: boolean;
}

function CheckLogin({ initialState = false }: CheckLoginProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const toggleLogin = useCallback(() => {
    setIsLoggedIn((prev) => !prev);
    setStatusMessage("");
  }, []);

  const handleLogin = useCallback(() => {
    setStatusMessage(isLoggedIn 
      ? "You are currently logged in." 
      : "You are not logged in. Please log in."
    );
  }, [isLoggedIn]);

  return (
    <div 
      className="p-5 max-w-md mx-auto bg-gray-100 rounded-lg shadow"
      role="region"
      aria-label="Login Status Component"
    >
      <h2 className="text-2xl font-bold mb-4">Login Status</h2>
      <p 
        className="mb-4 text-lg"
        aria-live="polite"
      >
        {isLoggedIn ? "✅ You are logged in." : "❌ You are not logged in."}
      </p>

      {statusMessage && (
        <p 
          className="mb-4 p-3 bg-blue-100 text-blue-800 rounded"
          role="alert"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      )}

      <div className="flex gap-3">
        <button 
          onClick={handleLogin}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Check your current login status"
        >
          Check Login Status
        </button>

        <button
          onClick={toggleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={isLoggedIn ? "Log out of your account" : "Log into your account"}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default CheckLogin;