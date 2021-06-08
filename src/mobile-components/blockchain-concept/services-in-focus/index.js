import React from "react";

import Card from "./card";
import Carousel from "../../carousel";

import { servicesInFocusList } from "../../../utils/helpers";

import "./styles.scss";

const ServicesInFocus = () => {
  return (
    <section className="mobile-services-in-focus--main-container">
      <header>
        <h1 className="mobile-golden-heading">Our services in focus</h1>
        <p className="details">
          Blockchain is always changing, which is why we stay on top of trends,
          strategies, and techniques to ensure that we’re constantly providing
          you with the most innovative solutions. Boost your ROI and dominate
          the cryptocurrency market.
        </p>
      </header>
      <div className="cards-wrapper">
        <Carousel position="up">
          {servicesInFocusList.map((s) => (
            <Card title={s.title} detail={s.detail} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesInFocus;
