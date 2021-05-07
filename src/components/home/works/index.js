import React from "react";

import pic1 from "../../../images/works-pic1.png";
import pic2 from "../../../images/works-pic2.png";
import pic3 from "../../../images/works-pic3.png";
import SocialMedia from "../../../images/social-media.png";

import "./styles.scss";

const Works = () => {
  return (
    <div className="works--main-container">
      <header className="golden-heading">works</header>
      <div className="works--pictures">
        <div className="picture-area">
          <img className="picture" src={pic1} alt="pic1" />
          <div className="tag">Smart Drone - SYMA</div>
        </div>
        <div className="picture-area" style={{ margin: "0 10px" }}>
          <img className="picture" src={pic2} alt="pic2" />
          <div className="tag">Smart Drone - SYMA</div>
        </div>
        <div className="picture-area">
          <img className="picture" src={pic3} alt="pic3" />
          <div className="tag">Smart Drone - SYMA</div>
        </div>
      </div>
      <div className="social-media-container">
        <img src={SocialMedia} alt="social media" />
      </div>
    </div>
  );
};
export default Works;
