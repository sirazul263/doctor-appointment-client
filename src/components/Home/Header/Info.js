import React from "react";
import InfoCard from "./InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const businessInfo = [
    {
      title: "Opening hours",
      description: "9am-6pm",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Location",
      description: "Rajbari, Dhaka, Bangladesh",
      icon: faMapMarker,
      background: "dark",
    },
    {
      title: "Contact Us Now",
      description: "+88-01734-320986",
      icon: faPhone,
      background: "primary",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <section className="row w-75 ">
        {businessInfo.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </section>
    </div>
  );
};

export default Info;
