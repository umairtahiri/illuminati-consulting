import React, { useState } from "react";

import ShadowHeading from "../../common/shadow-heading";

import "./styles.scss";

const Services = () => {
  const [showServices, setshowServices] = useState(false);
  const [moreButton, setmoreButton] = useState(true);
  const toggleButton = () => {
    setshowServices(!showServices);
  };
  return (
    <div className="mobile-services--main-container">
      <div className="services--details-container">
        <div className="services--header">
          <ShadowHeading text="our services" />
          <div className="button-container">
            <button style={{ margin: "30px 0" }} className="mobile-button">
              TECH DOMAINS
            </button>
          </div>
        </div>
        <div className="services--text">
          <div className="mobile-golden-heading">CONNECTED DEVICES (IOT)</div>
          <ul className="services--text-lists">
            <li>Provide a safe place for shared information to land</li>
            <li>Share information seamlessly among different platforms</li>
            {/* <li>Strategic planning & advisory</li>
              <li>Solution architecture & infrastructure planning</li>
              <li>Operational assessment and benchmarking</li>
              <li>Rollout & testing roadmappings</li> */}
          </ul>
        </div>

        <div className="services--text">
          <div className="mobile-golden-heading">
            FULL-CYCLE SOLUTION ENGINEERING
          </div>
          <ul className="services--text-lists">
            <li>Build, design, and engineer a website</li>
            <li>Troubleshoot problems as they arise</li>
            <li>Markup writing and coding</li>
            {/* <li>Enabling seamless cross-platform experience</li>
              <li>Creating intuitive and clean UIs</li>
              <li>Designing custom animations and effects</li>
              <li>
                Apple Human Interface and Google Material Design compliance
              </li> */}
          </ul>
        </div>
        {moreButton && (
          <div className="button-container">
            <button
              onClick={() => {
                toggleButton();
                setmoreButton(false);
              }}
              className="mobile-button"
            >
              more
            </button>
          </div>
        )}
        {showServices && (
          <div>
            <div className="services--text">
              <div className="mobile-golden-heading">
                ARTIFICIAL INTELLIGENCE
              </div>
              <ul className="services--text-lists">
                <li>Streamline daily tasks</li>
                <li>Implement state-of-the-art AI techniques</li>
                <li>Minimize tasks</li>
                {/* <li>Mobile crypto wallet app development</li>
              <li>Mobile game app development</li>
              <li>Mobile apps for the IoT and embedded systems</li> */}
              </ul>
            </div>

            <div className="services--text">
              <div className="mobile-golden-heading">
                BLOCKCHAIN DEVELOPMENT
              </div>
              <ul className="services--text-lists">
                <li>Save your transactions</li>
                <li>Provide top-of-the-line security</li>
                <li>Enable secure transactions</li>
                {/* <li>Composable architecture implementation</li>
              <li>Loose coupling upon microservices & well defined APIs</li>
              <li>Low-code development, rapid app delivery (RAD)</li>
              <li>AI techniques implementation</li> */}
              </ul>
            </div>
            {/* <div className="services--text">
              <div className="mobile-golden-heading">Quality Assurance</div>
              <ul className="services--text-lists">
                <li>QA and testing strategy enablement</li>
                <li>End-to-end manual testing</li>
                <li>Integration, functional, and UI testing</li>
                <li>Load and performance testing</li>
                <li>Automation mobile, web, and API testing</li>
                <li>Continuous delivery and integration</li>
                <li>Tool-based issue tracking and test management</li>
              </ul>
            </div> */}
            <div className="button-container">
              <button
                onClick={() => {
                  toggleButton();
                  setmoreButton(true);
                }}
                className="mobile-button"
              >
                Less
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Services;
