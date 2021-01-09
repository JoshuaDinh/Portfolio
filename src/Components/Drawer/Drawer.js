import React from "react";
import "./drawer.css";
import { DrawerOption } from "./DrawerOption";
import logo from "../../imgs/react-logo.gif";

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
        <DrawerOption title="Resume" />
        <DrawerOption title="Github" />
        <DrawerOption title="Linked In" />
      </div>
    </div>
  );
};
