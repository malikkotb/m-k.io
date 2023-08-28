"use client";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GiBasketballBasket } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <motion.img
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05, duration: 0.35 }}
          src="./profile.png"
          width={120}
          height={120}
          className="rounded-full mx-auto"
          alt=""
        />
        <div>
          <motion.h1
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.35 }}
            className="text-2xl font-bold text-center"
          >
            Malik Kotb
          </motion.h1>
          <motion.p
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-sm opacity-70 mx-auto text-center"
          >
            Software engineer who loves building cool things with code{" "}
            <HiCode className="inline" />. In addition to coding, I enjoy
            reading 📚, playing basketball{" "}
            <GiBasketballBasket className="inline text-xl" /> and lifting
            weights 🏋🏾.
          </motion.p>
        </div>
      </div>
      <ul className="flex-grow grid grid-cols-1 gap-2 lg:gap-3">
        <motion.li
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.35 }}
          className="col-span-1"
        >
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 transition-opacity dark:transition-opacity
            bg-black bg-opacity-10 hover:bg-opacity-20
            dark:bg-[#F8F9FA] dark:bg-opacity-20 dark:hover:bg-opacity-10"
            href="mailto:malikkotb@icloud.com"
          >
            <div className="flex gap-2 text-center items-center">
              <IoIosMail className="text-2xl" />
              Email
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </motion.li>
        <motion.li
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25, duration: 0.35 }}
          className="col-span-1"
        >
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 transition-opacity dark:transition-opacity
            bg-black bg-opacity-10 hover:bg-opacity-20 
            dark:bg-[#F8F9FA] dark:bg-opacity-20 dark:hover:bg-opacity-10"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaGithub className="text-xl" />
              GitHub
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </motion.li>
        <motion.li
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.35 }}
          className="col-span-1"
        >
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 transition-opacity dark:transition-opacity
            bg-black bg-opacity-10 hover:bg-opacity-20 
            dark:bg-[#F8F9FA] dark:bg-opacity-20 dark:hover:bg-opacity-10"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaInstagram className="text-xl rounded-lg" />
              Instagram
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </motion.li>
        <motion.li
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35, duration: 0.35 }}
          className="col-span-1"
        >
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 transition-opacity dark:transition-opacity
            bg-black bg-opacity-10 hover:bg-opacity-20 
            dark:bg-[#F8F9FA] dark:bg-opacity-20 dark:hover:bg-opacity-10"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </motion.li>
        <motion.li
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.35 }}
          className="col-span-1"
        >
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 transition-opacity dark:transition-opacity
            bg-black bg-opacity-10 hover:bg-opacity-20 
            dark:bg-[#F8F9FA] dark:bg-opacity-20 dark:hover:bg-opacity-10"
            href="https://www.discordapp.com/users/malikkotb"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaDiscord className="text-xl" />
              Discord
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </motion.li>
      </ul>
      {/* potential group hover idea */}
      {/* <ul
        className={`flex-grow grid grid-cols-1 gap-2 lg:gap-3 group duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <li className="hover:opacity-100 opacity-100 transition-opacity duration-300">
          Item 1
        </li>
        <li className="hover:opacity-100 opacity-60 transition-opacity duration-300">
          Item 2
        </li>
        <li className="hover:opacity-100 opacity-60 transition-opacity duration-300">
          Item 3
        </li>
      </ul> */}
    </div>
  );
}
