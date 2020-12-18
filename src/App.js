import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Button from "./Components/Button/Button";
import Nav from "./Components/Sidebar/Nav";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import video from "./imgs/flower.mp4";
import video2 from "./imgs/flower2.mp4";
import video3 from "./imgs/flower3.mp4";
import MouseParticles from "react-mouse-particles";

const App = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [particles, setParticles] = useState(true);

  return (
    <div className="App">
      {currentIdx === 0 ? (
        <video
          className="animate__animated animate__fadeInRightBig"
          autoPlay
          muted
          loop
        >
          <source src={video2} type="video/mp4" />
        </video>
      ) : currentIdx === 1 ? (
        <div>
          {" "}
          <video
            className="animate__animated animate__flip"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : (
        <video
          className="animate__animated animate__fadeInRightBig"
          autoPlay
          muted
          loop
        >
          <source src={video3} type="video/mp4" />
        </video>
      )}
      <Nav />
      <div className="app__header animate__animated animate__fadeInDownBig"></div>
      <Sidebar openProjects={openProjects} />
      <div
        onClick={() => setOpenProjects(!openProjects)}
        className={`app__projectArrow animate__animated animate__backInLeft  ${
          openProjects && "openProjects-active"
        }`}
      >
        {" "}
        <span>Projects</span>
        <ArrowLeftIcon fontSize="large" style={{ color: "white" }} />
      </div>
      <Button setCurrentIdx={setCurrentIdx} currentIdx={currentIdx} />

      <MouseParticles
        g={1}
        num={10}
        life={0.5}
        color={[
          "#ddf780",
          "#ffffff",
          "#ffffff",
          "#ddf780",
          "#ddf780",
          "#9b9b9b",
        ]}
        cull="col,image-wrapper"
      />
    </div>
  );
};

export default App;
