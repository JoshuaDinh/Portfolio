import React from "react";
import "./projects.css";
import ProjectItem from "./ProjectItem";

const ProjectsDisplay = ({ openProjects, projectVideo, title, link }) => {
  return (
    <div
      className={`projectDisplay  ${openProjects && "projectDisplay__active"}`}
    >
      <ProjectItem vid={projectVideo} title={title} link={link} />
    </div>
  );
};

export default ProjectsDisplay;
