import React from "react";

import MemberCard from "./team-card";

import rightArrow from "../../images/right-arrow.svg";
import leftArrow from "../../images/left-arrow.svg";

import { teamMembers } from "../../utils/helpers";

import "./styles.scss";

const AboutUs = () => {
  return (
    <div className="about-us--main-container">
      <section className="about-us--general-details">
        <div className="golden-heading">
          Open communication, equality and loyalty are the foundation of ips wap
          culture.
        </div>
        <div className="details--text">
          PixelPlex is a company with rich history, talented experts, strong
          team spirit and high moral values. Each representative of our staff
          contributes to PixelPlex legacy and long history of supporting
          innovation and developing outstanding products.
        </div>
        <div className="details--text">
          PixelPlex encourages inclusion and diversity. Team members feel
          supported and their ideas are cherished by the company. This creates a
          healthy working environment with unity and loyalty as primary values.
        </div>
      </section>
      <section className="about-us-photo-gallery">
        <header className="photo-gallery--heading">
          <div className="golden-heading" style={{ textAlign: "center" }}>
            MEET THE TEAM
          </div>
          <div className="description">
            Meet the leaders and talents who make the decentralized future a
            reality
          </div>
        </header>
        <section className="cards-list">
          {teamMembers.map((m) => (
            <MemberCard member={m} />
          ))}
        </section>
        <section className="arrow-container">
          <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </section>
      </section>
    </div>
  );
};
export default AboutUs;
