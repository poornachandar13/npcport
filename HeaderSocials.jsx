import React from "react";
import { BsLinkedin, BsGithub, BsMailbox } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/poorna-chandar-n-502886204/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/poornachandar13" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noreferrer">
        <BsMailbox />
      </a>
    </div>
  );
};

export default HeaderSocials;
