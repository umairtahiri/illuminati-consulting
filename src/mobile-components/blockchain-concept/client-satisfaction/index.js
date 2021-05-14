import React from "react";

import "./styles.scss";
import clutch from "../../../images/clutch.png";
import mobileSatisfaction2 from "../../../images/mobileSatisfaction2.png";

const ClientSatisfaction = () => {
  return (
    <div className="mobile-client-satisfaction-main-container">
      <div className="mobile-satisfaction-img-container">
        <img
          src={mobileSatisfaction2}
          alt=""
          className="mobile-satisfaction-img"
        />

        <div className="overlay">
          <div
            className="mobile-golden-heading"
            style={{ textAlign: "center" }}
          >
            Client satisfaction is our fundamental value
          </div>
          <div className="client-satisfaction-img-container">
            <img alt="clutch" src={clutch} className="clutch" />
            <img className="clutch" alt="clutch" src={clutch} />
            <img alt="clutch" src={clutch} className="clutch" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientSatisfaction;
