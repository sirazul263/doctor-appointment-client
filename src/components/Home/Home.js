import React from "react";
import Footer from "../Shared/Navbar/Footer/Footer";
import Appointment from "./Appointment/Appointment";
import Blog from "./Blog/Blog";
import Contract from "./Contract/Contract";
import DentalCare from "./DentalCare/DentalCare";
import Doctors from "./Doctors/Doctors";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <DentalCare></DentalCare>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctors></Doctors>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
};

export default Home;
