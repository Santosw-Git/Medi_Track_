import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function PrescriptionByEmail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/appointment/list-appointments`, { email });

      if (response.data.success) {
        console.log("Appointments fetched successfully:", response.data);
        
        // Navigate to appointments page with data
        navigate("/appointments-list", { state: { appointments: response.data.appointments } });
      } else {
        setMessage("No appointments found for this email");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to fetch appointments");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-blue-1000 p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white-800">Fetch Prescriptions</h2>
        {message && <div className="mb-4 text-red-600 font-medium">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Patient Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white text-xl py-3 rounded-xl font-medium hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
