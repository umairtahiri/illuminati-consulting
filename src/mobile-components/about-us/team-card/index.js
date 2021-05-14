import React from "react";

import "./styles.scss";

const AboutUs = ({ member }) => {
  const { img, name, designation } = member;
  return (
    <div className="mobile-team-card">
      <img src={img} alt="" className="profile-pic" />
      <div className="mobile-golden-heading">{name}</div>
      <div className="designation">{designation}</div>
    </div>
  );
};
export default AboutUs;
