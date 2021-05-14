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
          Always at the frontline of blockchain innovation, we’ve grown our DLT
          muscle to be capable of building an entire decentralized ecosystem
          from the ground up. Time and time again, our solutions help clients
          streamline business workflows, establish rock-solid safety, and boost
          ROI.
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
