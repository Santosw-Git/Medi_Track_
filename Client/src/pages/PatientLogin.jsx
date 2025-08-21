import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import hospitalImage from "../assets/image.jpg";
import InputField from "../components/InputField";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function PatientAuth() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isSignup ? "signup" : "signin";
      const payload = isSignup
        ? form
        : { email: form.email, password: form.password };
      await axios.post(`${API_BASE_URL}/api/v1/patient/${endpoint}`, payload);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "An error occurred"
      );
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${hospitalImage})` }}
    >
      <div className="absolute top-0 left-0 m-6 text-white font-medium z-10">
        <Link to="/" className="hover:underline">
          &larr; Back to Home
        </Link>
      </div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-10 
                      bg-white/10 backdrop-blur-xl border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
          {isSignup ? "Patient Signup" : "Patient Sign In"}
        </h2>
        {error && (
          <div className="mb-4 text-red-400 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <InputField
              label="Username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Your Username"
              required
            />
          )}
          <InputField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-300 text-sm">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-400 hover:underline"
                onClick={() => {
                  setIsSignup(false);
                  setError("");
                }}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-blue-400 hover:underline"
                onClick={() => {
                  setIsSignup(true);
                  setError("");
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}