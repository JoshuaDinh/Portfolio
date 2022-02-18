import React, { useState } from "react";
import styles from "./MobileNavigation.module.css";
import TocIcon from "@mui/icons-material/Toc";
import { motion, AnimatePresence } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { MobileNavVariant } from "../../variants/Variants";

const MobileNavigation = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>J.D</div>
      {!nav ? (
        <TocIcon className={styles.icon} onClick={() => setNav(!nav)} />
      ) : (
        <CloseIcon className={styles.icon} onClick={() => setNav(!nav)} />
      )}
      <AnimatePresence>
        {nav && (
          <motion.div
            className={styles.wrapper}
            variants={MobileNavVariant}
            key="nav"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div className={styles.linkWrapper}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
              >
                <span className={styles.number}>01.</span> About
              </Link>
              <ArrowDropDownIcon className={styles.linkIcon} />
            </motion.div>
            <motion.div
              className={styles.linkWrapper}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
              >
                <span className={styles.number}>02.</span> Projects
              </Link>
              <ArrowDropDownIcon className={styles.linkIcon} />
            </motion.div>
            <motion.div
              className={styles.linkWrapper}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
              >
                <span className={styles.number}>03.</span> Contact
              </Link>
              <ArrowDropDownIcon className={styles.linkIcon} />
            </motion.div>
            <motion.div className={styles.linkWrapper}>
              <span className={styles.number}>04.</span> Resume
              <ArrowDropDownIcon className={styles.linkIcon} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavigation;
