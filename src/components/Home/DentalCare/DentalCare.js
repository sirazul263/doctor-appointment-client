import React from "react";
import child from "../../../images/child.png";

const DentalCare = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="d-flex justify-content-center  mt-5">
        <div className="row w-75  mt-5">
          <div className="col-md-5">
            <img
              src={child}
              alt=""
              className="image-fluid me-5"
              style={{ width: "400px" }}
            />
          </div>
          <div className="col-md-7 ">
            <h1 className="mt-5 mb-5">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="text-secondary mb-5">
              Advertisements make mouthwash seem necessary for good oral health,
              but many people skip them because they don’t know how they work.
              Schwartz says mouthwash helps in three ways: It reduces the amount
              of acid in the mouth, cleans hard-to-brush areas in and around the
              gums, and re-mineralizes the teeth. “Mouthwashes are useful as an
              adjunct tool to help bring things into balance,” he explains. “I
              think in children and older people, where the ability to brush and
              floss may not be ideal, a mouthwash is particularly helpful.”
            </p>
            <button className=" submit-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
