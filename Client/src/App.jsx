import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/PatientLogin";
import Dashboard from "./pages/Dashboard";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import PrescriptionsList from "./pages/PrescriptionsList"; // <-- import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard parent route */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Success page (outside dashboard) */}
        <Route path="/appointment-success" element={<AppointmentSuccess />} />

        {/* Appointments list page */}
        <Route path="/appointments-list" element={<PrescriptionsList />} />
      </Routes>
    </Router>
  );
}

export default App;
