import React from "react";
import "./videoFrame.css";

export const VideoFrame = ({ video }) => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
