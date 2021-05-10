import React from "react";
import { useHistory } from "react-router-dom";
import { Fade } from "react-reveal";

import logo from "../../images/logo.svg";
import arrow from "../../images/arrow-down.svg";
import MediaLinks from "../common/media-links";

import { servicesOptions, ourWorksOptions } from "../../utils/helpers";

import "./styles.scss";

const Menu = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <Fade top>
      <section className="menu-wrapper">
        <div className="menu-body">
          <section className="right-section">
            <div>
              <div
                className="golden-heading"
                onClick={() => handleNavigation("/about-us")}
              >
                ABOUT US
              </div>
              <div
                href="#services"
                className="golden-heading"
                data-toggle="collapse"
              >
                SERVICES <img src={arrow} alt="" />
              </div>
              <div
                href="#blockchain"
                className="golden-heading"
                data-toggle="collapse"
                onClick={() => handleNavigation("/blockchain")}
              >
                BLOCKCHAIN
              </div>
              <div id="services" className="collapse">
                {servicesOptions.map((s, index) => (
                  <div className="collapse-option" key={index}>
                    {s.label}
                  </div>
                ))}
              </div>
              <div
                href="#works"
                className="golden-heading"
                data-toggle="collapse"
              >
                WORKS <img src={arrow} alt="" />
              </div>
              <div id="works" className="collapse">
                {ourWorksOptions.map((s, index) => (
                  <div
                    className="collapse-option"
                    key={index}
                    onClick={() => handleNavigation(`/our-works/${s.path}`)}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
              <div
                className="golden-heading"
                onClick={() => handleNavigation("/blog")}
              >
                BLOGS
              </div>
              <div
                className="golden-heading"
                onClick={() => handleNavigation("/contact-us")}
              >
                CONTACT US
              </div>
            </div>
          </section>
          <section className="left-section">
            <div className="menu-address-component">
              <div>520 WEST 28TH STREET</div>
              <div>SUIT 31</div>
              <div>NEWYORK NY10001</div>
              <div style={{ marginTop: "10px" }}>+1 (646) 490-0772 (USA)</div>
              <div style={{ marginTop: "10px" }}>
                <u>INFO@IPSWAP.AI</u>
              </div>
              <div className="follow-us-component">Follow us</div>
              <MediaLinks background="#E5E5E5" />
            </div>
          </section>
        </div>
      </section>
    </Fade>
  );
};
export default Menu;
