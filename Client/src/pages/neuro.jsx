import React from "react";
import Appointment from "./appointment";
import doctorImage from "../assets/neuro.webp";

export default function Neuro() {
  const neuroDoctor = {
    name: "Dr. Anita Koirala",
    degree: "MBBS, DM - Neurology",
    experience: "12 years of experience",
    image: doctorImage,
  };
  return <Appointment doctorDetails={neuroDoctor} />;
}
