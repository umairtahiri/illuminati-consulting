import React from "react";

import "./styles.scss";

const ShadowHeading = ({ text }) => {
  return (
    <div className="golden-heading">
      <div className="golden-heading">{text}</div>
      <div className="shadow-heading">{text}</div>
    </div>
  );
};

export default ShadowHeading;
