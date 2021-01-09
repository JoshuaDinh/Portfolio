import React from "react";
import "./aboutProject.css";
import { Technology } from "../Technology/Technology";
import { Description } from "../Description/Description";

export const AboutProject = ({ DescriptionText, SkillsUsedText }) => {
  return (
    <div className="about-project">
      <Description DescriptionText={DescriptionText} />
      <Technology SkillsUsedText={SkillsUsedText} />
    </div>
  );
};
