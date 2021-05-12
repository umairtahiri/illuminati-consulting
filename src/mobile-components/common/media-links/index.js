import React from "react";
import belogo from "../../../images/belogo.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import star from "../../../images/star.svg";
import twitter from "../../../images/twitter.svg";

import "./styles.scss";

const MediaLinks = (props) => {
  const { background } = props;
  return (
    <div className="medialinks--main-container">
      <div className="medialinks--container" style={{ background }}>
        <img src={twitter} alt="twitter" />
      </div>
      <div className="medialinks--container" style={{ background }}>
        <img src={belogo} alt="belogo" />
      </div>
      <div className="medialinks--container" style={{ background }}>
        <img src={star} alt="star" />
      </div>
      <div className="medialinks--container" style={{ background }}>
        <img src={facebook} alt="facebook" />
      </div>
      <div className="medialinks--container" style={{ background }}>
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
};
export default MediaLinks;
