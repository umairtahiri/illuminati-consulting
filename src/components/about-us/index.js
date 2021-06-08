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
        <div className="golden-heading" style={{ textAlign: "center" }}>
          A TRANSFORMATIVE TEAM OF IPS WAP CULTURE: PRIORITIZING EQUALITY AND
          LOYALTY.
        </div>
        <div className="details--text">
          Meet our team! We have carefully curated a team of rising stars and
          brilliant professionals to bring you the best knowledge and education
          on the market. Our team is diverse in their backgrounds and education,
          and together, we’ve built a well-oiled machine ready to take on
          technology.
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
