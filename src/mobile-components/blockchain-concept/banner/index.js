import React from "react";
import globe from "../../../images/globe.png";

import "./styles.scss";

const Banner = () => {
  return (
    <section className="mobile-blockchain-banner--main-container">
      <div className="bg-container">
        <h1 className="mobile-golden-heading">
          Full-Stack Blockchain Development Services
        </h1>
        <h3 className="sub-heading">
          A powerful trigger for your business growth
        </h3>
        <p className="details">
          Once you consider our enterprise blockchain company to help you build
          a market-specific decentralized app, you’re on the right track. We’re
          here to deliver business solutions that offer more than just data
          security — they are about complete workflow control, saved man-hours,
          and rock-solid quality of goods and services.
        </p>
        <img src={globe} className="img-container" alt="" />
      </div>
    </section>
  );
};

export default Banner;
