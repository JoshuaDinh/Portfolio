import React from "react";
import "./drawer.css";
import { DrawerOption } from "./DrawerOption";
import logo from "../../imgs/react-logo.gif";
import resume from "../../imgs/Resume.pdf";

export const Drawer = ({ setAboutMeModal }) => {
  return (
    <div className="drawer-container">
      <div className="drawer">
        <div className="drawer-header">
          <img className="drawer-logo" src={logo} alt="" />
        </div>
        <DrawerOption setAboutMeModal={setAboutMeModal} title="about me" />
        <DrawerOption title="Project Bitcoin" link="Bitcoin" />
        <DrawerOption title="Project Project Covid" link="Covid" />
        <DrawerOption title="Project Netflix" link="Netflix" />
        <a
          className="drawer-option"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{" "}
        <a
          className="drawer-option"
          href="https://github.com/JoshuaDinh"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="drawer-option"
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
