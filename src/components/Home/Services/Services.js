import React from "react";
import ServicesCard from "./ServicesCard";
import dental from "../../../images/dental.png";
import tooth1 from "../../../images/tooth1.png";
import tooth from "../../../images/tooth.png";

const Services = () => {
  const serviceInfo = [
    {
      title: "Fluoride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img: dental,
    },
    {
      title: "Cavity Filling",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img: tooth1,
    },
    {
      title: "Teeth Whitening",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img: tooth,
    },
  ];
  return (
    <section className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h5 style={{ color: "#5FC7C7" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row w-75 mt-5">
          {serviceInfo.map((services) => (
            <ServicesCard services={services}></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
