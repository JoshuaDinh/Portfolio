import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "./button.css";

const Button = ({ currentIdx, setCurrentIdx, openProjects }) => {
  return (
    <div className={`button ${openProjects && "button__project"}`}>
      <div
        className={`button__container-left ${
          openProjects && "button__project-left"
        }`}
      >
        <ArrowLeftIcon
          style={{ fontSize: 42 }}
          onClick={() => setCurrentIdx(currentIdx - 1)}
        />
      </div>
      <div
        className={`button__container-right ${
          openProjects && "button__project-right"
        }`}
      >
        <ArrowRightIcon
          style={{ fontSize: 42 }}
          onClick={() => setCurrentIdx(currentIdx + 1)}
        />
      </div>
    </div>
  );
};

export default Button;
