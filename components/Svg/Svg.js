import React from "react";
import styles from "./Svg.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { SvgVariant, SvgItem } from "../../variants/Variants";

const Svg = () => {
  return (
    <motion.div
      className={styles.container}
      variants={SvgVariant}
      initial="initial"
      animate="animate"
    >
      <motion.a
        variants={SvgItem}
        href="tel:6199773574"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <LocalPhoneIcon className={styles.svg} />
      </motion.a>
      <motion.a
        variants={SvgItem}
        href="mailto: josh@joshuadinh.tech"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <EmailIcon className={styles.svg} />
      </motion.a>

      <motion.a
        variants={SvgItem}
        href="https://github.com/JoshuaDinh"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <GitHubIcon className={styles.svg} />
      </motion.a>
      <motion.a
        variants={SvgItem}
        href="https://www.linkedin.com/in/joshuahungdinh"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <LinkedInIcon className={styles.svg} />
      </motion.a>
      <div className={styles.line}></div>
    </motion.div>
  );
};

export default Svg;
