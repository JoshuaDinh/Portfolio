import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MenuIcon from "@material-ui/icons/Menu";

import "./header.css";

export const Header = ({ toggleMobileNav, setToggleMobileNav }) => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-title-container">
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
        <div
          onClick={() => {
            setToggleMobileNav(!toggleMobileNav);
          }}
          className="header-icons"
        >
          {" "}
          <div className="menu-icon-container">
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
          </div>
          <Avatar className="header-avatar-icon">JD</Avatar>
        </div>
      </div>
    </div>
  );
};
