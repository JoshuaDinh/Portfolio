import { motion } from "framer-motion";
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        delayChildren: 1.5,
        staggerChildren: 0.175,
      },
    },
  };

  const item = {
    initial: { opacity: 0.1, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      ease: [0.645, 0.045, 0.355, 1],
    },
  };
  return (
    <motion.section
      className={styles.section}
      variants={variants}
      initial="initial"
      animate="animate"
      id="hero"
    >
      <motion.h1 className={styles.smallHeader} variants={item}>
        <span>Hello</span>, my name is
      </motion.h1>
      <motion.h2 className={styles.mainHeader} variants={item}>
        <span>Joshua</span> Dinh.
      </motion.h2>
      <motion.h3 className={styles.mainHeader} variants={item}>
        I build things for the <span>WEB</span>.
      </motion.h3>

      <motion.p className={styles.content} variants={item}>
        I'm a software engineer that specializes in web development.
        <hr></hr>
        <span>
          “The Web as I envisaged it, we have not seen it yet. The future is
          still so much bigger than the past.” - Tim Berners-Lee ( Creator of
          the World Wide Web )
        </span>
      </motion.p>
    </motion.section>
  );
};

export default Hero;
