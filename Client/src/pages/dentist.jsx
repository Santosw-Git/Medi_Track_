import React from "react";
import Appointment from "./appointment";
import doctorImage from "../assets/dentist.jpeg";

export default function Dentist() {
  const dentistDoctor = {
    name: "Dr. Ayush Ojha",
    degree: "BDS, MDS - Dentistry",
    experience: "10 years of experience",
    image: doctorImage,
  };
  return <Appointment doctorDetails={dentistDoctor} />;
}
