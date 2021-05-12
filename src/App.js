import React, { useLayoutEffect, useState } from "react";

import DeskTopApp from "./components/app";
import MobileApp from "./mobile-components/app";

import "./styles/globals.scss";

const App = () => {
  const useWindowSize = () => {
    const [size, setSize] = useState([0]);

    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

  const [width] = useWindowSize();

  return <MobileApp />;
};

export default App;
