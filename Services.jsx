import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import T from "../../assets/t.png";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Passinate On</h5>
      <h2>Technical Streams</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I have opted my stack as MERN .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>It contains mongodb,express,react,node.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Efficient, fast & scalable.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React allows users to code in JavaScript and create UI components. .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web hosting is a service of providing online space for storage of web pages.</p>
            </li>
           
          </ul>
        </article>

        <div className="img">
        <img src={T} alt="point" />
        </div>
        
        <article className="service">
          <div className="service__head">
            <h3>Cloud Architect</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>A cloud architect is responsible for an organization's cloud computing system.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The AWS console is easy,also allowing application providers to securely host applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The cloud offers businesses more flexibility overall versus hosting on a local server.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cost savings,Better collaboration,Data loss prevention.</p>
            </li>
       
          </ul>
        </article>
       
      </div>
    </section>
  );
};

export default Services;
