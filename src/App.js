import React, { useState, useEffect } from "react";
import "./App.css";
import bitcoin from "./imgs/bitcoin-vid.mov";
import covid from "./imgs/covid-vid.mov";
import netflix from "./imgs/netflix-vid.mov";
import AboutMe from "./Components/AboutMe/AboutMe";
import { ProjectWrapper } from "./Components/ProjectWrapper/ProjectWrapper";
import { Drawer } from "./Components/Drawer/Drawer";
import { Nav } from "./Components/Nav/Nav";
import { OpeningAnimation } from "./Components/OpeningAnimation/OpeningAnimation";
import { BitcoinDesc } from "../src/Components/Description/DescriptionText";
import { CovidDesc } from "../src/Components/Description/DescriptionText";
import { NetflixDesc } from "../src/Components/Description/DescriptionText";
import { BitcoinSkills } from "./Components/Technology/TechnologyText";
import { CovidSkills } from "./Components/Technology/TechnologyText";
import { NetflixSkills } from "./Components/Technology/TechnologyText";

const App = () => {
  const [aboutMeModal, setAboutMeModal] = useState(false);

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
      <Nav />
      <div className="app-content-container">
        <Drawer setAboutMeModal={setAboutMeModal} />
        <div className="app-content">
          <ProjectWrapper
            DescriptionText={<BitcoinDesc />}
            SkillsUsedText={<BitcoinSkills />}
            ScrollLink="Bitcoin"
            Video={bitcoin}
            ProjectTitle="Project Bitcoin"
            CodeLink="https://github.com/JoshuaDinh/CryptoCurrency-WebSite"
            DemoLink="http://www.joshuadinh.tech/crypto/"
          />
          <ProjectWrapper
            DescriptionText={<CovidDesc />}
            SkillsUsedText={<CovidSkills />}
            ScrollLink="Covid"
            Video={covid}
            ProjectTitle="Project Covid"
            CodeLink="https://github.com/JoshuaDinh/Covid-19"
            DemoLink="http://www.joshuadinh.tech/covid19/"
          />
          <ProjectWrapper
            DescriptionText={<NetflixDesc />}
            SkillsUsedText={<NetflixSkills />}
            ScrollLink="Netflix"
            Video={netflix}
            ProjectTitle="Project Netflix"
            CodeLink="https://github.com/JoshuaDinh/Netflix"
            DemoLink=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
