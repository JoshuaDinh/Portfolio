import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import { MainVariant, MainItem } from "../../variants/Variants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitHub, Phone } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

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
      <motion.h2 className={styles.pageHeader} variants={MainItem}>
        Contact Me <span>.</span>
      </motion.h2>
      <Form item={MainItem} />
      <div className={styles.contactInfo}>
        <motion.a variants={MainItem} className={styles.link}>
          <Phone className={styles.icon} />
          (619)-977-3574
        </motion.a>
        <motion.a variants={MainItem} className={styles.link}>
          <EmailIcon className={styles.icon} /> Josh@joshuadinh.tech
        </motion.a>
        <motion.a variants={MainItem} className={styles.link}>
          <GitHub className={styles.icon} /> Github.com/joshuadinh
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
