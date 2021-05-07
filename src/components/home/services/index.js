import React from "react";

import "./styles.scss";

const Services = () => {
  return (
    <div className="services--main-container">
      <div className="services--details-container">
        <div className="services--details">
          <div className="services--header">
            <header
              className="heading"
              style={{
                maxWidth: "199px",
                fontSize: "40px",
                lineHeight: "48px",
              }}
            >
              our services
            </header>
            <button className="button">TECH DOMAINS</button>
          </div>
          <div className="services--text">
            <div className="heading">Customer Engagement via UI/UX</div>
            <ul className="services--text-lists">
              <li>Business case analysis</li>
              <li>Project scoping and phase mapping</li>
              <li>Strategic planning & advisory</li>
              <li>Solution architecture & infrastructure planning</li>
              <li>Operational assessment and benchmarking</li>
              <li>Rollout & testing roadmappings</li>
            </ul>
          </div>
        </div>
        <div className="services--details">
          <div className="services--text">
            <div className="heading">Customer Engagement via UI/UX</div>
            <ul className="services--text-lists">
              <li>Building mockups, wireframes, and clickable prototypes</li>
              <li>Human-centered design</li>
              <li>Usability analysis and metrics Implementation</li>
              <li>Enabling seamless cross-platform experience</li>
              <li>Creating intuitive and clean UIs</li>
              <li>Designing custom animations and effects</li>
              <li>
                Apple Human Interface and Google Material Design compliance
              </li>
            </ul>
          </div>
          <div className="services--text">
            <div className="heading">Customer Engagement via UI/UX</div>
            <ul className="services--text-lists">
              <li>iOS app development</li>
              <li>Android app development</li>
              <li>Cross-platform mobile software development</li>
              <li>Mobile crypto wallet app development</li>
              <li>Mobile game app development</li>
              <li>Mobile apps for the IoT and embedded systems</li>
            </ul>
          </div>
        </div>
        <div className="services--details">
          <div className="services--text">
            <div className="heading">Customer Engagement via UI/UX</div>
            <ul className="services--text-lists">
              <li>Consumer-oriented software development</li>
              <li>High usability, responsive software design</li>
              <li>Cloud computing, horizontal scaling enablement</li>
              <li>Composable architecture implementation</li>
              <li>Loose coupling upon microservices & well defined APIs</li>
              <li>Low-code development, rapid app delivery (RAD)</li>
              <li>AI techniques implementation</li>
            </ul>
          </div>
          <div className="services--text">
            <div className="heading">Customer Engagement via UI/UX</div>
            <ul className="services--text-lists">
              <li>QA and testing strategy enablement</li>
              <li>End-to-end manual testing</li>
              <li>Integration, functional, and UI testing</li>
              <li>Load and performance testing</li>
              <li>Automation mobile, web, and API testing</li>
              <li>Continuous delivery and integration</li>
              <li>Tool-based issue tracking and test management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
