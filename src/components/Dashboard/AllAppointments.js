import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const AllAppointments = () => {
  const [allAppointments, setAllAppointments] = useState({});
  useEffect(() => {
    fetch("https://boiling-tor-06083.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllAppointments(data);
      });
  }, []);
  return (
    <div
      className=" container-fluid row"
      style={{ height: "100%", backgroundColor: "#F4FDFB" }}
    >
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <h5 className="text-center">All Appointments</h5>
        <div className="d-flex justify-content-center">
          {allAppointments.length > 0 && (
            <div
              className="table table-borderless px-3 "
              style={{ fontWeight: "700", fontSize: "12px", width: "100%" }}
            >
              <thead className="text-center text-secondary ">
                <tr>
                  <th scope="col">SL. No </th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Age</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Time</th>
                  <th scope="col">Date</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody className="text-center pb-5">
                {allAppointments.map((element, val) => (
                  <tr>
                    <th>{val + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.gender}</td>
                    <td>{element.age}</td>
                    <td>{element.weight}</td>
                    <td>{element.phone}</td>
                    <td>{element.email}</td>
                    <td>{element.time}</td>
                    <td>{element.date}</td>
                    <td>
                      <button className="table-btn">Action</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
