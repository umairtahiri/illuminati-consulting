import React from "react";

import { useLocation, useHistory } from "react-router-dom";

import { checkIfScreenIsBlack } from "../../utils/helpers";

import logo from "../../images/logo.svg";
import cross from "../../images/cross-pic.svg";
import menu from "../../images/menu.svg";

import "./styles.scss";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const isBlack = checkIfScreenIsBlack(location);

  return (
    <div
      className="header--main-container"
      style={{ background: isBlack ? "#000" : "#fff" }}
    >
      <img className="header-logo" src={logo} alt="logo" />

      <button className="button">GET IN TOUCH</button>
      {location.pathname.includes("menu") ? (
        <img
          src={cross}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
      ) : (
        <img
          className="menu-btn"
          src={menu}
          alt="menu"
          onClick={() => history.push("/menu")}
        />
      )}
    </div>
  );
};
export default Header;
