import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        {" "}
        <div className="nav-title-container">
          <span className="nav-letter">J</span>
          <span className="nav-letter">o</span>
          <span className="nav-letter">s</span>
          <span className="nav-letter">h</span>
          <span className="nav-letter">'s</span>
          <span className="nav-letter"> D</span>
          <span className="nav-letter">a</span>
          <span className="nav-letter">s</span>
          <span className="nav-letter">h</span>
          <span className="nav-letter">b</span>
          <span className="nav-letter">o</span>
          <span className="nav-letter">a</span>
          <span className="nav-letter">r</span>
          <span className="nav-letter">d</span>
        </div>
        <div className="nav-icons">
          <AttachMoneyIcon />
          <Avatar>JD</Avatar>
        </div>
      </div>
    </div>
  );
};
