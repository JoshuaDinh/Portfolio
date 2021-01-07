import React from "react";
import "./navigation.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const Navigation = ({ offset }) => {
  return (
    <div
      style={{
        transform: `translateX(${offset * -0.5}px)`,
      }}
      className="navigation"
    >
      <h4>Joshua Dinh</h4>
      <div className="navigation__icons-container">
        <PhoneIcon className="navigation__icon" />
        <PictureAsPdfIcon className="navigation__icon" />{" "}
        <GitHubIcon className="navigation__icon" />
        <LinkedInIcon className="navigation__icon" />
      </div>
    </div>
  );
};

export default Navigation;
