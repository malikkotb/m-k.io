"use client";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <motion.h1
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.35 }}
            className="text-3xl font-bold"
          >
            Projects - MAKE INDIVIDUAL PROJECT PAGES (DYNAMIC ROUTES)
          </motion.h1>
          <motion.p
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-sm text-gray-500"
          >
            Here are some of the projects I've worked on.
          </motion.p>
        </div>
      </div>
      <motion.ul
        variants={animationVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25, duration: 0.35 }}
        className="flex flex-col"
      >
        <li>First Project</li>
        <li>2nd Project</li>
        <li>3rd Project</li>
      </motion.ul>

    </div>
  );
}
