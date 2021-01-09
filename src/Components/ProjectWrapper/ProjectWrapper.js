import React from "react";
import "./projectWrapper.css";
import { VideoFrame } from "../VideoFrame/VideoFrame";
import { AboutProject } from "../AboutProject/AboutProject";

export const ProjectWrapper = ({ Video, ProjectTitle, ScrollLink }) => {
  return (
    <div id={ScrollLink} className="project-wrapper">
      <h1>{ProjectTitle}</h1>
      <hr className="line-break"></hr>
      <VideoFrame video={Video} />
      <AboutProject />
    </div>
  );
};
