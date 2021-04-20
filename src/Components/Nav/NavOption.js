import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

const NavOption = ({ title, link, toggle, id, activeLink }) => {
  return (
    <Link
      onClick={toggle && toggle}
      to={link}
      duration={1000}
      smooth={true}
      className={`nav-option ${id == activeLink && "nav-option-active"}`}
      id={id}
    >
      {title}
    </Link>
  );
};

export default NavOption;
