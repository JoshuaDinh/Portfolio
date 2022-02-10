import React from "react";
import styles from "./Title.module.css";
import { motion } from "framer-motion";

const Title = ({ title, reference, item }) => {
  return (
    <motion.h2 className={styles.title} variants={item} ref={reference}>
      {title}
      <span>.</span>
    </motion.h2>
  );
};

export default Title;
