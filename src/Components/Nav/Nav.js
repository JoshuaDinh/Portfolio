import React from "react";
import "./nav.css";
import NavOption from "./NavOption";
import logo from "../../imgs/react-logo.gif";
import resume from "../../imgs/Resume.pdf";
import { connect } from "react-redux";

export const Nav = ({ setAboutMeModal, aboutMe }) => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="" />
        </div>
        <NavOption setAboutMeModal={setAboutMeModal} title="about me" />
        <NavOption title="Project Bitcoin" link="Bitcoin" />
        <NavOption title="Project Project Covid" link="Covid" />
        <NavOption title="Project Netflix" link="Netflix" />
        <a
          className="nav-option"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{" "}
        <a
          className="nav-option"
          href="https://github.com/JoshuaDinh"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="nav-option"
          href="https://www.linkedin.com/in/joshuahungdinh/"
          target="_blank"
          rel="noreferrer"
        >
          Linked-In
        </a>
      </div>
    </div>
  );
};
