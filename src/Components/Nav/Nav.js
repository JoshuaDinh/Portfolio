import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        {" "}
        <h5>Joshs Dashboard</h5>
        <div className="nav-icons">
          <AttachMoneyIcon />
          <Avatar>JD</Avatar>
        </div>
      </div>
    </div>
  );
};
