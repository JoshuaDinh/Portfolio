import React from "react";

const sideDrawer = ({ title, image }) => {
  return (
    <div className="sideDrawer">
      <img src={image} alt="#" />
      <h2>{title}</h2>
      <div className="sideDrawer__project-info">
        <span onClick={console.log("click")}>View Code /</span>
        <span> Live Demo</span>
      </div>
    </div>
  );
};

export default sideDrawer;
