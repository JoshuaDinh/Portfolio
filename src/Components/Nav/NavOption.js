import React from "react";
import "./nav.css";
import { Link } from "react-scroll";
import { connect } from "react-redux";
import { toggleAboutMeModal } from "../../actions";

const NavOption = ({ title, link, toggle }) => {
  return (
    <Link
      onClick={toggle}
      to={link}
      duration={1000}
      smooth={true}
      className="nav-option"
    >
      {title}
    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavOption);
