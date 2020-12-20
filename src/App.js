import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import CloseIcon from "@material-ui/icons/Close";
import img from "./imgs/img.jpg";
import MouseParticles from "react-mouse-particles";
import covid19 from "./imgs/covid-vid.mov";
import bitcoin from "./imgs/bitcoin-vid.mov";
import netflix from "./imgs/netflix-vid.mov";
import ProjectsDisplay from "./Components/Projects/ProjectsDisplay";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import mandala1 from "./mandala/1.png";
import mandala2 from "./mandala/2.png";
import mandala3 from "./mandala/3.png";
import mandala4 from "./mandala/4.png";
import mandala5 from "./mandala/5.png";
import mandala6 from "./mandala/6.png";
const App = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  // const [particles, setParticles] = useState(true);

  const displayProjectVideo = () => {
    if (currentIdx == 0) {
      return (
        <ProjectsDisplay
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
          <ProjectsDisplay
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
          <ProjectsDisplay
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
      <img className="mandala" src={mandala1} />
      <img className="mandala" src={mandala2} />
      <img className="mandala" src={mandala3} />
      <img className="mandala" src={mandala4} />
      <img className="mandala" src={mandala5} />
      <img className="mandala" src={mandala6} />
      <img className="mandala" src={mandala2} />
      <img className="mandala" src={mandala1} />
      <img className="mandala" src={mandala3} />
      <img className="mandala" src={mandala5} />
      <img className="mandala" src={mandala6} />
      <img className="mandala" src={mandala1} />
      <img className="mandala" src={mandala5} />
      <img className="mandala" src={mandala2} />
      <img className="mandala" src={mandala3} />
      <img className="mandala" src={mandala5} />
      <div className="app__opening-header typewriter">
        <h4>Hello My Name Is</h4>
        <h1>Joshua Dinh</h1>
      </div>
      {/* <PersonalInfo openProjects={openProjects} />
      <div className="app__header "></div>
      <div className="app__image-border">
        <img src={img} />
      </div>
      <div className="app__opening-container">
        <div className="app__opening-line"></div>
        <div className="app__opening-line"></div>
        <div className="app__opening-line"></div>
        <div className="app__opening-line"></div>
        <div className="app__opening-line"></div>
        <div className="app__opening-line"></div>
      </div>

      {displayProjectVideo()}
      {!openProjects ? (
        <div
          onClick={() => setOpenProjects(!openProjects)}
          className={`app__projectArrow animate__animated animate__backInLeft  ${
            openProjects && "openProjects-active"
          }`}
        >
          <span>Projects</span>
          <ArrowLeftIcon fontSize="large" style={{ color: "white" }} />
        </div>
      ) : (
        <div
          onClick={() => setOpenProjects(!openProjects)}
          className={`app__projectArrow animate__animated animate__backInLeft  ${
            openProjects && "openProjects-active"
          }`}
        >
          <span>Close</span>
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      )}
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
      /> */}
    </div>
  );
};

export default App;
