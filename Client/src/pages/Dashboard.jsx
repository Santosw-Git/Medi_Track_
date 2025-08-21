import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Appointments from "./Appointments";
import Prescriptions from "./Prescriptions";
import AppointmentSuccess from "./AppointmentSuccess";
import hosImg from "../assets/hos.jpg"; 

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "Appointments", path: "appointments" },
    { name: "Prescriptions", path: "prescriptions" },
  ];

  useEffect(() => {
    const current = location.pathname.split("/").pop();
    setActive(current);
  }, [location]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-80 bg-gray-800 text-white flex flex-col p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>

        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`mb-4 py-3 px-4 rounded-lg hover:bg-gray-700 transition ${
              active === item.path ? "bg-gray-700 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        <button
          onClick={() => navigate("/login")}
          className="mt-auto py-3 px-4 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
        >
          Logout
        </button>
      </div>

      <div
        className="flex-1 p-10 overflow-auto relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${hosImg})`, 
        }}
      >
        <div className="relative z-10">
          <Routes>
            <Route path="appointments" element={<Appointments />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="appointment-success" element={<AppointmentSuccess />} />
            <Route path="*" />
          </Routes>
        </div>
      </div>
    </div>
  );
}
