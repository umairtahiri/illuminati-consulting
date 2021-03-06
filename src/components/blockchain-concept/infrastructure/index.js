import React from "react";
import goldenswirls from "../../../images/golden-swirls.png";
import bitcin from "../../../images//bitcoin-1.png";
import "./styles.scss";

const Infrastructure = () => {
  return (
    <div className="infrastructure--main-container">
      <div className="infrastructure-banner-container">
        <section className="infrastructure-banner">
          <div className="infrastructure-text-container">
            <h1 className="golden-heading">
              We build enterprise blockchain infrastructures from A to Z
            </h1>
            <p className="detail">
              From diagnosing bottlenecks and process inefficiencies to building
              custom apps and deploying off-the-shelf software packages, our
              team can nail down any tech challenge. We’ll stay by your side to
              make sure that your solution runs like clockwork.
            </p>
          </div>
        </section>
        <img className="golden-swirls" src={goldenswirls} alt="goldenSwirls" />
        <img src={bitcin} className="bitcoin" alt="bitcoin" />
      </div>
    </div>
  );
};

export default Infrastructure;
