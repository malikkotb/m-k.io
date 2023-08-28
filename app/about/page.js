"use client";
import React from "react";
import { HiCode } from "react-icons/hi";
import { GiBasketballBasket } from "react-icons/gi";
import { motion } from "framer-motion";

export default function AboutPage() {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div>
        <motion.h1
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05, duration: 0.35 }}
          className="text-2xl font-bold text-center"
        >
          Malik Kotb
        </motion.h1>
        <p className="max-w-sm text-gray-600 mx-auto text-center">
          Software engineer who loves building cool things with code
          <HiCode className="inline" />. In addition to coding, I enjoy reading
          📚, playing basketball{" "}
          <GiBasketballBasket className="inline text-xl text-black" /> and
          lifting weights 🏋🏾.
        </p>
      </div>
     
    </div>
  );
}
