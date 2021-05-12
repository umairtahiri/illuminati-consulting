import React from "react";

import techLogo1 from "../../../images/techLogo1.png";
import techLogo2 from "../../../images/techLogo2.png";

import "./styles.scss";

const TechnologyPlatforms = () => {
  return (
    <div className="tech-platforms-main-container">
      <div className="golden-heading tech-platforms-title">
        Blockchain Technology Platforms
      </div>
      <div className="tech-platforms-description">
        We’re always serious about hand-picking the best combination of
        platforms and frameworks for your solution. Our committed team keeps
        abreast of blockchain novelties and security techniques, meaning our
        deliverables are future-proof, scalable, and uncompromisingly safe.
      </div>
      <img src={techLogo1} alt="techLogo1" className="tech-platforms-logos" />
      <div
        className="golden-heading tech-platforms-title"
        style={{ marginTop: "100px" }}
      >
        Technology Stack
      </div>
      <img src={techLogo2} alt="techLogo2" className="tech-platforms-logos" />
    </div>
  );
};
export default TechnologyPlatforms;
