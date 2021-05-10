import React from "react";
import ClientSatisfaction from "./client-satisfaction";
import Reviews from "./reviews";
import TechnologyPlatforms from "./technology-platform";
import Achievements from "./countable-achievements";
import Enterprise from "./enterprise-progress";

const BlockChain = () => {
  return (
    <div className="block-chain-main-container">
      <Enterprise />
      <Achievements />
      <TechnologyPlatforms />
      <Reviews />
      <ClientSatisfaction />
    </div>
  );
};
export default BlockChain;
