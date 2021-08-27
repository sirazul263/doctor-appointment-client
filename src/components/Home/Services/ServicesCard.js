import React from "react";

const ServicesCard = ({ services }) => {
  return (
    <div className="col-md-4 text-center ">
      <div className=" mb-4">
        <img src={services.img} alt="" className="image-fluid service-icon" />
      </div>
      <div className="service-info">
        <h6 className="mb-4">{services.title}</h6>
        <p className="text-secondary">{services.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
