import React from "react";
import "./nav.css";
import NavOption from "./NavOption";
import logo from "../../imgs/react-logo.gif";
import resume from "../../imgs/Resume.pdf";
import { toggleAboutMeModal } from "../../actions";
import { connect } from "react-redux";

const Nav = ({ toggle }) => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="" />
        </div>
        <NavOption title="about me" toggle={toggle} />
        <NavOption title="Project Bitcoin" link="Bitcoin" />
        <NavOption title="Project Covid19" link="Covid" />
        <NavOption title="Project Yotube" link="Youtube" />
        <NavOption title="Project Netflix" link="Netflix" />
        <a
          className="nav-option"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a
          className="nav-option"
          href="https://github.com/JoshuaDinh"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="nav-option"
          href="https://www.linkedin.com/in/joshuahungdinh/"
          target="_blank"
          rel="noreferrer"
        >
          Linked-In
        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
