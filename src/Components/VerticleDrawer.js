import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import GitHubIcon from "@material-ui/icons/GitHub";

const VerticleDrawer = () => {
  return (
    <div className="verticleDrawer">
      <div className="app__icons">
        <a
          href="https://www.linkedin.com/in/joshuahungdinh/"
          target="_blank"
          rel="noreferrer"
          className="app__icon"
        >
          <LinkedInIcon
            // fontSize={`${linkedIn && "large"}`}
            style={{ color: "#61dbfb" }}
          />
          {/* <p className={`${linkedIn && "iconTitles-active"}`}>LinkedIn</p> */}
        </a>
        <div className="app__icon">
          <CallIcon
            // fontSize={`${email && "large"}`}
            style={{ color: "#61dbfb" }}
          />
          {/* <p className={`${email && "iconTitles-active"}`}>Contact</p> */}
        </div>
        <a
          href="https://github.com/JoshuaDinh?tab=repositories "
          target="_blank"
          rel="noreferrer"
          className="app__icon"
        >
          <GitHubIcon
            // fontSize={`${github && "large"}`}
            style={{ color: "#61dbfb" }}
          />
          {/* <p className={`${github && "iconTitles-active"}`}>Github</p> */}
        </a>
      </div>
    </div>
  );
};

export default VerticleDrawer;
