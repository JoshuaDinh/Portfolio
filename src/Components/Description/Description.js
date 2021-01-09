import React from "react";
import "./description.css";

export const Description = ({ DescriptionText }) => {
  return (
    <div className="description">
      <h4>Description</h4>
      {DescriptionText}
    </div>
  );
};
