import React from "react";

import MediaLinks from "../media-links";

import arrow from "../../images/arrow.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer--main-container">
      <div className="footer--text-container">
        <div className="footer--text">
          520 West 28th St.<div> Suite 31</div> New York, NY 10001
        </div>
        <div className="footer--link">VIEW MAP</div>
      </div>
      <div className="footer--text-container">
        <div className="footer--text">
          +1 (646) 490-0772 (USA) <div>info@Illuminati Consulting.io</div>
        </div>
        <div className="golden-heading footer--golden-text">Follow us</div>
        <MediaLinks background="#E5E5E5" />
      </div>
      <div className="footer--text-container">
        <div className="footer--text">SUBSCRIBE TO OUR NEWSLETTEr</div>
        <div>
          <input
            placeholder="Enter your E-mail address"
            className="footer--input"
          ></input>
          <img src={arrow} alt="arrow" className="footer--input-arrow" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
