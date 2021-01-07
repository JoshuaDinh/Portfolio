import React from "react";
import "./aboutMe.css";

const AboutMe = ({ offset }) => {
  return (
    <section
      style={{
        transform: `translateY(${offset * -0.5}px)`,
      }}
      className="aboutMe__section"
    >
      <div className="aboutMe__background"></div>
      <h1 className="aboutMe__header">About Me</h1>

      <div className="aboutMe__desc">
        {" "}
        My name Joshua, my friends call me Josh. I have over a year of
        experience in javascript development and love to build in React.Js. I am
        looking to be apart of a large scale application/team and I am always
        interested in connecting with others that share my passion. Curiosity
        has really helped me become a great developer and I look forward to
        continuing my journey into the world of software. Born and raised in San
        Diego. If I were to define my passion with one sentence it would be that
        "I am intrigued with finance & inspired by tech!"
      </div>
    </section>
  );
};

export default AboutMe;
