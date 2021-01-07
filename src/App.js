import React, { useState, useEffect } from "react";
import "./App.css";
// import Button from "./Components/Button/Button";
// import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
// import CloseIcon from "@material-ui/icons/Close";
// import img from "./imgs/img.jpg";
import MouseParticles from "react-mouse-particles";
// import covid19 from "./imgs/covid-vid.mov";
// import bitcoin from "./imgs/bitcoin-vid.mov";
// import netflix from "./imgs/netflix-vid.mov";
import mandala1 from "./mandala/1.png";
import mandala2 from "./mandala/2.png";
import mandala3 from "./mandala/3.png";
import mandala4 from "./mandala/4.png";
import mandala5 from "./mandala/5.png";
import mandala6 from "./mandala/6.png";
import mandala7 from "./mandala/7.png";
import mandala8 from "./mandala/8.png";
import mandala9 from "./mandala/9.png";
import mandala10 from "./mandala/10.png";
import mandala11 from "./mandala/11.png";
import mandala12 from "./mandala/12.png";
import Navigation from "./Components/Navigation/Navigation";
import AboutMeHeadLine from "./Components/AboutMe/AboutMeHeadline";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectsHeadLine from "./Components/Projects/ProjectsHeadLine";
import SkillsHeadLine from "./Components/Skills/SkillsHeadLine";

const App = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <img className="mandala" alt="mandala" src={mandala1} />
      <img className="mandala" alt="mandala" src={mandala2} />
      <img className="mandala" alt="mandala" src={mandala3} />
      <img className="mandala" alt="mandala" src={mandala4} />
      <img className="mandala" alt="mandala" src={mandala5} />
      <img className="mandala" alt="mandala" src={mandala6} />
      <img className="mandala" alt="mandala" src={mandala7} />
      <img className="mandala" alt="mandala" src={mandala8} />
      <img className="mandala" alt="mandala" src={mandala9} />
      <img className="mandala" alt="mandala" src={mandala10} />
      <img className="mandala" alt="mandala" src={mandala11} />
      <img className="mandala" alt="mandala" src={mandala12} />
      <img className="mandala" alt="mandala" src={mandala1} />
      <img className="mandala" alt="mandala" src={mandala2} />
      <img className="mandala" alt="mandala" src={mandala3} />
      <img className="mandala" alt="mandala" src={mandala5} />
      <div className="app__opening-header typewriter">
        <h4>Hello My Name Is</h4>
        <h1>Joshua Dinh</h1>
      </div>
      <header className="header">
        <Navigation offset={offset} />
        <AboutMeHeadLine offset={offset} />
        <ProjectsHeadLine offset={offset} />
        <SkillsHeadLine offset={offset} />
      </header>
      <AboutMe offset={offset} />
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
      />{" "}
    </div>
  );
};

export default App;
