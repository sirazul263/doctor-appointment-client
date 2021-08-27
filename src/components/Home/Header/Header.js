import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderMain from "./HeaderMain";
import Info from "./Info";

const Header = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <Info></Info>
    </div>
  );
};

export default Header;
