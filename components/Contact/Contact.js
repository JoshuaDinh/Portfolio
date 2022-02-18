import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import Title from "../Title/Title";
import { MainVariant, MainItem } from "../../variants/Variants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className={styles.container}
      variants={MainVariant}
      initial="initial"
      animate={controls}
      ref={ref}
      id="contact"
    >
      <Title title="Lets Get In Touch" item={MainItem} number="03." />
      <Form item={MainItem} />
    </motion.section>
  );
};

export default Contact;
