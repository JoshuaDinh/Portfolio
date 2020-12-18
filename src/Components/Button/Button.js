import React, { useState, useEffect } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "./button.css";

const Button = ({ currentIdx, setCurrentIdx }) => {
  return (
    <div className="button">
      <div className="button__container">
        <ArrowLeftIcon
          style={{ fontSize: 42 }}
          onClick={() => setCurrentIdx(currentIdx - 1)}
        />
      </div>
      <div className="button__container">
        <ArrowRightIcon
          style={{ fontSize: 42 }}
          onClick={() => setCurrentIdx(currentIdx + 1)}
        />
      </div>
    </div>
  );
};

export default Button;
