import React from "react";

import pic1 from "../../../images/works-pic1.png";
import pic2 from "../../../images/works-pic2.png";
import pic3 from "../../../images/works-pic3.png";

import "./styles.scss";

const Works = () => {
  return (
    <div className="works--main-container">
      <header className="heading">works</header>
      <div className="works--pictures">
        <img className="works--picture-style" src={pic1} alt="pic1" />
        <img className="works--picture-style" src={pic2} alt="pic2" />
        <img className="works--picture-style" src={pic3} alt="pic3" />
      </div>
    </div>
  );
};
export default Works;
