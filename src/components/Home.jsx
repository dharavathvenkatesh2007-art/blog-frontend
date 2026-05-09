import React from "react";
import { useAuth } from "../store/authStore"; // your auth store

function Home() {
  const user = useAuth((state) => state.currentUser);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-amber-700 mb-6">
        Welcome to My Blog App
      </h1>

      {!user ? (
        // Before login
        <div className="flex gap-6">
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Login
          </button>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
          >
            Register
          </button>
        </div>
      ) : (
        // After login
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Hello, <span className="font-semibold">{user.name}</span>! You are
            logged in as <span className="font-semibold">{user.role}</span>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
