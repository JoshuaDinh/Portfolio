import React, { useState, useEffect } from "react";
import styles from "./Cursor.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [hover, setHover] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const mainSpringConfig = { damping: 40, stiffness: 200 };
  const cursorMainXSpring = useSpring(cursorX, mainSpringConfig);
  const cursorMainYSpring = useSpring(cursorY, mainSpringConfig);

  const secondarySpringConfig = { damping: 25, stiffness: 750 };
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
  }, [cursorX, cursorY]);

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
        }}
      ></motion.div>
    </>
  );
};

export default Cursor;
