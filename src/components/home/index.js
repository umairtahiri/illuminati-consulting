import React from "react";
import Header from "../header";
import MediaLinks from "../media-links";
import Services from "../home/services";
import Works from "../home/works";
import Blog from "../home/blog";
import Footer from "../footer";

import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home--main-container">
        <div className="golden-heading">home page heading</div>
        <div className="home--description">
          With Machine Learning and camputer Vision software engineering, we
          help trigger a digital makeover and translete raw into measrable
          business growth.
        </div>
        <MediaLinks background="#333333" />
        <button className="home--button">Learn more</button>
      </div>
      <Services />
      <Works />
      <Blog />
      <Footer />
    </>
  );
};
export default Home;
