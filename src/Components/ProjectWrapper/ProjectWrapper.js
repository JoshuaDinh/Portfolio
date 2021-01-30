import React from "react";
import "./projectWrapper.css";
import { VideoFrame } from "../VideoFrame/VideoFrame";
import { AboutProject } from "../AboutProject/AboutProject";

export const ProjectWrapper = ({
  Video,
  ProjectTitle,
  ScrollLink,
  DescriptionText,
  SkillsUsedText,
  CodeLink,
  DemoLink,
}) => {
  return (
    <div id={ScrollLink} className="project-wrapper">
      <h1>{ProjectTitle}</h1>
      <hr className="line-break"></hr>
      <VideoFrame video={Video} />
      <div className="projects-buttons-container">
        <button className="projects-button">
          <a
            className="projects-button-link"
            href={CodeLink}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </button>
        <button className="projects-button">
          <a
            className="projects-button-link"
            href={DemoLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </button>
      </div>
      <AboutProject
        SkillsUsedText={SkillsUsedText}
        DescriptionText={DescriptionText}
      />
    </div>
  );
};
