import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Appointments() {
  const [form, setForm] = useState({
    doctorName: "",
    date: "",
    reason: ""
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/v1/appointment`, form);
      setMessage("Appointment booked successfully!");
      setForm({ doctorName: "", date: "", reason: "" });
    } catch (err) {
      setMessage("Failed to book appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Book Appointment</h2>
        {message && <div className="mb-4 text-green-600 text-center">{message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Doctor Name"
            value={form.doctorName}
            onChange={(e) => setForm({ ...form, doctorName: e.target.value })}
            required
            className="w-full p-3 border border-gray-400 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            placeholder="Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="w-full p-3 border border-gray-400 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Reason"
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            required
            className="w-full p-3 border border-gray-400 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
