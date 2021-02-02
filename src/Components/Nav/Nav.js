import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav-container">
      {" "}
      <div className="nav">
        <div className="nav-title-container">
          <span className="highlight-text">J</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text">s</span>
          <span className="highlight-text">h</span>
          <span className="highlight-text">'s</span>
          <span className="highlight-text"> D</span>
          <span className="highlight-text">a</span>
          <span className="highlight-text">s</span>
          <span className="highlight-text">h</span>
          <span className="highlight-text">b</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text">a</span>
          <span className="highlight-text">r</span>
          <span className="highlight-text">d</span>
        </div>
        <div className="nav-icons">
          <Avatar>JD</Avatar>
        </div>
      </div>
    </div>
  );
};
