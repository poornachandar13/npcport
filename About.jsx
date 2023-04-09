import React from "react";
import "./about.css";
import  EDU1 from "../../assets/edu1.png";
import { FaBookReader, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={EDU1} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBookReader className="about__icon" />
              <h5> SSLC Education</h5>
              <small>GRD-CPF Matric Hr.Sec School</small>
            </article>
            <article className="about__card">
              <FaBookOpen className="about__icon" />
              <h5>HSC Education</h5>
              <small>GRD-CPF Matric Hr.Sec School</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>U.G Education</h5>
              <small>B.E Computer Science KPRIET</small>
            </article>
          </div>
          <p>
          A passionate and dedicated individual seeking for a job opportunity  to expand my technical skills
          and standardize  professional career.As a jobseeker i'm targeting and chasing for my suitable tech role.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
