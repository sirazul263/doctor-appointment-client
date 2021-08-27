import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import AppointmentBody from "./AppointmentBody";

const AppointmentHead = ({ handleDate }) => {
  return (
    <header className="appointment-body">
      <Navbar></Navbar>
      <AppointmentBody handleDate={handleDate}></AppointmentBody>
    </header>
  );
};

export default AppointmentHead;
