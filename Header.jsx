import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

import DELL from "../../assets/dell.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        
        <h1>POORNA CHANDAR N</h1>
        <h5 className="text-light">B.E CSE | KPRIET</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={DELL} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          
        </a>
      </div>
    </header>
  );
};

export default Header;
