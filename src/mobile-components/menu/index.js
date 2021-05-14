import React from "react";
import { useHistory } from "react-router-dom";

import arrow from "../../images/arrow-down.svg";

import { servicesOptions, ourWorksOptions } from "../../utils/helpers";

import "./styles.scss";

const Menu = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <section className="mobile-menu-wrapper">
      <div className="menu-body">
        <div>
          <div
            className="mobile-golden-heading"
            onClick={() => handleNavigation("/about-us")}
          >
            ABOUT US
          </div>
          <div
            href="#services"
            className="mobile-golden-heading"
            data-toggle="collapse"
          >
            SERVICES <img src={arrow} alt="" />
          </div>
          <div id="services" className="collapse">
            {servicesOptions.map((s, index) => (
              <div
                className="collapse-option"
                key={index}
                onClick={() => handleNavigation("/services/blockchain")}
              >
                {s.label}
              </div>
            ))}
          </div>
          <div
            href="#works"
            className="mobile-golden-heading"
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
            className="mobile-golden-heading"
            onClick={() => handleNavigation("/blog")}
          >
            BLOGS
          </div>
          <div
            className="mobile-golden-heading"
            onClick={() => handleNavigation("/contact-us")}
          >
            CONTACT US
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
