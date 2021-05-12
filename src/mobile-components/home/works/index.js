import React from "react";

import ShadowHeading from "../../common/shadow-heading";
import PictureFrame from "../../common/picture-frame";

import pic1 from "../../../images/works-pic1.png";
import pic2 from "../../../images/works-pic2.png";
import pic3 from "../../../images/works-pic3.png";
import SocialMedia from "../../../images/social-media.png";

import "./styles.scss";

const Works = () => {
  return (
    <div className="works--main-container">
      <ShadowHeading text="works" />
      <div className="works--pictures">
        <PictureFrame pic={pic1} tag="Smart Drone - SYMA" />
        <PictureFrame pic={pic2} tag="Smart Drone - SYMA" />
        <PictureFrame pic={pic3} tag="Smart Drone - SYMA" />
      </div>
      <div className="social-media-container">
        <img src={SocialMedia} alt="social media" />
      </div>
    </div>
  );
};
export default Works;
