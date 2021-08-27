import React from "react";
import { Link } from "react-router-dom";
const FooterCol = (props) => {
  return (
    <div className="col-md-3 ">
      <div className=" py-5">
        <h5 className="secondary">{props.menuTitle ? props.menuTitle : " "}</h5>
      </div>
      <ul className="list-unstyled">
        {props.menuItems.map((menu) => (
          <li className=" py-2 fw-700">
            <Link className="footer-link text-secondary">{menu.name}</Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
