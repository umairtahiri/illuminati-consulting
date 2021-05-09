import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Fade } from "react-reveal";

import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Home from "./components/home";
import OurWorks from "./components/our-works";
import OurWorksInternal from "./components/our-works/our-works-internal";
import AboutUs from "./components/about-us";

import "./styles/globals.scss";

const App = () => {
  const history = useHistory();

  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    history && history.push(`/home/connected-device`);
  }, []);

  return (
    <div className="app">
      {showMenu ? (
        <Fade top>
          <Menu onMenuBtnClose={() => setShowMenu(false)} />
        </Fade>
      ) : (
        <>
          <Header onMenuBtn={() => setShowMenu(true)} />
          <Switch>
            <Route exact path="/home/:type" component={Home} />
            <Route exact path="/our-works/:work" component={OurWorks} />
            <Route
              exact
              path="/our-works/:work/details"
              component={OurWorksInternal}
            />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
