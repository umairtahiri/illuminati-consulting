import React from "react";
import { Fade } from "react-reveal";
import { useHistory, useParams } from "react-router-dom";

import BlurCode from "./blur-code";
import MediaLinks from "../../common/media-links";
import ShadowHeading from "../../common/shadow-heading";

import connectedDevice from "../../../images/connected-devices.png";
import solutionEngg from "../../../images/solution-engineering.png";
import bitcoin from "../../../images/bitcoin.png";
import ai from "../../../images/ai.png";
import faceTop from "../../../images/faceTop.png";
import faceBottom from "../../../images/faceBottom.png";

import "./styles.scss";

const Banner = () => {
  const history = useHistory();
  const params = useParams();
  const { type = "" } = params;

  return (
    <div className="mobile-banner--main-container">
      {type.includes("connected") && (
        <Fade>
          <div className="slide-content">
            <ShadowHeading text="connected devices (iot)" />
            <div className="home--description">
              Streamline transfers and enhances capabilities with this
              device-improving process. With Connected Devices (IoT), we build
              on the knowledge of a device to make its abilities outstanding.
            </div>
            <button className="home--button">Learn more</button>
            <div className="img-gradiat-container">
              <img src={connectedDevice} className="slide-img" alt="" />
              <div className="graiant-effect-top"></div>
              <div className="graiant-effect-bottom"></div>
            </div>
            <MediaLinks background="#333333" />
          </div>
        </Fade>
      )}
      {type.includes("solution") && (
        <Fade>
          <div className="slide-content">
            <ShadowHeading text="full-cycle solution engineering" />
            <div className="home--description">
              Dominate the internet and technology with our full-cycle solution
              engineering. Our exceptional engineers gear up to help you with
              any concern at any time.
            </div>
            <button className="home--button">Learn more</button>
            <div className="img-gradiat-container">
              <img src={solutionEngg} className="slide-img" alt="" />
              <div className="graiant-effect-right"></div>
              <div className="graiant-effect-bottom"></div>
            </div>

            <MediaLinks background="#333333" />
          </div>
        </Fade>
      )}
      {type.includes("artificial") && (
        <Fade>
          <div className="slide-content">
            <ShadowHeading text="artificial intelligence" />
            <div className="home--description">
              The future is here, and it’s streamlined workplaces, daily
              routines, and problem-solving. With AI, you can plan inventory,
              optimize products, and read analytics more successfully.
            </div>

            <button className="home--button">Learn more</button>

            <div className="img-gradiat-container">
              <img src={bitcoin} className="slide-img" alt="" />
            </div>
            <MediaLinks background="#333333" />
          </div>
        </Fade>
      )}
      {type.includes("blockchain") && (
        <Fade>
          <div className="slide-content">
            <ShadowHeading text="Blockchain Development" />
            <div className="home--description">
              Prevent changes or hacks with our state-of-the-art blockchain
              development. Digital transactions have never been so secure or
              offered peace of mind before now.
            </div>

            <button className="home--button">Learn more</button>

            <div className="img-gradiat-container">
              <img src={ai} className="slide-img" alt="" />
              <img src={faceTop} className="face-top" alt="" />
              <img src={faceBottom} className="face-bottom" alt="" />
            </div>
            <MediaLinks background="#333333" />
          </div>
        </Fade>
      )}
      <div className="dots-container">
        <div
          className="dot"
          onClick={() => history.push("/home/connected-device")}
        ></div>
        <div
          className="dot"
          onClick={() => history.push("/home/full-cycle-solution-engineering")}
        ></div>
        <div
          className="dot"
          onClick={() => history.push("/home/artificial-intelligence")}
        ></div>
        <div
          className="dot"
          onClick={() => history.push("/home/blockchain-development")}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
