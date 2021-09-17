import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Sidebar = () => {
  const [user, setUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch("https://boiling-tor-06083.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsDoctor(data);
      });
  }, [user.email]);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signedOut = {
          name: "",
          email: "",
          password: "",
          photo: "",
        };
        setUser(signedOut);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("signed-out");
  };
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        {isDoctor && (
          <div>
            <li>
              <Link
                to="/all-appointments"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
              </Link>
            </li>
            <li>
              <Link to="/patients" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link
                to="/prescriptions"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link
                to="/add-doctor"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
              </Link>
            </li>
          </div>
        )}
        <li>
          <Link
            to="/doctor/setting"
            className="text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/login" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={faSignOutAlt} onClick={handleSignOut} />{" "}
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
