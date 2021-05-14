import React from "react";
import "./styles.scss";
import mobileBottomWave from "../../../images/mobileBottomWave.png";
import enterpriseBitcoin from "../../../images/enterpriseBitcoin.png";

const Enterprise = () => {
  return (
    <div className="mobile-enterprise-main-container">
      <div className="enterprise-banner-container">
        <div className="enterprise-banner-text-container">
          <div className="mobile-golden-heading enterprise-page-title">
            Blockchain’s underlying magic unlocks enterprise progress
          </div>
          <div className="enterprise-page-description">
            Decentralized ledger technologies build a reliable environment for
            companies to communicate, thrive, and innovate within. To help you
            develop into a game changer in your domain, our enterprise
            blockchain company offers you advanced services relying on its
            full-blown R&D, business analytics, and engineering powerhouse.
          </div>
          <div className="enterprise-cards-container">
            <div className="enterprise-details">
              <div className="mobile-golden-heading text">Social Media</div>
              <div className="cards-list">
                <ul>
                  <li>Digital identity verification</li>
                  <li>Author rights protection</li>
                  <li>Freedom of speech & information access</li>
                  <li>In-app token implementation</li>
                  <li>Unbiased licensing & royalty management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="button">more</button>
          </div>
        </div>
        <img
          className="waves-top-right"
          alt="enterpriseWaves"
          src={mobileBottomWave}
        />
      </div>
      <div className="enterprise-bitcoin-container">
        <div className="mobile-golden-heading bitcoin-title">
          We adapt enterprise blockchain to suit your business model
        </div>
        <div className="enterprise-bitcoin-details">
          <img
            alt="enterprise-bitcoin"
            className="enterprise-bitcoin"
            src={enterpriseBitcoin}
          />
          <div className="bitcoin-text">
            In case it’s challenging for you to get Hyperledger Fabric up and
            running, PixelPlex has got your back. On top of our development
            package, we offer blockchain infrastructure deployment for you to
            easily build Hyperledger dApps. We’ll gather all the operational and
            functional requirements to launch your engineering ecosystem upon a
            consistent API and external IP address.
          </div>
          <div className="bitlcoin-label">
            Here’s how we configure Hyperledger Fabric for companies
          </div>
          <div className="bitcoin-list-text">
            <ul>
              <li>
                Consulting on startup optimization of Hyperledger Fabric
                blockchain networks
              </li>
              <li>
                Environment orchestration (preparation, configuration,
                management, servers and apps coordination)
              </li>
              <li>
                Peer network orchestration (peers and orderers configuration,
                deployment chaincode, certification management)
              </li>
              <li>
                Network configuration (DNS, load balancing, private and public
                networks)
              </li>
              <li>
                Containerization (docker images configuration, docker compose
                and/or Kubernetes manifest)
              </li>
              <li>
                Monitoring setup, continuous integration and continuous delivery
                (CI/CD) setup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enterprise;
