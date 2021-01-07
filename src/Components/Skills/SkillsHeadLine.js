import React from "react";
import "./skillsHeadLine.css";

const SkillsHeadLine = ({ offset }) => {
  return (
    <div
      style={{
        transform: `translateX(${offset * 0.5}px)`,
      }}
      className="skillsHeadLine"
    >
      <h4>Skills</h4>
    </div>
  );
};

export default SkillsHeadLine;
