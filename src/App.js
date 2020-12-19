import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Button from "./Components/Button/Button";
import Nav from "./Components/Sidebar/Nav";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import img from "./imgs/img.jpg";
import MouseParticles from "react-mouse-particles";
import covid19 from "./imgs/covid-vid.mov";
import bitcoin from "./imgs/bitcoin-vid.mov";
import netflix from "./imgs/netflix-vid.mov";
const App = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [particles, setParticles] = useState(true);

  const displayProjectVideo = () => {
    if (currentIdx == 0) {
      return (
        <Sidebar
          projectVideo={bitcoin}
          setcurrentidx={setCurrentIdx}
          openProjects={openProjects}
          title="Bitcoin Dashboard"
          link="/crypto"
        />
      );
    }
    if (currentIdx == 1) {
      return (
        <div>
          <Sidebar
            projectVideo={covid19}
            setcurrentidx={setCurrentIdx}
            openProjects={openProjects}
            title="Covid-19 Map"
            link="/covid19"
          />
        </div>
      );
    }
    if (currentIdx == 2) {
      return (
        <>
          <Sidebar
            projectVideo={netflix}
            setcurrentidx={setCurrentIdx}
            openProjects={openProjects}
            title="Netflix clone"
            link={"/netflix"}
          />
        </>
      );
    }
    if (currentIdx > 2) {
      setCurrentIdx(0);
    }
    if (currentIdx < 0) {
      setCurrentIdx(2);
    }
  };

  return (
    <div className="App">
      <div className="app__opening-header typewriter">
        <h4>Hello My Name Is</h4>
        <h1>Joshua Dinh</h1>
      </div>
      <Nav openProjects={openProjects} />
      <div className="app__header "></div>
      <div className="app__image-border">
        <img src={img} />
      </div>
      <div className="app__opening-container">
        <div className="app__opening-background"></div>
        <div className="app__opening-background"></div>
        <div className="app__opening-background"></div>
        <div className="app__opening-background"></div>
        <div className="app__opening-background"></div>
        <div className="app__opening-background"></div>
      </div>

      {displayProjectVideo()}
      <div
        onClick={() => setOpenProjects(!openProjects)}
        className={`app__projectArrow animate__animated animate__backInLeft  ${
          openProjects && "openProjects-active"
        }`}
      >
        <span>Projects</span>
        <ArrowLeftIcon fontSize="large" style={{ color: "white" }} />
      </div>
      <Button
        openProjects={openProjects}
        setCurrentIdx={setCurrentIdx}
        currentIdx={currentIdx}
      />
      <MouseParticles
        g={1}
        num={10}
        life={0.5}
        color={[
          "#000000",
          "#ffffff",
          "#ffffff",
          "#000000",
          "#ffffff",
          "#000000",
        ]}
        cull="col,image-wrapper"
      />
    </div>
  );
};

export default App;
