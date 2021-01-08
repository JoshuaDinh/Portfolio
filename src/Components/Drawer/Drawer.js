import React from "react";
import "./drawer.css";
import { DrawerOption } from "./DrawerOption";
import logo from "../../imgs/react-logo.gif";

export const Drawer = () => {
  return (
    <div className="drawer-container">
      <div className="drawer">
        <div className="drawer-header">
          <img className="drawer-logo" src={logo} alt="" />
        </div>
        <DrawerOption title="about me" />
        <DrawerOption title="Project Bitcoin" />
        <DrawerOption title="Project Project Covid" />
        <DrawerOption title="Project Netflix" />
        <DrawerOption title="Resume" />
        <DrawerOption title="Github" />
        <DrawerOption title="Linked In" />
      </div>
    </div>
  );
};
