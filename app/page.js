"use client";
import Link from "next/link";
import Project from "../components/project";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title1: "Sticky",
      title2: "Notes",
      src: "./sticky_notes.png",
      link: "/projects/sticky"
    },
    {
      title1: "Pastry",
      title2: "Shop",
      src: "./pastry_shop.png",
      link: "/projects/pastryshop"
    },
    {
      title1: "Food",
      title2: "Pal",
      src: "./foodpal.png",
      link: "/projects/foodpal"
    },
    {
      title1: "Vue",
      title2: "Chat App",
      src: "./vue_chat.png",
      link: "/projects/chatapp"
    },
    {
      title1: "PyTorch",
      title2: "CNN",
      src: "./image_cnn.png",
      link: "https://github.com/malikkotb/Seminar_SS23"
    },
  ];

  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <motion.h1 variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.05, duration: 0.35 }} 
          className="text-3xl font-bold">Malik Kotb</motion.h1>
          <motion.p variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.1, duration: 0.35 }} className="text-gray-500">I do cool things with code.</motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          <motion.img variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.15, duration: 0.35 }} src="profile.png" alt="profile" className="w-40 rounded-full"></motion.img>
        </div>
        <motion.p variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.35 }} className="text-primary max-w-lg">
          Hi, I{'\''}m Malik Kotb, a software engineer who loves building cool things
          with code. I am currently focusing on creative web development, but my
          interest lie in all things development. I studied Computer Science
          Games Engineering at TUM.
        </motion.p>
        <motion.ul variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.25, duration: 0.35 }} className="flex flex-col md:flex-row gap-2 md:gap-6">
          <li>
            <a
              className="transition-transform transform hover:translate-y-[-1px] hover:translate-x-[1px]
                flex gap-2 items-center no-underline cursor-pointer"
              href="mailto:malikkotb@icloud.com"
            >
              <HiMiniArrowUpRight className="text-xl" />
              Email me
            </a>
          </li>
          <li>
            <Link
              className="transition-transform transform hover:translate-y-[-1px] hover:translate-x-[1px]
                flex gap-2 items-center no-underline cursor-pointer"
              href={"/contact"}
              target="/blank"
            >
              <HiMiniArrowUpRight className="text-xl" />
              Connect with me
            </Link>
          </li>
        </motion.ul>
      </div>
      <div className="flex flex-col">
        <motion.p variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.35 }} className="pb-4">Projects</motion.p>
        <motion.div variants={animationVariant} initial="hidden" animate="visible" transition={{ delay: 0.35, duration: 0.35 }}>
        {projects.map((project, index) => {
          return <Project key={index} project={project} link={project.link} />;
        })}
        </motion.div>
      </div>
    </div>
  );
}
