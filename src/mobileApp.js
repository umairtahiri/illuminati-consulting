import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Header from "./mobile-components/header";
import Footer from "./mobile-components/footer";
import Menu from "./mobile-components/menu";
import Home from "./mobile-components/home";
import OurWorks from "./mobile-components/our-works";
import OurWorksInternal from "./mobile-components/our-works/our-works-internal";
import Blog from "./mobile-components/blog";
import FullBlog from "./mobile-components/blog/full-blog";
import AboutUs from "./mobile-components/about-us";
import ContactUs from "./mobile-components/contact-us";
import BlockChain from "./mobile-components/blockchain-concept";

import "./styles/globals.scss";

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
