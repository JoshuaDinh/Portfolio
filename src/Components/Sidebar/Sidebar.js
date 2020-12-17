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
      <SideDrawer title="Bitcoin Dashboard" image={bitcoin} link="/crypto" />
      <SideDrawer title="Covid-19 Stats" image={covid} link="/covid19" />
      <SideDrawer
        title="Netflix Clone"
        image={netflix}
        link="www.joshuadinh.tech/covid19"
      />
    </div>
  );
};

export default Sidebar;
