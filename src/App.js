import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";

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
      <Footer />
    </div>
  );
};

export default App;
