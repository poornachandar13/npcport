import React from "react";
import "./testimonials.css";
import WEB from "../../assets/web.png";
import AWS from "../../assets/aws.png";
import JAVA from "../../assets/java.png";


import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: WEB,
    name: "MERN STACK",
    review:
      "MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.",
  },
  {
    avatar: JAVA,
    name: "JAVA",
    review:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications.",
  },
  {
    avatar: AWS,
    name: "AWS SERVICES",
    review:
      "AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications – whether an existing application or a new SaaS-based application. You can use the AWS Management Console or well-documented web services APIs to access AWS's application hosting platform.",
  },
 
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Tech Reviews</h5>
      <h2>Techports</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
