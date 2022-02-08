import React from "react";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";

const Navigation = () => {
  const variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    initial: { opacity: 0, y: -25 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <nav className={styles.container}>
      <div>JD</div>
      <motion.div
        className={styles.wrapper}
        const
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.a variants={item}>Home</motion.a>
        <motion.a variants={item} variants={item}>
          About
        </motion.a>
        <motion.a variants={item}>Services</motion.a>
        <motion.a variants={item}>Projects</motion.a>
        <motion.a variants={item}>Contact</motion.a>
        <motion.a variants={item} className={styles.resume}>
          Resume
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navigation;
