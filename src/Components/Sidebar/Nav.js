import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import resume from "../../imgs/Resume.pdf";
import "./sidebar.css";

const Nav = ({ openProjects }) => {
  const [linkedIn, setLinkedIn] = useState(false);
  const [github, setGithub] = useState(false);
  const [email, setEmail] = useState(false);
  const [resume, setResume] = useState(false);

  return (
    <div className="nav">
      <h1>Joshua Dinh</h1>
      <div className={`nav__icons ${openProjects && "nav__icons-project"}`}>
        <div
          className={`nav__container ${
            openProjects && "nav__container-projects"
          }`}
        >
          {" "}
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setResume(true)}
            onMouseLeave={() => setResume(false)}
          >
            <PictureAsPdfIcon
              fontSize={`${resume && "large"}`}
              style={{ color: "#cfe67e" }}
            />
          </a>
          <p className={`${resume && "iconTitles-active"}`}>Resume</p>
        </div>

        <div
          className={`nav__container ${
            openProjects && "nav__container-projects"
          }`}
        >
          <a
            className="app__icon"
            onMouseEnter={() => setEmail(true)}
            onMouseLeave={() => setEmail(false)}
          >
            <CallIcon
              fontSize={`${email && "large"}`}
              style={{ color: "#cfe67e" }}
            />
          </a>
          <p className={`${email && "iconTitles-active"}`}>Contact</p>
        </div>
        <div
          className={`nav__container ${
            openProjects && "nav__container-projects"
          }`}
        >
          {" "}
          <a
            href="https:github.com/JoshuaDinh?tab=repositories "
            target="_blank"
            rel="noreferrer"
            className="app__icon"
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
          >
            <GitHubIcon
              fontSize={`${github && "large"}`}
              style={{ color: "#cfe67e" }}
            />
          </a>
          <p className={`${github && "iconTitles-active"}`}>Github</p>
        </div>
        <div
          className={`nav__container ${
            openProjects && "nav__container-projects"
          }`}
        >
          {" "}
          <a
            href="https:www.linkedin.com/in/joshuahungdinh/"
            target="_blank"
            rel="noreferrer"
            className="app__icon"
            onMouseEnter={() => setLinkedIn(true)}
            onMouseLeave={() => setLinkedIn(false)}
          >
            <LinkedInIcon
              fontSize={`${linkedIn && "large"}`}
              style={{ color: "#cfe67e" }}
            />
          </a>
          <p className={`${linkedIn && "iconTitles-active"}`}>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
