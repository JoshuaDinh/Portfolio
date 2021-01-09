import React, { useState, useEffect } from "react";
import "./drawer.css";
import { Link } from "react-scroll";

export const DrawerOption = ({ title, link, setAboutMeModal }) => {
  return (
    <Link
      onClick={setAboutMeModal ? () => setAboutMeModal(true) : null}
      to={link}
      duration={1000}
      smooth={true}
      className="drawer-option"
      href="Resume.pdf"
      target="_blank"
    >
      {title}
    </Link>
  );
};
