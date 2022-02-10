import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.div className={styles.container} variants={item}>
      <div className={styles.wrapper}>
        <p className={styles.featuredTitle}>Featured Project:</p>
        <h3 className={styles.projectName}>Spotify Remote</h3>
        <p className={styles.projectDescription}>
          A web app used to connect with a premum Spotify account. It allows
          users full control and access to their music playlist
        </p>
        <ul>
          <span>-</span>
          <li>React</li>
          <li>Javascript</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <a className={styles.link}>
        <img
          className={styles.image}
          src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
          alt=""
        />
      </a>
    </motion.div>
  );
};

export default Card;
