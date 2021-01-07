import React from "react";
import "./aboutMeHeadLine.css";

const AboutMeHeadLine = ({ offset }) => {
  return (
    <div
      style={{
        transform: `translateX(${offset * 0.5}px)`,
      }}
      className="aboutMeHeadLine"
    >
      <h4>About Me</h4>
    </div>
  );
};

export default AboutMeHeadLine;
