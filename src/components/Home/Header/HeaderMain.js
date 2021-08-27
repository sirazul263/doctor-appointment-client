import React from "react";
import chair from "../../../images/chair1.png";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          Your New Smile <br /> Starts Here{" "}
        </h1>
        <br />
        <p className="text-secondary">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          iusto earum sit tempore voluptatum commodi deleniti ullam id. Sint
          incidunt adipisci iure autem numquam accusamus corporis illo maxime
          rem veniam?
        </p>
        <br />
        <button className="submit-btn">
          <Link to="/appointment" className="text-white text-decoration-none">
            GET APPOINTMENT
          </Link>
        </button>
      </div>

      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
