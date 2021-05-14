import React from "react";

import mobileTechnologyLogo1 from "../../../images/mobileTechnologyLogo1.png";
import mobileTechnologyLogo2 from "../../../images/mobileTechnologyLogo2.png";
import mobileTechnologyLogo3 from "../../../images/mobileTechnologyLogo3.png";

import "./styles.scss";

const TechnologyPlatforms = () => {
  return (
    <div className="mobile-tech-platforms-main-container">
      <div className="mobile-golden-heading">
        Blockchain Technology Platforms
      </div>
      <div className="tech-platforms-description">
        We’re always serious about hand-picking the best combination of
        platforms and frameworks for your solution. Our committed team keeps
        abreast of blockchain novelties and security techniques, meaning our
        deliverables are future-proof, scalable, and uncompromisingly safe.
      </div>
      <div className="texhlogo-container1">
        <img
          src={mobileTechnologyLogo1}
          alt="techLogo1"
          className="tech-platforms-logos"
        />
        <img
          src={mobileTechnologyLogo2}
          alt="techLogo1"
          className="tech-platforms-logos"
        />
      </div>
      <div className="mobile-golden-heading" style={{ marginTop: "60px" }}>
        Technology Stack
      </div>
      <div className="texhlogo-container1">
        <img
          src={mobileTechnologyLogo3}
          alt="techLogo2"
          className="tech-platforms-logos"
        />
      </div>
    </div>
  );
};
export default TechnologyPlatforms;
