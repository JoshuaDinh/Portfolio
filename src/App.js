import React, { useEffect } from "react";
import "./App.css";
import bitcoin from "./imgs/bitcoin-vid.mov";
import covid from "./imgs/covid-vid.mov";
import netflix from "./imgs/netflix-vid.mov";
import youtube from "./imgs/youtube-vid.mov";
import AboutMe from "./Components/AboutMe/AboutMe";
import { ProjectWrapper } from "./Components/ProjectWrapper/ProjectWrapper";
import { Nav } from "./Components/Nav/Nav";
import MobileNav from "./Components/Nav/MobileNav";
import Header from "./Components/Header/Header";
import { OpeningAnimation } from "./Components/OpeningAnimation/OpeningAnimation";
import {
  BitcoinDesc,
  CovidDesc,
  YoutubeDesc,
  NetflixDesc,
} from "../src/Components/Description/DescriptionText";

import {
  BitcoinSkills,
  CovidSkills,
  NetflixSkills,
  YotubeSkills,
} from "./Components/Technology/TechnologyText";

import { connect } from "react-redux";

const App = ({ aboutMe, mobileNav }) => {
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
      {aboutMe ? <AboutMe /> : null}
      <Header />
      {mobileNav && <MobileNav />}
      <div className="app-content-container">
        <Nav />
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
            DescriptionText={<YoutubeDesc />}
            SkillsUsedText={<YotubeSkills />}
            ScrollLink="Youtube Player"
            Video={youtube}
            ProjectTitle="Project Youtube"
            CodeLink="https://github.com/JoshuaDinh/Youtube"
            DemoLink=""
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

const mapStateToProps = (state) => {
  return {
    aboutMe: state.aboutMe.toggleAboutMeModal,
    mobileNav: state.mobileNav,
  };
};

export default connect(mapStateToProps)(App);
