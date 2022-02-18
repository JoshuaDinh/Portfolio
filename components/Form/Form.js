import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const Form = ({ item }) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const { name, message, email } = formData;

  // Update formData based off of name attributes on input fields
  const updateFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitMessage = async (e, formData) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      // setMsgSuccess(true);
      alert("Message Sent Succesfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err) {
        // setMsgSuccess(true);
        alert("Message Failed");
      }
    }
  };
  return (
    <motion.form
      className={styles.form}
      onSubmit={(e) => submitMessage(e, formData)}
      variants={item}
    >
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        onChange={(e) => updateFormData(e)}
        name="name"
        value={name}
        type="text"
        placeholder="Name"
      />
      <label className={styles.label}>Email</label>
      <input
        className={styles.input}
        onChange={(e) => updateFormData(e)}
        name="email"
        value={email}
        type="email"
        placeholder="Email"
      />
      <label className={styles.label}>Message</label>
      <textarea
        className={styles.textArea}
        name="message"
        value={message}
        onChange={(e) => updateFormData(e)}
        placeholder="Enter your message"
      />
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onSubmit={(e) => submitMessage(e, formData)}
        >
          Submit
          <SendIcon className={styles.icon} />
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
