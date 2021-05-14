import React from "react";

import goldenStar from "../../../images/goldenStar.png";
import whiteStar from "../../../images/whiteStar.png";
import leftWhiteArrow from "../../../images/leftWhiteArrow.png";
import rightWhiteArrow from "../../../images/rightWhiteArrow.png";
import mobileReviewFrame from "../../../images/mobileReviewFrame.png";
import clientPic from "../../../images/clientPic.png";
import "./styles.scss";

const Reviews = () => {
  return (
    <div className="mobile-reviews-main-container">
      <div className="review-client-details">
        <div className="overlay">
          <img
            className="mobileReviewFrame"
            alt="mobileReviewFrame"
            src={mobileReviewFrame}
          />
          <div className="client-details-container">
            <div className="mobile-golden-heading client-name">
              Morgan Rosenblum
            </div>
            <div className="client-designation">CEO. Darkrose Studio</div>
            <div className="client-review">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </div>
            <div className="stars-container">
              <img alt="goldenStar" src={goldenStar} />
              <img alt="goldenStar" src={goldenStar} />
              <img alt="goldenStar" src={goldenStar} />
              <img alt="goldenStar" src={goldenStar} />
              <img alt="whiteStar" src={whiteStar} />
            </div>
          </div>
        </div>
        <img className="client-pic" alt="client" src={clientPic} />
        <div className="review-right-arrow-conatiner">
          <img alt="rightWhiteArrow" src={rightWhiteArrow} />
        </div>
        <div className="review-left-arrow-conatiner">
          <img alt="leftWhiteArrow" src={leftWhiteArrow} />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
