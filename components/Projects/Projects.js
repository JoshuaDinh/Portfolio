import React, { useEffect } from "react";
import Title from "../Title/Title";

import Card from "../Card/Card";
import styles from "./Projects.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MainVariant, MainItem } from "../../variants/Variants";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className={styles.container}
      variants={MainVariant}
      initial="initial"
      animate={controls}
      id="projects"
    >
      <Title title="Projects" reference={ref} item={MainItem} />
      <Card item={MainItem} />
      <Card item={MainItem} />
      <Card item={MainItem} />
      <Card item={MainItem} />
    </motion.section>
  );
};

export default Projects;
