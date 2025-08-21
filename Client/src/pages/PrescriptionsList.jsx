import { useLocation, useNavigate } from "react-router-dom";

export default function PrescriptionsList() {
  const location = useLocation();
  const navigate = useNavigate();
  const appointments = location.state?.appointments;

  if (!appointments) {
    navigate("/"); 
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl p-8 rounded-2xl shadow-xl">
        <div className="flex justify-start mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-2 rounded-xl bg-gray-600 text-white font-semibold shadow-md hover:bg-gary-700 transition duration-200"
          >
            ← Back to Dashboard
          </button>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Appointments
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-xl overflow-hidden shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{a.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
