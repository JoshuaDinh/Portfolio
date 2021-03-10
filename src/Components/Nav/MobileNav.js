import React from "react";
import NavOption from "./NavOption";
import resume from "../../imgs/Resume.pdf";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { connect } from "react-redux";
import { toggleMobileNav } from "../../actions";

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <div className="mobile-nav">
      <div onClick={toggleMobileNav}>
        <CancelPresentationIcon className="mobile-nav-close-icon" />
      </div>
      <NavOption title="Project Bitcoin" link="Bitcoin" />
      <NavOption title="Project Project Covid" link="Covid" />
      <NavOption title="Project Netflix" link="Netflix" />
      <a className="nav-option" href={resume} target="_blank" rel="noreferrer">
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
  );
};

const mapStateToProps = (state) => {
  return {
    mobileNav: state.mobileNav.state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMobileNav: () => dispatch(toggleMobileNav()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
