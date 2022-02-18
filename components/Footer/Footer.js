import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { MainVariant, MainItem } from "../../variants/Variants";
import { GitHub, Phone } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <motion.footer className={styles.footer}>
      <motion.a
        variants={MainItem}
        className={styles.link}
        href="tel:6199773574"
        target="_blank"
        rel="noreferrer"
      >
        <Phone className={styles.icon} />
        (619)-977-3574
      </motion.a>
      <motion.a
        variants={MainItem}
        className={styles.link}
        href="mailto: josh@joshuadinh.tech"
      >
        <EmailIcon className={styles.icon} /> Josh@joshuadinh.tech
      </motion.a>
      <motion.a
        variants={MainItem}
        className={styles.link}
        href="https://github.com/JoshuaDinh"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub className={styles.icon} /> Github.com/joshuadinh
      </motion.a>
    </motion.footer>
  );
};

export default Footer;
