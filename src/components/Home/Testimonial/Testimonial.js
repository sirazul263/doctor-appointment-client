import React from "react";
import quote from "../../../images/quote.png";
import TestimonialInfo from "./TestimonialInfo";
import wilson from "../../../images/wilson.png";
import aliza from "../../../images/aliza.png";
import ema from "../../../images/ema.png";
const Testimonial = () => {
  const testimonialInfo = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Wilson Harry",
      from: "California",
      img: wilson,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Ema Gomez",
      from: "California",
      img: ema,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Aliza Farari",
      from: "California",
      img: aliza,
    },
  ];
  return (
    <div id="review" className="container mt-5  mb-5">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <h4 className="secondary">Testimonial</h4>
          <h1>
            What Our Patients <br /> Say
          </h1>
        </div>
        <div className="col-md-6 ">
          <img
            src={quote}
            alt=""
            className="img-fluid"
            style={{ height: "200px", marginLeft: "400px" }}
          />
        </div>
      </div>
      <div className="row">
        {testimonialInfo.map((testimonial) => (
          <TestimonialInfo
            testimonial={testimonial}
            key={testimonial.name}
          ></TestimonialInfo>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
