import React from "react";
import { useHistory, useParams } from "react-router-dom";

import PictureFrame from "../common/picture-frame";

import ourWorksPic2 from "../../images/works-pic2.png";
import ourWorksPic3 from "../../images/works-pic3.png";
import ourWorksPic4 from "../../images/works-pic4.png";

import arrow from "../../images/right-arrow.svg";

import { ourWorksOptions } from "../../utils/helpers";
import "./styles.scss";

const OurWorks = () => {
  const history = useHistory();
  const params = useParams();
  const { work } = params;

  const openDetails = () => {
    history && history.push(`/our-works/${work}/details`);
  };

  return (
    <div className="our-works--main-container">
      <section className="our-works--links-container">
        {ourWorksOptions.map((o, ind) => {
          return (
            <div className="link-container" key={ind}>
              <div className="arrow-container">
                <img
                  style={{ display: work === o.path ? "block" : "none" }}
                  className="selected-arrow"
                  src={arrow}
                  alt="arrow"
                />
              </div>
              <div
                className={
                  work === o.path ? "link-label selected-option" : "link-label"
                }
                onClick={() => history.push(`/our-works/${o.path}`)}
              >
                {o.label}
              </div>
            </div>
          );
        })}
      </section>
      <section className="our-works--pictures-frame-container">
        <PictureFrame
          pic={ourWorksPic2}
          tag="Smart Drone - SYMA"
          onclick={openDetails}
        />
        <PictureFrame
          pic={ourWorksPic3}
          tag="Smart Drone - SYMA"
          onclick={openDetails}
        />
        <PictureFrame
          pic={ourWorksPic4}
          tag="bmw-mobile app"
          onclick={openDetails}
        />
      </section>
    </div>
  );
};
export default OurWorks;
