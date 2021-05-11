import React from "react";

import "./styles.scss";

const Card = ({ title, detail }) => {
  return (
    <section className="services-in-focus--card">
      <header>{title}</header>
      <div className="detail-container">
        <p>{detail}</p>
      </div>
    </section>
  );
};

export default Card;
