import React from "react";
import "./projectsHeadLine.css";

const ProjectsHeadLine = ({ offset }) => {
  return (
    <div
      style={{
        transform: `translateX(${offset * -0.5}px)`,
      }}
      className="projectsHeadLine"
    >
      <h4>Projects</h4>
    </div>
  );
};

export default ProjectsHeadLine;
