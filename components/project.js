"use client";
import styles from "./Style.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Project({ project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src, link } = project;
  return (
    <Link
      href={link}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={`${styles.project} last-of-type:border-b-2 dark:last-of-type:border-b-white last-of-type:border-b-black border-t-2 border-t-black dark:border-t-white`}
    >
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <img alt="" src={`${src}`}></img>
      </motion.div>
      <p>{title2}</p>
      {/* </div> */}
    </Link>
  );
}
