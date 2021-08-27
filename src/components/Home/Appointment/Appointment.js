import React from "react";
import doctor from "../../../images/5790-removebg.png";

const Appointment = () => {
  return (
    <section className=" appointment mb-5">
      <div className="container mt-5">
        <div className="row  mt-5">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7  text-white py-5">
            <h4 className="mb-3" style={{ color: "#1cc7c1" }}>
              Appointment
            </h4>
            <h2 className=" fw-500">
              Make An Appointment <br />
              Today
            </h2>
            <p className="mt-5 mb-5">
              It is a long established fact that a reader will be distracted by
              a readable content of a page while reading at it.
            </p>
            <button className="submit-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
