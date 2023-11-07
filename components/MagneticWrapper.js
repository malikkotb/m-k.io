"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
// magnetic wrapper effect for icons and list
items
export default function MagneticWrapper({ children }) {
  const ref = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 }); // position of the mouse

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
