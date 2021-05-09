import React from "react";

import { useLocation } from "react-router-dom";

import { checkIfScreenIsWhite } from "../../utils/helpers";

import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

import "./styles.scss";

const Header = ({ onMenuBtn }) => {
  const location = useLocation();
  const isWhite = checkIfScreenIsWhite(location);
  return (
    <div
      className="header--main-container"
      style={{ background: isWhite ? "#fff" : "#000" }}
    >
      <img src={logo} alt="logo" />
      <div className="header--button-container">
        <button className="button">GET IN TOUCH</button>
        <img className="menu-btn" src={menu} alt="menu" onClick={onMenuBtn} />
      </div>
    </div>
  );
};
export default Header;
