import React from "react";
import { useHistory, useParams } from "react-router-dom";
import PictureFrame from "../common/picture-tag";
import ourworkspic1 from "../../images/works-pic1.png";
import ourworkspic2 from "../../images/works-pic2.png";
import ourworkspic3 from "../../images/works-pic3.png";
import ourworkspic4 from "../../images/works-pic4.png";
import ourworkspic5 from "../../images/works-pic5.png";
import ourworkspic6 from "../../images/works-pic6.png";
import ourworkspic7 from "../../images/works-pic7.png";
import ourworkspic8 from "../../images/works-pic8.png";
import ourworkspic9 from "../../images/works-pic9.png";
import arrow from "../../images/arrow.svg";

import "./styles.scss";

const OurWorks = () => {
  const history = useHistory();
  const params = useParams();
  const { work } = params;

  const showData = () => {
    history && history.push(`/our-works/${work}`);
  };
  return (
    <div className="our-works--main-container">
      <section className="our-works--main-container">
        <img className="our-works--img" src={arrow} alt="arrow" />
        <div className="our-works--headings">
          <div className="our-works--text">Blockchain</div>
          <div className="our-works--text">Artificial Intelligence</div>
          <div className="our-works--text">Web development</div>
          <div className="our-works--text">Mobile development</div>
          <div className="our-works--text">connected devices (iot)</div>
        </div>
      </section>
      <section className="our-works--pictures-tag">
        <PictureFrame
          pic={ourworkspic4}
          tag="bmw-mobile app"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic2}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic3}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic5}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic1}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic6}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic7}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic8}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
        <PictureFrame
          pic={ourworkspic9}
          tag="Smart Drone - SYMA"
          onclick={showData}
        />
      </section>
    </div>
  );
};
export default OurWorks;
