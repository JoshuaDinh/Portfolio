import React, { useState, useEffect } from "react";
import "./App.css";
import { ProjectWrapper } from "./Components/ProjectWrapper/ProjectWrapper";
import { Drawer } from "./Components/Drawer/Drawer";
import { Nav } from "./Components/Nav/Nav";
import { OpeningAnimation } from "./Components/OpeningAnimation/OpeningAnimation";
import bitcoin from "./imgs/bitcoin-vid.mov";
import covid from "./imgs/covid-vid.mov";
import netflix from "./imgs/netflix-vid.mov";
import AboutMe from "./Components/AboutMe/AboutMe";
import { BitcoinDesc } from "../src/Components/Description/DescriptionText";
import { CovidDesc } from "../src/Components/Description/DescriptionText";
import { NetflixDesc } from "../src/Components/Description/DescriptionText";
import { BitcoinSkills } from "./Components/Technology/TechnologyText";
import { CovidSkills } from "./Components/Technology/TechnologyText";
import { NetflixSkills } from "./Components/Technology/TechnologyText";
import { ReactRain } from "./Components/ReactRain/ReactRain";

const App = () => {
  const [aboutMeModal, setAboutMeModal] = useState(false);
  const [makeItRain, setMakeItRain] = useState(false);

  // Hides overflow until opening animation is complete
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("reveal-body-overflow");
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <OpeningAnimation />
      {aboutMeModal === true ? (
        <AboutMe setAboutMeModal={setAboutMeModal} />
      ) : null}
      <Nav setMakeItRain={setMakeItRain} />
      <div className="app-content-container">
        <Drawer setAboutMeModal={setAboutMeModal} />
        <div className="app-content">
          <ProjectWrapper
            DescriptionText={<BitcoinDesc />}
            SkillsUsedText={<BitcoinSkills />}
            ScrollLink="Bitcoin"
            Video={bitcoin}
            ProjectTitle="Project Bitcoin"
          />
          <ProjectWrapper
            DescriptionText={<CovidDesc />}
            SkillsUsedText={<CovidSkills />}
            ScrollLink="Covid"
            Video={covid}
            ProjectTitle="Project Covid"
          />
          <ProjectWrapper
            DescriptionText={<NetflixDesc />}
            SkillsUsedText={<NetflixSkills />}
            ScrollLink="Netflix"
            Video={netflix}
            ProjectTitle="Project Netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
