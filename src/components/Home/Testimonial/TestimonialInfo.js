import React from "react";

const TestimonialInfo = ({ testimonial }) => {
  const { quote, img, from, name } = testimonial;
  return (
    <div className="col-md-4">
      <div
        className="card shadow shadow rounded border-0 mx-4 "
        style={{ boxShadow: "10px" }}
      >
        <div className="card-body mb-3 pt-5">
          <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex  align-items-center border-0 bg-transparent pb-5">
          <img className="mx-3" src={img} alt="" width="60" />
          <div>
            <h6 className="text-primary">{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialInfo;
