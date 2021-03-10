import React from "react";
import "./aboutMe.css";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import { toggleAboutMeModal } from "../../actions";

const AboutMe = ({ toggle }) => {
  return (
    <div id="AboutMe" onClick={toggle} className="about-me">
      <div className="about-me-modal">
        <div className="about-me-close-button">
          <ClearIcon />
        </div>
        <div className="highlight-text">
          <span className="highlight-text">A</span>
          <span className="highlight-text">b</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text">u</span>
          <span className="highlight-text">t</span>
          <span className="highlight-text"> M</span>
          <span className="highlight-text">e</span>
        </div>
        <p className="about-me-text">
          My name is Joshua, I go by Josh as well. I have over a year of
          experience in javascript development and love to build in React.Js. I
          am looking to be apart of a large scale application/team and I am
          always interested in connecting with others that share my passion.
          Curiosity has really helped me become a great developer and I look
          forward to continuing my journey into the world of software. Born and
          raised in San Diego. If I were to define my passion with one sentence
          it would be that "I am intrigued with finance & inspired by tech!"
        </p>
        <button className="about-me-button">
          <span>Thank's for reading</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    aboutMe: state.aboutMe.toggleAboutMeModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleAboutMeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
