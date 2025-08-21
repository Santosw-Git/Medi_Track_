import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function PrescriptionsForm() {
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    medication: "",
    notes: ""
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/v1/prescription`, form);
      setMessage("Prescription added successfully!");
      setForm({ patientName: "", doctorName: "", medication: "", notes: "" });
    } catch (err) {
      setMessage("Failed to add prescription");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Prescription</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Patient Name" value={form.patientName} onChange={e => setForm({ ...form, patientName: e.target.value })} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Doctor Name" value={form.doctorName} onChange={e => setForm({ ...form, doctorName: e.target.value })} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Medication" value={form.medication} onChange={e => setForm({ ...form, medication: e.target.value })} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="w-full p-2 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
