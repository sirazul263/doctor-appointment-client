import React, { useState } from "react";
import { useEffect } from "react";
import doctor from "../../../images/doctor-sm.png";
import DoctorInfo from "./DoctorInfo";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoctors(data);
      });
  }, []);
  return (
    <section className="mb-5" style={{ marginTop: "100px" }}>
      <div className="text-center mb-5">
        <h2 style={{ color: "#5FC7C7" }}> Our Doctors</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row w-75 mt-5 ">
          {doctors.map((doctor) => (
            <DoctorInfo doctor={doctor} key={doctor.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
