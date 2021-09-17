import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentByDate from "./AppointmentByDate";
import { useContext } from "react";
import { UserContext } from "../../App";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState(new Date());
  const handleDate = (date) => {
    setDates(date);
    date = date.toDateString();
    setDate(date);
  };
  useEffect(() => {
    fetch("https://boiling-tor-06083.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: date, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [date]);
  return (
    <div
      className=" container-fluid row"
      style={{ height: "100%", backgroundColor: "#F4FDFB" }}
    >
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-4 p-5 " style={{ marginBottom: "110px" }}>
        <h5>Appointments</h5>
        <Calendar
          className=" calender shadow fw-700 mt-5"
          onChange={handleDate}
          value={new Date()}
        />
      </div>
      <div className="col-md-6 p-5">
        <img
          src={user.image}
          alt=""
          className="img-fluid right-0"
          style={{ height: "32px", width: "32px", marginLeft: "500px" }}
        />
        <h5 className="text-end">{user.name}</h5>
        <AppointmentByDate
          appointments={appointments}
          key={appointments.id}
          date={dates}
        ></AppointmentByDate>
      </div>
    </div>
  );
};

export default Dashboard;
