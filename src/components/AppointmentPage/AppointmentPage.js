import React from "react";
import { useState } from "react";
import Footer from "../Shared/Navbar/Footer/Footer";
import AppointmentHead from "./AppointmentHead";
import BookAppointment from "./BookAppointment";

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  const handleDate = (date) => {
    setDate(date);
  };
  return (
    <div>
      <AppointmentHead handleDate={handleDate}></AppointmentHead>
      <BookAppointment date={date}></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default AppointmentPage;
