import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";
import Menu from "../menu";
import Home from "../home";
import OurWorks from "../our-works";
import OurWorksInternal from "../our-works/our-works-internal";
import Blog from "../blog";
import FullBlog from "../blog/full-blog";
import AboutUs from "../about-us";
import ContactUs from "../contact-us";
import BlockChain from "../blockchain-concept";

import "../../styles/globals.scss";

const MobileApp = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    history && history.push(`/home/connected-device`);
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/home/:type" component={Home} />
        <Route exact path="/our-works/:work" component={OurWorks} />
        <Route
          exact
          path="/our-works/:work/details"
          component={OurWorksInternal}
        />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:blogTitle" component={FullBlog} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/services/blockchain" component={BlockChain} />
      </Switch>
      {!location.pathname.includes("menu") && <Footer />}
    </div>
  );
};

export default MobileApp;
