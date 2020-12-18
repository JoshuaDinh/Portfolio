import React from "react";

const sideDrawer = ({ title, image, link, vid }) => {
  return (
    <div className="sideDrawer">
      {/* <img src={image} alt="#" /> */}
      <video className="sideDrawer-video" autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
      <h2>{title}</h2>
      <div className="sideDrawer__project-info">
        <span onClick={console.log("click")}>View Code /</span>
        <a href={link} target="_blank" rel="noreferrer">
          {" "}
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default sideDrawer;
