import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

import "./styles.scss";

const AboutUs = () => {
  return (
    <div>
      <div className="header-main-container">
        <img src={logo} alt="logo" />
        <div className="header-button-container">
          <button className="button">GET IN TOUCH</button>
          <img className="menu-btn" src={menu} alt="menu" />
        </div>
      </div>
      <section className="about-us-page">
        <div className="about-us-golden-heading">
          <div className="golden-heading">
            Open communication, equality and loyalty are the foundation of ips
            wap culture.
          </div>
        </div>
        <div className="about-us-page-information">
          PixelPlex is a company with rich history, talented experts, strong
          team spirit and high moral values. Each representative of our staff
          contributes to PixelPlex legacy and long history of supporting
          innovation and developing outstanding products.
        </div>
        <div className="about-us-page-information">
          PixelPlex encourages inclusion and diversity. Team members feel
          supported and their ideas are cherished by the company. This creates a
          healthy working environment with unity and loyalty as primary values.
        </div>
      </section>
      <section className="about-us-photo-component">
        <div className="about-us-photo-component-text-area">
          <div className="golden-heading">MEET THE TEAM</div>
          <div style={{ margin: "20px" }}>
            Meet the leaders and talents who make the decentralized future a
            reality
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
