import React from "react";
import { useHistory } from "react-router-dom";
import car from "../../../images/car.png";

import PictureFrame from "../../common/picture-frame";

import angular from "../../../images/angular.svg";
import bluetooth from "../../../images/bluetooth.svg";
import flower from "../../../images/flower.svg";
import nodejs from "../../../images/nodejs.svg";
import xavier from "../../../images/xavier.svg";
import arrow from "../../../images/right-arrow.svg";
import ourworkspic7 from "../../../images/works-pic7.png";
import ourworkspic8 from "../../../images/works-pic8.png";
import ourworkspic9 from "../../../images/works-pic9.png";

import "./styles.scss";

const OurWorksInternal = () => {
  const history = useHistory();
  return (
    <div className="internal-works--main-container">
      <section
        className="internal-works--header"
        onClick={() => history.goBack()}
      >
        <img className="internal-works-back-arrow" src={arrow} alt="arrow" />
        <header className="golden-heading">back</header>
      </section>
      <section className="banner-picture-frame">
        <img className="picture-frame-img" src={car} alt="pic" />
        <div className="picture-frame-tag">Smart Drone - SYMA</div>
      </section>
      <section className="internal-works--details">
        <div className="internal--works--column1">
          <div className="inernal--works-text1">
            <div className="golden-heading">
              CONNECTED DEVICES (IOT) SERVICES FOR BMW DEALER SHOWROOM SERVICES
            </div>
            <div className="description">
              Working with one of the biggest names in the car business, we
              streamlined their processes with our Connected Devices (IOT)
              Services.
            </div>
          </div>
          <div className="inernal--works-text1">
            <div className="golden-heading">Solutions</div>
            <div className="description">
              Our team of experts worked closely to present an end-to-end IoT
              solution powered by iBeacon technology. We developed an
              interactive dashboard to hold information that managers and
              employees had to access.
            </div>
          </div>
          <div className="inernal--works-text1">
            <div className="golden-heading">Technologies used:</div>
            <div className="internal--works-logo-container">
              <img className="logo-style" src={angular} alt="angular" />
              <img className="logo-style" src={xavier} alt="xavier" />
              <img className="logo-style" src={bluetooth} alt="bluetooth" />
              <img className="logo-style" src={nodejs} alt="nodejs" />
              <img className="logo-style" src={flower} alt="flower" />
            </div>
          </div>
        </div>
        <div className="internal--works--column1">
          <div className="inernal--works-text1">
            <div className="golden-heading">Project Goals</div>
            <div className="description">
              BMW hoped to improve the customer experience while still keeping
              their platform intuitive for their staff and managers. We worked
              with them to ensure that data analysis was easy to read and
              maintain.
            </div>
          </div>
          <div className="inernal--works-text1">
            <div className="golden-heading">Work done</div>
            <div className="description">
              <ul>
                <li>Intuitive mobile app</li>
                <li>IoT software</li>
                <li>Modern AI software to show heat maps</li>
                <li>Web app for showroom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="internal--works-details2">
        <div className="inernal--works-text2">
          <div className="golden-heading">Web App for Showroom Managers</div>
          <div className="description">
            The web app allows showroom employees to access attendance
            statistics, generate & analyze heat maps, thereby tracking customer
            interest for all car models. The app also enables managers to work
            individually with each client (car owner), view their visit history
            and respond to requests & messages.
          </div>
        </div>
        <div className="inernal--works-text2">
          <div className="golden-heading">
            Mobile App for Clients & Employees
          </div>
          <div className="golden-heading sub-heading">
            The functionality of the mobile app provides:
          </div>
          <div className="description">
            <ul>
              <li>
                Navigation and assistance around the showroom to customers
                interested in buying a vehicle;
              </li>
              <li>
                Support throughout the entire period of vehicle ownership for
                previous buyers.
              </li>
              <li>
                With the help of iBeacons technology, the app displays all the
                details on the car model closest to the customer, freeing them
                from manually searching the general catalog. Visitors can also
                request help from showroom employees who know their exact
                location. .
              </li>
              <li>
                Car owners use the app to easily sign up for maintenance or get
                personal online consultation. It also displays the customer’s
                service history, sends out notifications, reminders and special
                offers
              </li>
            </ul>
          </div>
        </div>
        <div className="inernal--works-pictures">
          <PictureFrame pic={ourworkspic7} tag="Smart Drone - SYMA" />
          <PictureFrame pic={ourworkspic8} tag="Smart Drone - SYMA" />
          <PictureFrame pic={ourworkspic9} tag="Smart Drone - SYMA" />
        </div>
      </section>
    </div>
  );
};

export default OurWorksInternal;
