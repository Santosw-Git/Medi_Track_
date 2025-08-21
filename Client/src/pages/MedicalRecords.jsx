import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MedicalRecordsForm() {
  const [form, setForm] = useState({
    patientName: "",
    diagnosis: "",
    treatment: ""
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/v1/records`, form);
      setMessage("Medical record added successfully!");
      setForm({ patientName: "", diagnosis: "", treatment: "" });
    } catch (err) {
      setMessage("Failed to add record");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Medical Record</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Patient Name" value={form.patientName} onChange={e => setForm({ ...form, patientName: e.target.value })} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Diagnosis" value={form.diagnosis} onChange={e => setForm({ ...form, diagnosis: e.target.value })} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Treatment" value={form.treatment} onChange={e => setForm({ ...form, treatment: e.target.value })} required className="w-full p-2 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
