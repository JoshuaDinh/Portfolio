import React from "react";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navigation = () => {
  const variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    initial: { opacity: 0, y: -15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.645, 0.045, 0.355, 1] },
    },
  };

  return (
    <motion.nav
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={item} className={styles.logo}>
        J.D
      </motion.div>
      <motion.div
        className={styles.wrapper}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={item} className={styles.linkWrapper}>
          <Link to="about" smooth={true} duration={500} exact={true}>
            <span className={styles.number}>01.</span> About
          </Link>
          <ArrowDropDownIcon className={styles.downIcon} />
        </motion.div>
        <motion.div
          className={styles.linkWrapper}
          variants={item}
          smooth={true}
          duration={500}
          exact={true}
        >
          <Link to="projects" smooth={true} duration={500} exact={true}>
            <span className={styles.number}>02.</span> Projects
          </Link>
          <ArrowDropDownIcon className={styles.downIcon} />
        </motion.div>
        <motion.div
          className={styles.linkWrapper}
          variants={item}
          smooth={true}
          duration={500}
          exact={true}
        >
          <Link to="contact" smooth={true} duration={500} exact={true}>
            <span className={styles.number}>03.</span> Contact
          </Link>
          <ArrowDropDownIcon className={styles.downIcon} />
        </motion.div>
        <motion.a
          variants={item}
          className={styles.resume}
          href="/JoshuaDinhResume.pdf"
          target="_blank"
        >
          Resume <FileDownloadIcon className={styles.icon} />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
