import React from "react";
import "./portfolio.css";
import PY from "../../assets/py.png";
import  MERN from "../../assets/mern.png";
import IOT from "../../assets/iot.png";
import APP from "../../assets/app.png";
import WEB from "../../assets/web.png";
import PORT from "../../assets/port.png";

const data = [
  {
    id: 1,
    image: PY,
    title: "Attendance Management System using opencv",
    github: "https://github.com/poornachandar13/opencv",

  },
  {
    id: 2,
    image: MERN,
    title: "Rental car services with MERN stack",
    github: "https://github.com/poornachandar13/reachout",
    
  },
  {
    id: 3,
    image: IOT,
    title: "Smart Medicine Remainder using IOT",
    github: "https://github.com/poornachandar13/iot",
    
  },
  {
    id: 4,
    image: APP,
    title: "Application on Attendance system",
    github: "https://github.com/poornachandar13/app",
  },
  {
    id: 5,
    image: WEB,
    title: "Responsive webapplications using html css js",
    github: "https://github.com/poornachandar13/smart-web",
  },
  {
    id: 6,
    image: PORT,
    title: "Portfolio using reactjs",
    github: "https://github.com/poornachandar13/portreact",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Project Works</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
              
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
