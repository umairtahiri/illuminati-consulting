import React from "react";

import ShadowHeading from "../../common/shadow-heading";
import PictureFrame from "../../common/picture-frame";

import pic1 from "../../../images/works-pic1.png";
import pic2 from "../../../images/works-pic2.png";
import pic3 from "../../../images/works-pic3.png";
import mobileSocialmedia from "../../../images/mobileSocialmedia.png";
import Carousel from "../../carousel";

import "./styles.scss";

const Works = () => {
  return (
    <div className="mobile-works--main-container">
      <ShadowHeading text="works" padding="30px" />
      <div className="works--pictures">
        <Carousel>
          <PictureFrame pic={pic1} tag="Smart Drone - SYMA" />
          <PictureFrame pic={pic2} tag="Smart Drone - SYMA" />
          <PictureFrame pic={pic3} tag="Smart Drone - SYMA" />
        </Carousel>
      </div>
      <div className="social-media-container">
        <img src={mobileSocialmedia} alt="social media" />
      </div>
    </div>
  );
};
export default Works;
