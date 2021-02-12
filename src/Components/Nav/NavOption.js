import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

export const NavOption = ({ title, link, setAboutMeModal }) => {
  // const handleClick = () => {
  //   if (setAboutMeModal === true) {
  //     setAboutMeModal(true);
  //   }
  // };

  return (
    <Link
      onClick={setAboutMeModal ? () => setAboutMeModal(true) : null}
      to={link}
      duration={1000}
      smooth={true}
      className="nav-option"
    >
      {title}
    </Link>
  );
};
