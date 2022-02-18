import React, { useEffect } from "react";
import styles from "./About.module.css";
import Title from "../Title/Title";
import Image from "next/image";
import { MainVariant, MainItem } from "../../variants/Variants";
import LanguageIcon from "@mui/icons-material/Language";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className={styles.section}
      variants={MainVariant}
      initial="initial"
      animate={controls}
      ref={ref}
      id="about"
    >
      <Title title="About Me" item={MainItem} number="01." />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <motion.p variants={MainItem}>
            Hello, my name Joshua, I also go by Josh as well. I bring innovative
            ideas to life on the web while adhering to clean content structure
            and modern JavaScript techniques.
          </motion.p>
          <motion.p variants={MainItem}>
            I currently reside in San Diego Ca, I enjoy traveling and I am open
            to relocation for the right projects. I have been developing and
            deploying web applications since January of 2020 and have enjoyed
            the many aspects of creativity and engineering that go into making
            unique digital experiences.
          </motion.p>
        </div>
        <motion.div className={styles.rightContainer}>
          <motion.p variants={MainItem}>
            Here are a few technologies I have worked with recently:
          </motion.p>
          <motion.ul className={styles.listContainer} variants={MainItem}>
            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} />
              JavaScript
            </li>
            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} />
              React
            </li>

            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} /> Node.js
            </li>
            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} />
              MongoDb
            </li>

            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} />
              Redux
            </li>
            <li className={styles.listItem}>
              <LanguageIcon className={styles.icon} />
              Tailwind
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
