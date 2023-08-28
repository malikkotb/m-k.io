"use client"
import React from "react";
import { HiCode } from "react-icons/hi";
import { GiBasketballBasket } from "react-icons/gi";
import { motion } from "framer-motion";

export default function AboutPage() {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: {duration: 0.5}
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Malik Kotb</h1>
        <p className="max-w-sm text-gray-600 mx-auto text-center">
          Software engineer who loves building cool things with code
          <HiCode className="inline" />. In addition to coding, I enjoy reading
          📚, playing basketball <GiBasketballBasket className="inline text-xl text-black" /> and
          lifting weights 🏋🏾.
        </p>
      </div>
      <div className="flex flex-col">
          <motion.div
            key="div1"
            {...animationVariant}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="box"
          >
            Div 1
          </motion.div>
          <motion.div
            key="div2"
            {...animationVariant}
            transition={{ delay: 0.4 }}
            className="box"
          >
            Div 2
          </motion.div>
          <motion.div
            key="div3"
            {...animationVariant}
            transition={{ delay: 0.6 }}
            className="box"
          >
            Div 3
          </motion.div>
          {/* Repeat for other divs */}
      </div>
    </div>
  );
}
