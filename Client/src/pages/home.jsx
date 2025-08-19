import { Link } from "react-router-dom";
import hospitalImage from "../assets/hospital.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src={hospitalImage}
        alt="Hospital"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
          MediTrack
        </div>
        <div className="flex space-x-4">
          <Link to="/adminlogin">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-300 to-blue-200 text-blue-900 font-semibold shadow hover:from-blue-400 hover:to-blue-300 transition">
              Admin Login
            </button>
          </Link>
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-300 to-green-200 text-green-900 font-semibold shadow hover:from-green-400 hover:to-green-300 transition">
              Patient Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Your No. 1 Trusted Medical Facility
        </h1>
      </div>
    </div>
  );
}