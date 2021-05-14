import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import arrow from "../../images/arrow.svg";

import "./styles.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 4 },
];

const InfiniteCarousel = ({ children, position }) => {
  let carouselRef = useRef();

  return (
    <>
      <div className="carousel-header">
        {position === "up" && (
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
        )}

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
        {position === "down" && (
          <div className="arrow-container" style={{ marginTop: "0" }}>
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
        )}
      </div>
    </>
  );
};

export default InfiniteCarousel;
