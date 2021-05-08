import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import OurWorks from "./components/our-works";
import OurWorksInternal from "./components/our-works/our-works-internal";

import "./styles/globals.scss";

const App = () => {
  const history = useHistory();

  // useEffect(() => {
  //   history && history.push("/connected-device");
  // }, []);

  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/our-works" component={OurWorks} />
      <Route exact path="/our-works/:work" component={OurWorksInternal} />
      <Footer />
    </div>
  );
};

export default App;
