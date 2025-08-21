import { useNavigate } from "react-router-dom";

export default function AppointmentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Appointment Booked!</h1>
        <p className="text-gray-700 mb-6">
          Your appointment has been successfully scheduled. We look forward to seeing you!
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
