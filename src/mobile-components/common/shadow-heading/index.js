import React from "react";

import "./styles.scss";

const ShadowHeading = (props) => {
  const { text } = props;
  return (
    <div className="mobile-golden-heading title">
      <div className="mobile-golden-heading">{text}</div>
      <div className="shadow-heading">{text}</div>
    </div>
  );
};

export default ShadowHeading;
