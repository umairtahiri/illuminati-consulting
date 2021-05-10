import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Home from "./components/home";
import OurWorks from "./components/our-works";
import OurWorksInternal from "./components/our-works/our-works-internal";
import Blog from "./components/blog";
import BlogPage from "./components/blog/blog-page";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";

import "./styles/globals.scss";

const App = () => {
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
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
      {!location.pathname.includes("menu") && <Footer />}
    </div>
  );
};

export default App;
