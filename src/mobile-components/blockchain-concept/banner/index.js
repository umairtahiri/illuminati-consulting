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
        <h3 className="sub-heading">Take your business to new heights.</h3>
        <p className="details">
          Are you looking to overcome IT challenges and provide brilliant
          blockchain solutions? Look no further than our team of professionals
          and blockchain experts. We provide a rock-solid take on the blockchain
          industry.
        </p>
        <img src={globe} className="img-container" alt="" />
      </div>
    </section>
  );
};

export default Banner;
