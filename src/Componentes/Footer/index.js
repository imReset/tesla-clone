import React from "react";
import "./styleFooter.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a href="https://www.tesla.com/about" target="_blank">
          Tesla © 2022
        </a>
      </p>
      <p>
        <a href="https://www.tesla.com/legal" target="_blank">
          Privacy & Legal
        </a>
      </p>
      <p className="disappearItems">
        <a href="https://www.tesla.com/vin-recall-search" target="_blank">
          Vehicle Recalls
        </a>
      </p>
      <a href="https://www.tesla.com/contact" target="_blank">
        Contact
      </a>
      <a href="https://www.tesla.com/careers" target="_blank">
        Careers
      </a>
      <p className="disappearItems">
        <a href="https://www.tesla.com/blog" target="_blank">
          News
        </a>
      </p>
      <p className="disappearItems">
        <a href="https://engage.tesla.com/" target="_blank">
          Engage
        </a>
      </p>
      <p>
        <a href="https://www.tesla.com/findus/list" target="_blank">
          Locations
        </a>
      </p>
    </div>
  );
};

export default Footer;
