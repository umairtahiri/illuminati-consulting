import React from "react";
import "./styles.scss";
import divider from "../../../images/divider.png";
import mobileBlockchainHorizontalLine from "../../../images/mobileBlockchainHorizontalLine.png";

const Achievements = () => {
  return (
    <div className="mobile-achievements-main-container">
      <div className="achievements-banner-container">
        <div className="mobile-golden-heading achivement-page-title">
          countable blockchain achievements
        </div>
        <div className="achievemnets-details-container">
          <div className="column1">
            <div className="achievements-details">
              <div className="mobile-golden-heading number">13</div>
              <div className="mobile-golden-heading text">
                Years of handling clients’ challenges
              </div>
            </div>

            <div className="achievements-details">
              <div className="mobile-golden-heading number">5</div>
              <div className="mobile-golden-heading text">
                sto projects successfully launched
              </div>
            </div>

            <div className="achievements-details">
              <div className="mobile-golden-heading number">50</div>
              <div className="mobile-golden-heading text">
                blockchain projects
              </div>
            </div>
          </div>
          <img src={divider} alt="divider" className="vertical-divider" />
          <div className="column1">
            <div className="achievements-details">
              <div className="mobile-golden-heading number">$500m+</div>
              <div className="mobile-golden-heading text">
                raised via our blockchain slution
              </div>
            </div>

            <div className="achievements-details">
              <div className="mobile-golden-heading number">20+</div>
              <div className="mobile-golden-heading text">
                institutional-grade project
              </div>
            </div>

            <div className="achievements-details">
              <div className="mobile-golden-heading number">7</div>
              <div className="mobile-golden-heading text">
                years of exprience in blockchain development
              </div>
            </div>
          </div>
        </div>
        <img
          src={mobileBlockchainHorizontalLine}
          alt=""
          className="upper-divider"
        />
        <img
          src={mobileBlockchainHorizontalLine}
          alt=""
          className="lower-divider"
        />
      </div>
      <div className="achievemnets-cards-container">
        <div className="golden-card">
          <div className="golden-card-title">
            Revamp Your Business Networks with Hyperledger dApps
          </div>
          <div className="golden-card-description">
            We’re here to build you a solution that brings together massive
            enterprise data and transactions while reducing the cost of
            integrating physical objects into business processes. By supporting
            open protocols on a global scale, dApps provide a trusted network
            and a full-blown ecosystem for companies to evolve.
          </div>
        </div>

        <div className="white-card">
          <div className="white-card-title mobile-golden-heading">
            Here’s how our Hyperledger applications can help your enterprise
          </div>
          <div className="white-card-list-container">
            <div className="list-container">
              <ul className="list-style">
                <li>Traceable transaction identity</li>
                <li>Authentic goods origin</li>
                <li>Consolidated databases</li>
                <li>Consensus-powered workflow control</li>
                <li>Regulated commercial activities</li>
                <li>Minimized fraud risks</li>
                <li>Need-to-know basis data</li>
                <li>Digital keys & sensitive data protection</li>
                <li>On-demand data retrieval</li>
              </ul>
            </div>
            <div className="list-container">
              <ul className="list-style">
                <li>Automated doc and payment processing</li>
                <li>Reduced man-hours and human error</li>
                <li>Streamlined ROI, better business agility</li>
                <li>Modular architecture</li>
                <li>Enhanced performance and scalability</li>
                <li>Accurate and reliable business model</li>
                <li>Community support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
