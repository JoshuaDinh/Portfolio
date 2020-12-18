import React from "react";
import "./sidebar.css";
import SideDrawer from "./sideDrawer";
import covid19 from "../../imgs/covid-vid.mov";
import bitcoin from "../../imgs/bitcoin-vid.mov";
import netflix from "../../imgs/netflix-vid.mov";

const Sidebar = ({ openProjects }) => {
  return (
    <div
      className={`sidebar  ${openProjects && "openProjects__sidebar-active"}`}
    >
      <SideDrawer
        vid={bitcoin}
        title="Bitcoin Dashboard"
        image={bitcoin}
        link="/crypto"
      />
      {/* <SideDrawer vid={covid19} title="Covid-19 Stats" link="/covid19" />
      <SideDrawer
        vid={netflix}
        title="Netflix Clone"
        link="www.joshuadinh.tech/covid19"
      /> */}
    </div>
  );
};

export default Sidebar;
