import React from "react";
import { connect } from "react-redux";
import { toggleMobileNav } from "../../actions";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PhoneIcon from "@material-ui/icons/Phone";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import resume from "../../imgs/Resume.pdf";

import "./header.css";

const Header = ({ toggleMobileNav }) => {
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
        <div onClick={toggleMobileNav} className="header-icons">
          <div className="menu-icon-container">
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
          </div>
          <Tooltip title="619-977-3574" TransitionComponent={Zoom} arrow>
            <a href="tel:6199773574">
              <IconButton aria-label="contact">
                <PhoneIcon className="header-icon" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Github" TransitionComponent={Zoom} arrow>
            <a
              href="https://github.com/JoshuaDinh"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="github">
                <GitHubIcon className="header-icon" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Linked-in" TransitionComponent={Zoom} arrow>
            <a
              href="https://www.linkedin.com/in/joshuahungdinh/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="linked-in">
                <LinkedInIcon className="header-icon" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Resume" TransitionComponent={Zoom} arrow>
            <a href={resume} target="_blank" rel="noreferrer">
              <IconButton aria-label="resume">
                <PictureAsPdfIcon className="header-icon" />
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileNav: state.mobileNav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMobileNav: () => dispatch(toggleMobileNav()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
