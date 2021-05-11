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

import "./styles.scss";

const Banner = () => {
  const history = useHistory();
  const params = useParams();
  const { type = "" } = params;

  return (
    <div className="banner--main-container">
      {type.includes("connected") && (
        <Fade>
          <div className="slide-content">
            <section className="left-section">
              <ShadowHeading text="connected devices (iot)" />
              <div className="home--description">
                With Machine Learning and camputer Vision software engineering,
                we help
                <br></br> trigger a digital makeover and translete raw into
                measrable business growth.
              </div>
              <MediaLinks background="#333333" />
              <button className="home--button">Learn more</button>
            </section>
            <section className="right-section">
              {/* <div>
                <BlurCode />
              </div> */}
              <img src={connectedDevice} className="slide-img" alt="" />
              {/* <div>
                <BlurCode />
              </div> */}
            </section>
          </div>
        </Fade>
      )}
      {type.includes("solution") && (
        <Fade>
          <div className="slide-content">
            <section className="left-section">
              <ShadowHeading text="full-cycle solution engineering" />
              <div className="home--description">
                With Machine Learning and camputer Vision software engineering,
                we help
                <br></br> trigger a digital makeover and translete raw into
                measrable business growth.
              </div>
              <MediaLinks background="#333333" />
              <button className="home--button">Learn more</button>
            </section>
            <section className="right-section">
              <img src={solutionEngg} al className="slide-img" alt="" />
            </section>
          </div>
        </Fade>
      )}
      {type.includes("artificial") && (
        <Fade>
          <div className="slide-content">
            <section className="left-section">
              <ShadowHeading text="artificial intelligence" />
              <div className="home--description">
                With Machine Learning and camputer Vision software engineering,
                we help
                <br></br> trigger a digital makeover and translete raw into
                measrable business growth.
              </div>
              <MediaLinks background="#333333" />
              <button className="home--button">Learn more</button>
            </section>
            <section className="right-section">
              <img src={bitcoin} className="slide-img" alt="" />
            </section>
          </div>
        </Fade>
      )}
      {type.includes("blockchain") && (
        <Fade>
          <div className="slide-content">
            <section className="left-section">
              <ShadowHeading text="Blockchain Development" />
              <div className="home--description">
                With Machine Learning and camputer Vision software engineering,
                we help
                <br></br> trigger a digital makeover and translete raw into
                measrable business growth.
              </div>
              <MediaLinks background="#333333" />
              <button className="home--button">Learn more</button>
            </section>
            <section className="right-section">
              <img src={ai} className="slide-img" alt="" />
            </section>
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
