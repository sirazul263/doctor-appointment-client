import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white ">
      <div
        className={` d-flex justify-content-center info-card info-${info.background}`}
      >
        <div>
          <FontAwesomeIcon className="info-icon me-3" icon={info.icon} />
        </div>
        <div className="text-white">
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
