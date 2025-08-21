import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import hospitalImage from "../assets/image.jpg"; 

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("Please fill both username and password.");
      return;
    }
    // Mock login
    alert("Admin login successful!");
    navigate("/admin-dashboard"); 
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${hospitalImage})` }}
    >
      {/* Back to Home */}
      <div className="absolute top-0 left-0 m-6 text-white font-medium z-10">
        <Link to="/" className="hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-10 
                      bg-white/10 backdrop-blur-xl border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">Admin Sign In</h2>

        {error && (
          <div className="bg-red-600 text-red-100 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-white">Username</label>
            <input
              type="text"
              value={username}
              placeholder="admin"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-white">Password</label>
            <input
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300 text-sm">
          © 2025 Hospital Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  );
}
