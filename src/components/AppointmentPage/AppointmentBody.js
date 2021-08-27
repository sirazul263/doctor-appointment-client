import React from "react";
import chair from "../../images/chair1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentBody = ({ handleDate }) => {
  return (
    <div>
      <main className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3a4256" }}>Appointment</h1>
          <br />
          <div>
            <Calendar onChange={handleDate} value={new Date()} />
          </div>
        </div>

        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    </div>
  );
};

export default AppointmentBody;
