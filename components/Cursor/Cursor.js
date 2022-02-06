import React, { useEffect } from "react";
import styles from "./Cursor.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const mainSpringConfig = { damping: 20, stiffness: 750 };
  const cursorMainXSpring = useSpring(cursorX, mainSpringConfig);
  const cursorMainYSpring = useSpring(cursorY, mainSpringConfig);

  const secondarySpringConfig = { damping: 40, stiffness: 200 };
  const cursorSecondaryXSpring = useSpring(cursorX, secondarySpringConfig);
  const cursorSecondaryYSpring = useSpring(cursorY, secondarySpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={styles.cursor}
        style={{
          translateX: cursorMainXSpring,
          translateY: cursorMainYSpring,
        }}
      ></motion.div>
      {/* SVG Cursor Trail */}
      <motion.div
        className={styles.cursorTrail}
        style={{
          translateX: cursorSecondaryXSpring,
          translateY: cursorSecondaryYSpring,
          color: "white",
        }}
      ></motion.div>
    </>
  );
};

export default Cursor;
