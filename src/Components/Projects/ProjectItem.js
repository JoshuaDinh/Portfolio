import React from "react";
import "./projects.css";

const ProjectItem = ({ title, link, vid }) => {
  return (
    <div className="projectItem">
      <h2>{title}</h2>
      <video
        className="projectItem__video  animate__animated animate__fadeInRight"
        autoPlay
        muted
        loop
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="projectItem__buttons">
        <span onClick={console.log("click")}>View Code </span>
        <a href={link} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
