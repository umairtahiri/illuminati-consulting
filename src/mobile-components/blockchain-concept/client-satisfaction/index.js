import React from "react";

import "./styles.scss";
import clutch from "../../../images/clutch.png";

const ClientSatisfaction = () => {
  return (
    <div className="client-satisfaction-main-container">
      <div className="overlay">
        <div className="client-satisfaction-title golden-heading">
          Client satisfaction is our fundamental value
        </div>
        <div className="client-satisfaction-img-container">
          <img alt="clutch" src={clutch} />
          <img style={{ margin: "0 30px" }} alt="clutch" src={clutch} />
          <img alt="clutch" src={clutch} />
        </div>
      </div>
    </div>
  );
};
export default ClientSatisfaction;
