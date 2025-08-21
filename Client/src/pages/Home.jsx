import { Link } from "react-router-dom";
import home from "../assets/home.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <img
        src={home}
        alt="Hospital"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
          Welcome
        </div>
        <div className="flex space-x-4">
  
          <Link to="/login">
            <button className="px-5 bg-gray-700 hover:bg-gray-800 py-2 rounded-lg text-white-800 font-semibold shadow hover:text-white-900 transition">
            Signup/Login
            </button>
          </Link>
        </div>
      </nav>

      
    </div>
  );
}