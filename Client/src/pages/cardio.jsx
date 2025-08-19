import React from "react";
import Appointment from "./appointment";
import doctorImage from "../assets/doctor.png";

export default function Cardio() {
  const cardioDoctor = {
    name: "Dr. Santosh Bahadur",
    degree: "MBBS, MD - Cardiology",
    experience: "15 years of experience",
    image: doctorImage,
  };
  return <Appointment doctorDetails={cardioDoctor} />;
}
