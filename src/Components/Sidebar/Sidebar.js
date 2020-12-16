import React from "react";
import "./sidebar.css";
import SideDrawer from "./sideDrawer";
import netflix from "../../imgs/netflix.png";
import covid from "../../imgs/Covid.png";
import bitcoin from "../../imgs/Bitcoin.png";

const Sidebar = ({ openProjects }) => {
  return (
    <div
      className={`sidebar ${openProjects && "openProjects__sidebar-active"}`}
    >
      <SideDrawer title="Bitcoin Dashboard" image={bitcoin} />
      <SideDrawer title="Covid-19 Stats" image={covid} />
      <SideDrawer title="Netflix Clone" image={netflix} />
    </div>
  );
};

export default Sidebar;
