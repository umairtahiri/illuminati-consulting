import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

import "./styles.scss";

const Header = ({ onMenuBtn }) => {
  return (
    <div className="header--main-container">
      <img src={logo} alt="logo" />
      <div className="header--button-container">
        <button className="button">GET IN TOUCH</button>
        <img className="menu-btn" src={menu} alt="menu" onClick={onMenuBtn} />
      </div>
    </div>
  );
};
export default Header;
