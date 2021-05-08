import React from "react";
import cross from "../../images/cross-pic.svg";
import logo from "../../images/logo.svg";

import "./styles.scss";

const Menu = () => {
  return (
    <section className="menu-wrapper">
      <header className="menu-header">
        <img src={logo} alt="" />
        <img src={cross} alt="" />
      </header>
      <div className="menu-body">
        <section className="right-section">
          <div>
            <div className="golden-heading">ABOUT US</div>
            <div href="#demo" className="golden-heading" data-toggle="collapse">
              SERVICES
            </div>
            <div id="demo" className="collapse">
              <div className="collapse-option" style={{ marginTop: "30px" }}>
                Blockchain
              </div>
              <div className="collapse-option">CognItive Computing(AI)</div>
              <div className="collapse-option">Connected Device (IOT)</div>
              <div className="collapse-option">Web Development</div>
              <div className="collapse-option">Mobile App Development</div>
              <div className="collapse-option">Web Accessibility</div>
            </div>
            <div className="golden-heading" data-toggle="collapse">
              WORKS
            </div>

            <div className="golden-heading">BLOGS</div>
            <div className="golden-heading">CONTACT US</div>
          </div>
        </section>
        <section className="left-section">
          <div className="menu-address-component">
            <div>520 WEST 28TH STREET</div>
            <div>SUIT 31</div>
            <div>NEWYORK NY10001</div>
            <div>+1 (646) 490-0772 (USA)</div>
            <div>iNFO@IPSWAP.AI</div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Menu;
