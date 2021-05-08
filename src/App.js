import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import OurWorks from "./components/works";

import "./styles/globals.scss";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    history && history.push("/connected-device");
  }, []);

  return (
    <div className="app">
      <Header />
      <Route exact path="/:type" component={Home} />
      <Route exact path="/oue-works" component={OurWorks} />
      <Route exact path="/oue-works/:work" component={OurWorks} />
      <Footer />
    </div>
  );
};

export default App;
