import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Hello I am Joshua Dinh</h1>
      <h1 className={styles.subHeader}>I am a software developer..</h1>
    </div>
  );
};

export default Hero;
