import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <div className={styles.wrapper}>
        <a>Projects</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
