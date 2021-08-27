import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const DoctorInfo = ({ doctor }) => {
  const { name, phone, type, image } = doctor;
  return (
    <div className="col-md-4">
      {image && (
        <img
          src={`data:image/jpeg;base64,${image.img}`}
          alt=""
          style={{ height: "200px" }}
        />
      )}
      <div className="text-center">
        <h5>{name}</h5>
        <h5>{type} specialist</h5>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#1cc7c1" }}
          ></FontAwesomeIcon>{" "}
          <p className="mx-2 text-secondary">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
