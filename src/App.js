import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";

import "./styles/globals.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
