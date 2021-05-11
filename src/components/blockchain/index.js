import React from "react";

import Banner from "./banner";
import ServicesInFocus from "./services-in-focus";
import ClientSatisfaction from "./client-satisfaction";
import Infrastructure from "./infrastructure";
import Reviews from "./reviews";
import TechnologyPlatforms from "./technology-platform";
import Achievements from "./countable-achievements";
import Enterprise from "./enterprise-progress";

const BlockChain = () => {
  return (
    <div className="block-chain-main-container">
      <Banner />
      <ServicesInFocus />
      <Infrastructure />
      <Enterprise />
      <Achievements />
      <TechnologyPlatforms />
      <Reviews />
      <ClientSatisfaction />
    </div>
  );
};
export default BlockChain;
