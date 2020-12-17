import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MouseParticles from "react-mouse-particles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import miniLogo from "./imgs/miniLogo.gif";
import video from "./imgs/video2.mp4";
import video2 from "./imgs/face.mp4";
import resume from "./imgs/Resume.pdf";

const App = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [particles, setParticles] = useState(true);
  const [linkedIn, setLinkedIn] = useState(false);
  const [github, setGithub] = useState(false);
  const [email, setEmail] = useState(false);

  return (
    <div className="App">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="app__personalInfo">
        <video className="vid2" autoPlay muted loop>
          <source src={video2} type="video/mp4" />
        </video>
        <h2>Joshua Dinh</h2>
        {/* <div className="app__resume">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div> */}
        <div className="app__icons">
          <a
            href="https://www.linkedin.com/in/joshuahungdinh/"
            target="_blank"
            rel="noreferrer"
            className="app__icon"
            onMouseEnter={() => setLinkedIn(true)}
            onMouseLeave={() => setLinkedIn(false)}
          >
            <LinkedInIcon
              fontSize={`${linkedIn && "large"}`}
              style={{ color: "#61dbfb" }}
            />
            <p className={`${linkedIn && "iconTitles-active"}`}>LinkedIn</p>
          </a>
          <div
            className="app__icon"
            onMouseEnter={() => setEmail(true)}
            onMouseLeave={() => setEmail(false)}
          >
            <CallIcon
              fontSize={`${email && "large"}`}
              style={{ color: "#61dbfb" }}
            />
            <p className={`${email && "iconTitles-active"}`}>Contact</p>
          </div>
          <a
            href="https://github.com/JoshuaDinh?tab=repositories "
            target="_blank"
            rel="noreferrer"
            className="app__icon"
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
          >
            <GitHubIcon
              fontSize={`${github && "large"}`}
              style={{ color: "#61dbfb" }}
            />
            <p className={`${github && "iconTitles-active"}`}>Github</p>
          </a>
          <a href={resume} target="_blank" rel="noreferrer">
            <PictureAsPdfIcon />
            <p className={`${github && "iconTitles-active"}`}>Resume</p>
          </a>
        </div>
      </div>

      <div
        onClick={() => setParticles(!particles)}
        className="app__disable-particles"
      >
        {particles ? (
          <span>
            <CloseIcon style={{ color: "#ffffff" }} />
            Disable Particles
          </span>
        ) : (
          <span>
            <AddIcon style={{ color: "#ffffff" }} />
            Activate Particles
          </span>
        )}
      </div>
      <Sidebar setParticles={setParticles} openProjects={openProjects} />
      <div
        onClick={() => setOpenProjects(!openProjects)}
        className={`app__projectArrow   ${
          openProjects && "openProjects-active"
        }`}
      >
        <span>Projects</span>
        <img src={miniLogo} />
        <ArrowRightIcon fontSize="large" style={{ color: "#61dbfb" }} />
      </div>

      {particles && (
        <MouseParticles
          g={1}
          num={10}
          life={0.5}
          color={[
            "#61DBFB",
            "#ffffff",
            "#6f42c1",
            "#61DBFB",
            "#6f42c1",
            "#000000",
          ]}
          cull="col,image-wrapper"
        />
      )}
    </div>
  );
};

export default App;
