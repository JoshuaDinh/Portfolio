import React from "react";
import "./projectWrapper.css";
import { VideoFrame } from "../VideoFrame/VideoFrame";
import { AboutProject } from "../AboutProject/AboutProject";
import { Description } from "../Description/Description";

export const ProjectWrapper = ({
  Video,
  ProjectTitle,
  ScrollLink,
  DescriptionText,
  SkillsUsedText,
}) => {
  return (
    <div id={ScrollLink} className="project-wrapper">
      <h1>{ProjectTitle}</h1>
      <hr className="line-break"></hr>
      <VideoFrame video={Video} />
      <div className="projects-buttons-container">
        <button className="projects-button">View Code</button>
        <button className="projects-button">Live Demo</button>
      </div>
      <AboutProject
        SkillsUsedText={SkillsUsedText}
        DescriptionText={DescriptionText}
      />
    </div>
  );
};
