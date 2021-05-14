import React from "react";
import "./styles.scss";
import mobilehypeledgerDivider from "../../../images/mobilehypeledgerDivider.png";

const Hyperledger = () => {
  return (
    <div className="mobile-hyperledger-main-container">
      <div className="hyperledger-side1">
        <div className="hyperledger-title golden-heading">
          Shape up via Hyperledger blockchain infrastructure
        </div>
        <div className="hyperledger-text1">
          What makes Hyperledger applications so compelling? It’s that they get
          complex business tasks done, nice and easy. Most enterprise workflows
          require loads of dependencies and tons of stakeholders. Why waste
          valuable man-hours switching between extranets and EMSs? Let
          Hyperledger apps work their magic:
        </div>
      </div>
      <div className="mobile-hyperledger-divider">
        <img src={mobilehypeledgerDivider} alt="mobilehypeledgerDivider" />
      </div>
      <div className="hyperledger-side2">
        <div className="hyperledger-list-text">
          <ul>
            <li>Data integrity and consistency</li>
            <li>Trusted environment</li>
            <li>Ruling out human error and micromanagement</li>
            <li>No middlemen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Hyperledger;
