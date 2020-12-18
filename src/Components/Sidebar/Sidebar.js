import React from "react";
import "./sidebar.css";
import SideDrawer from "./sideDrawer";

const Sidebar = ({ openProjects, projectVideo, title, link }) => {
  return (
    <div
      className={`sidebar  ${openProjects && "openProjects__sidebar-active"}`}
    >
      <SideDrawer vid={projectVideo} title={title} link={link} />
    </div>
  );
};

export default Sidebar;
