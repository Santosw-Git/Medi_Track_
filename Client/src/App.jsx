import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/patientLogin";
import Appointment from "./pages/appointment";
import AdminLogin from "./pages/adminLogin";
import Cardio from "./pages/cardio";
import Dentist from "./pages/dentist";
import Neuro from "./pages/neuro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/neuro" element={<Neuro />} />
        <Route path="/dentist" element={<Dentist />} />
      </Routes>
    </Router>
  );
}

export default App;
