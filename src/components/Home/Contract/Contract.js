import React from "react";

const Contract = () => {
  return (
    <section id="contract" className="contact" style={{ marginTop: "100px" }}>
      <div className="text-center py-5">
        <h5 className="secondary">CONTACT US</h5>
        <h1 className="text-white">Always Connect With Us</h1>
      </div>
      <div className="review-form d-flex justify-content-center">
        <form action="">
          <div className="form-group">
            <input
              type="text"
              placeholder="Email Address*"
              className="p-2 m-3"
            />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject*" className=" p-2 m-3" />
          </div>
          <div className="form-group">
            <textarea
              rows="5"
              placeholder="Your message*"
              className=" p-2 m-3"
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contract;
