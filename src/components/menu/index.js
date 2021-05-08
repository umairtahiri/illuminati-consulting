import React from "react";
import "./styles.scss";
import cross from "../../../src/images/cross-pic.svg";
import "../../../src/images/logo.svg";

const Menu = () => {
  return (
    <section>
      <div>
        <img className="menu-logo-style" src="logo.svg" />
        <img clssName="menu-cross-style" src={cross} />
      </div>
      <div className="golden-heading">
        <section className="menu-component">
          <button className="menu-components-button">ABOUT US</button>
          <button
            href="#demo"
            className="menu-components-button"
            data-toggle="collapse"
          >
            SERVICES
          </button>
          <div id="demo" className="collapse">
            <div>Blockchain</div>
            <div>CognItive Computing(AI)</div>
            <div>Connected Device (IOT)</div>
            <div>Web Development</div>
            <div>Mobile App Development</div>
            <div>Web Accessibility</div>
          </div>
          <button className="menu-components-button" data-toggle="collapse">
            WORKS
          </button>

          <button className="menu-components-button">BLOGS</button>
          <button className="menu-components-button">CONTACT US</button>
        </section>
      </div>
      <div className="menu-address-component">
        <div>520 WEST 28TH STREET</div>
        <div>SUIT 31</div>
        <div>NEWYORK NY10001</div>
        <div>+1 (646) 490-0772 (USA)</div>
        <div>iNFO@IPSWAP.AI</div>
      </div>
    </section>
  );
};
export default Menu;
