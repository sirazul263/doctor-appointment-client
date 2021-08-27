import React from "react";

const AppointmentByDate = ({ appointments, date }) => {
  return (
    <div className="appointment-container shadow h-100 bg-white">
      <div className="d-flex justify-content-between py-3 px-4">
        <p className>
          Appointments{" "}
          <span>{appointments.length > 0 ? appointments.length : 0}</span>{" "}
        </p>

        <p className="text-secondary">{date.toDateString()}</p>
      </div>
      {appointments.length > 0 && (
        <div
          className="table table-borderless px-3"
          style={{ fontWeight: "700", fontSize: "12px", width: "100%" }}
        >
          <thead className="text-center text-secondary ">
            <tr>
              <th scope="col"> </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Schedule</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center pb-5">
            {appointments.map((element, val) => (
              <tr>
                <th>{val + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.time}</td>
                <td>
                  <button className="table-btn">Not Visited</button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      )}
    </div>
  );
};

export default AppointmentByDate;
