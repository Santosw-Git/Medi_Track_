import React, { useState } from "react";
import { Link } from "react-router-dom";
import appointImage from "../assets/appoint.jpg";
import doctorImage from "../assets/doctor.png"; // placeholder doctor image

export default function Appointment({ doctorDetails }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !phone || !bloodGroup || !date || !time) {
      setSuccess("Please fill all fields.");
      return;
    }
    setSuccess(`Appointment booked with ${doctorDetails.name} on ${date} at ${time}.`);
    setName(""); setAge(""); setPhone(""); setBloodGroup(""); setDate(""); setTime("");
  };

  // Step 1: Show specialty selection if doctorDetails is not provided
  if (!doctorDetails) {
    return (
      <div
        className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${appointImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Book an Appointment</h1>
          <p className="text-lg mb-6 drop-shadow-md">Choose your specialty</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/cardio" className="text-white text-lg hover:underline">Cardiology</Link>
            <Link to="/neuro" className="text-white text-lg hover:underline">Neurology</Link>
            <Link to="/dentist" className="text-white text-lg hover:underline">Dentistry</Link>
          </div>
          <div className="mt-8">
            <Link to="/" className="text-white hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Show doctor info + appointment form
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${appointImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row bg-white/10 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden">
        
        {/* Doctor Info */}
        <div className="md:w-1/3 flex flex-col items-center text-center p-6 bg-white/5">
          <img
            src={doctorDetails.image}
            alt={doctorDetails.name}
            className="rounded-xl object-cover h-48 w-48 mb-4"
          />
          <h2 className="text-2xl font-bold text-white">{doctorDetails.name}</h2>
          <p className="text-gray-300">{doctorDetails.degree}</p>
          <p className="text-gray-400">{doctorDetails.experience}</p>
        </div>

        {/* Appointment Form */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Book an Appointment
          </h2>

          {success && (
            <div className="bg-green-600 text-white p-2 rounded mb-4 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                placeholder="Blood Group"
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition-colors"
            >
              Book Appointment
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/appointment" className="text-white hover:underline">
              &larr; Back to Specialties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
