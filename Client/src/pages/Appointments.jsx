import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Appointments() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    department: "",
    notes: "",
    reason: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/appointment`, form);

    if (response.data.success) {
      console.log("Appointment booked successfully:", response.data);
      
      navigate("/appointment-success");
    } else {
      setMessage("Failed to book appointment");
    }
      
      navigate("/appointment-success");
    } catch (err) {
      setMessage("Failed to book appointment");
    }
  };

  return (
    <div className="max-w-4xl mx-auto  p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book an Appointment</h2>
      {message && <div className="mb-4 text-red-600 text-center">{message}</div>}
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-gray-1200">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-1200">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-1200">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-1200">Contact No.</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-1200">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-1200">Specialization Department</label>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="General Medicine">General Medicine</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-1200">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-1200">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-64 bg-gray-900 text-white text-xl py-3 rounded-md hover:bg-gray-700 transition"
          >
            Book an Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
