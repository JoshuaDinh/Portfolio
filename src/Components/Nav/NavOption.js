import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

const NavOption = ({ title, link, toggle }) => {
  return (
    <Link
      onClick={toggle && toggle}
      to={link}
      duration={1000}
      smooth={true}
      className="nav-option"
    >
      {title}
    </Link>
  );
};

export default NavOption;
