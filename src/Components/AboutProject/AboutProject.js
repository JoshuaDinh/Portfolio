import React from "react";
import "./aboutProject.css";
import { Technology } from "../Technology/Technology";
import { Description } from "../Description/Description";

export const AboutProject = () => {
  return (
    <div className="about-project">
      <Description />
      <Technology />
    </div>
  );
};
