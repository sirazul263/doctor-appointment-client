import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          Doctor's Portal
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link ms-5" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <Link to="/dashboard" className="nav-link ms-5">
                DashBoard
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#review">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#blog">
                Blog
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link ms-5 text-white" href="#contract">
                Contract us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
