import React, { useState } from "react";
import "./nav.css";
import NavOption from "./NavOption";
import logo from "../../imgs/react-logo.gif";
import { toggleAboutMeModal } from "../../actions";
import { connect } from "react-redux";

const Nav = ({ toggle }) => {
  const [activeLink, setActiveLink] = useState(2);

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="" />
        </div>
        <NavOption
          title="about me"
          toggle={toggle}
          activeLink={activeLink}
          id={1}
        />
        <NavOption
          title="Project Crypto"
          link="Bitcoin"
          activeLink={activeLink}
          toggle={() => setActiveLink(2)}
          id={2}
        />
        <NavOption
          title="Project Covid19"
          link="Covid"
          activeLink={activeLink}
          toggle={() => setActiveLink(3)}
          id={3}
        />
        <NavOption
          title="Project Yotube"
          link="Youtube"
          activeLink={activeLink}
          toggle={() => setActiveLink(4)}
          id={4}
        />
        <NavOption
          title="Project Netflix"
          link="Netflix"
          activeLink={activeLink}
          toggle={() => setActiveLink(5)}
          id={5}
        />
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
