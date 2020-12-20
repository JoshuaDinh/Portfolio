import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Resume from "../../imgs/Resume.pdf";
import "./personalInfo.css";
import AboutMe from "./AboutMe";

const PersonalInfo = ({ openProjects }) => {
  const [linkedIn, setLinkedIn] = useState(false);
  const [github, setGithub] = useState(false);
  const [email, setEmail] = useState(false);
  const [resume, setResume] = useState(false);

  return (
    <div className="personalInfo">
      <h1>Joshua Dinh</h1>
      <AboutMe />

      <div
        className={`personalInfo__container ${
          openProjects && "personalInfo__container-projects"
        }`}
      >
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className={`personalInfo__icon ${
            openProjects && "personalInfo__icon-projects"
          }`}
          onMouseEnter={() => setResume(true)}
          onMouseLeave={() => setResume(false)}
        >
          {" "}
          <PictureAsPdfIcon
            fontSize={`${resume && "large"}`}
            style={{ color: "#ffffff" }}
          />
          <p className={`${resume && "iconTitles-active"}`}>Resume</p>
        </a>

        <a
          a
          href="tel:6199773574"
          className={`personalInfo__icon ${
            openProjects && "personalInfo__icon-projects"
          }`}
          onMouseEnter={() => setEmail(true)}
          onMouseLeave={() => setEmail(false)}
        >
          <CallIcon
            fontSize={`${email && "large"}`}
            style={{ color: "#ffffff" }}
          />
          <p className={`${email && "iconTitles-active"}`}>Contact</p>
        </a>
        <a
          href="https:github.com/JoshuaDinh?tab=repositories "
          target="_blank"
          rel="noreferrer"
          className={`personalInfo__icon ${
            openProjects && "personalInfo__icon-projects"
          }`}
          onMouseEnter={() => setGithub(true)}
          onMouseLeave={() => setGithub(false)}
        >
          <GitHubIcon
            fontSize={`${github && "large"}`}
            style={{ color: "#ffffff" }}
          />
          <p className={`${github && "iconTitles-active"}`}>Github</p>
        </a>
        <a
          href="https:www.linkedin.com/in/joshuahungdinh/"
          target="_blank"
          rel="noreferrer"
          className={`personalInfo__icon ${
            openProjects && "personalInfo__icon-projects"
          }`}
          onMouseEnter={() => setLinkedIn(true)}
          onMouseLeave={() => setLinkedIn(false)}
        >
          <LinkedInIcon
            fontSize={`${linkedIn && "large"}`}
            style={{ color: "#ffffff" }}
          />
          <p className={`${linkedIn && "iconTitles-active"}`}>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;
