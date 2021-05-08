import React from "react";
import { Fade } from "react-reveal";
import { useHistory, useParams } from "react-router-dom";

import MediaLinks from "../../common/media-links";
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
              <div className="golden-heading">connected devices (iot)</div>
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
              <img src={connectedDevice} className="slide-img" alt="" />
            </section>
          </div>
        </Fade>
      )}
      {type.includes("solution") && (
        <Fade>
          <div className="slide-content">
            <section className="left-section">
              <div className="golden-heading">
                full-cycle solution engineering
              </div>
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
              <div className="golden-heading">artificial intelligence</div>
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
              <div className="golden-heading">Blockchain Development</div>
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
