import React, { useRef } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Carousel from "react-elastic-carousel";
// import Slider from "infinite-react-carousel";

import arrow from "../../images/arrow.svg";

import "./styles.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 4 },
];

const InfiniteCarousel = ({ children }) => {
  let carouselRef = useRef();

  return (
    <>
      <div className="carousel-header">
        <div className="arrow-container">
          <div>
            <img
              className="slide-btn-left"
              src={arrow}
              alt=""
              onClick={() => carouselRef.slidePrev()}
            />
          </div>
          <div>
            <img
              className="slide-btn-right"
              src={arrow}
              alt=""
              onClick={() => carouselRef.slideNext()}
            />
          </div>
        </div>

        <Carousel
          className="infinite-carousel"
          breakPoints={breakPoints}
          enableSwipe={true}
          showArrows={false}
          slidesToShow={3}
          pagination={false}
          ref={(ref) => (carouselRef = ref)}
        >
          {children}
        </Carousel>
      </div>
    </>
  );
};

export default InfiniteCarousel;
