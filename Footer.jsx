import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        POORNA CHANDAR N
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Tech Reviews</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100066604099681" target="blank">
          <FaFacebook />
        </a>
        <a href="https://discord.com/channels/@me" target="blank">
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/in/poorna-chandar-n-502886204/" target="blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>@DESIGNED BY NPC.</small>
      </div>
    </footer>
  );
};

export default Footer;
