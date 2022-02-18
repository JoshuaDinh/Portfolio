import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Card from "../Card/Card";
import styles from "./Projects.module.css";
import axios from "axios";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MainVariant, MainItem } from "../../variants/Variants";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/projects");
      setProjects(data.data.projectData);
    };
    fetchData();
  }, []);

  console.log(projects);
  return (
    <motion.section
      className={styles.container}
      variants={MainVariant}
      initial="initial"
      animate={controls}
      ref={ref}
      id="projects"
    >
      <Title title="Projects" item={MainItem} number="02." />
      {projects?.map((project) => {
        return (
          <Card
            item={MainItem}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            website={project.website}
            image={project.image}
          />
        );
      })}
    </motion.section>
  );
};

export default Projects;
