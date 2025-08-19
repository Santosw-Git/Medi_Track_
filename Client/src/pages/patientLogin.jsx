// src/pages/login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import hospitalImage from "../assets/image.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: connect to backend
    navigate("/appointment");
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

      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-10 
                      bg-white/10 backdrop-blur-xl border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">Welcome Back</h2>
        <p className="text-gray-300 mb-8 text-center">
          Sign in to access you hospital records and appointments.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-white">Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="you@hospital.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="hover:text-blue-400">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-gray-300 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
