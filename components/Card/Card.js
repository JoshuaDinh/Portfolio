import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const Card = ({ item, title, technologies, image, github, website }) => {
  return (
    <motion.div className={styles.container} variants={item}>
      <h1>{title}</h1>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop className={styles.video}>
          <source src={image} type="video/mp4" />
        </video>
      </div>

      <div className={styles.details}>
        <div className={styles.links}>
          <a
            className={styles.github}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Github</span>
            <GitHubIcon className={styles.icon} />
          </a>
          <a
            className={styles.website}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Website</span>
            <OpenInBrowserIcon className={styles.icon} />{" "}
          </a>
        </div>
        <ul className={styles.list}>
          {technologies.map((tech, index) => {
            return (
              <li className={styles.listItem} key={index}>
                <ChevronRightIcon className={styles.icon} />
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;

// const Card = ({ item, title, technologies, image, github, website }) => {
//   return (
//     <motion.div className={styles.container} variants={item}>
//       <div className={styles.wrapper}>
//         <p className={styles.featuredTitle}>Featured Project:</p>
//         <h3 className={styles.projectName}>{title}</h3>
//         <div className={styles.linkWrapper}>
//           <a
//             className={styles.link}
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Github</span>
//             <GitHubIcon className={styles.icon} />
//           </a>
//           <a
//             className={styles.link}
//             href={website}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Website</span>
//             <OpenInBrowserIcon className={styles.icon} />
//           </a>
//         </div>
//         <ul className={styles.listContainer}>
//           {technologies.map((tech, index) => {
//             return (
//               <li className={styles.listItem} key={index}>
//                 <ChevronRightIcon className={styles.listIcon} />
//                 {tech}
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className={styles.imageWrapper}>
//         <Image
//           className={styles.image}
//           src={image}
//           alt="Project"
//           layout="fill"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Card;
