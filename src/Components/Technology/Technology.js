import React from "react";
import "./technology.css";

export const Technology = ({ SkillsUsedText }) => {
  return (
    <div className="tech-used">
      <h4>Technologies & skills</h4>
      {SkillsUsedText}
    </div>
  );
};
