import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxFill, RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1k2t81r', 'template_mb445dg', form.current, 'mODnO-Sac_2LiOiKx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nvps1717@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNwgHSBKgGMcjxbMHlKZMMCpLXHkfTNHXPvtMKKHRbXCgcdWNSZXbSRRWfQTFpmQMFqLKL" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Poorna Chandar N</h5>
            <a href="https://www.linkedin.com/in/poorna-chandar-n-502886204/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8903617178</h5>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}> 
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
