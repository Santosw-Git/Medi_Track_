// src/pages/home.jsx
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
      <nav className="absolute top-0 right-0 z-50 flex space-x-6 m-6 text-white font-medium">
        <Link to="/adminlogin" className="hover:underline">
          Admin Login
        </Link>
        <Link to="/login" className="hover:underline">
          Patient Login
        </Link>
        <Link to="/appointment" className="hover:underline">
          Book Appointment
        </Link>
      </nav>



      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Your No. 1 Trusted Medical Facility
        </h1>
        <p className="text-xl mb-8 max-w-2xl drop-shadow-md">
          Providing world-class healthcare services with compassion, innovation, 
          and trust — because your health is our top priority.
        </p>
      </div>
    </div>
  );
}
