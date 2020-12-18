import React from "react";

const sideDrawer = ({ title, link, vid }) => {
  return (
    <div className="sideDrawer">
      <h2>{title}</h2>
      <video
        className="sideDrawer-video animate__animated animate__fadeInRight"
        autoPlay
        muted
        loop
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="sideDrawer__project-info">
        <span onClick={console.log("click")}>View Code </span>
        <a href={link} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default sideDrawer;
