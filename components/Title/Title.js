import React from "react";
import styles from "./Title.module.css";
import { motion } from "framer-motion";

const Title = ({ title, reference, item, number }) => {
  return (
    <div className={styles.container} ref={reference}>
      <motion.h2 className={styles.title} variants={item}>
        <span className={styles.number}>{number}</span>
        {title}
      </motion.h2>
    </div>
  );
};

export default Title;
