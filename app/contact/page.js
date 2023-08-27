import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GiBasketballBasket } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <img
          src="profile.png"
          width={120}
          height={120}
          className="rounded-full mx-auto"
          alt=""
        />
        <div>
          <h1 className="text-2xl font-bold text-center">Malik Kotb</h1>
          <p className="max-w-sm text-gray-600 mx-auto text-center">
            Software engineer who loves building cool things with code{" "}
            <HiCode className="inline" />. In addition to coding, I enjoy
            reading 📚, playing basketball{" "}
            <GiBasketballBasket className="inline text-xl text-black" /> and
            lifting weights 🏋🏾.
          </p>
        </div>
      </div>
      <ul className="flex-grow grid grid-cols-1 gap-2 lg:gap-3">
        <li className="col-span-1">
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 bg-[#F3F3F3] bg-opacity-75 hover:bg-opacity-100"
            href="mailto:malikkotb@icloud.com"
          >
            <div className="flex gap-2 text-center items-center">
              <IoIosMail className="text-2xl" />
              Email
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </li>
        <li className="col-span-1">
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 bg-[#F3F3F3] bg-opacity-75 hover:bg-opacity-100"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaGithub className="text-xl" />
              GitHub
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </li>
        <li className="col-span-1">
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 bg-[#F3F3F3] bg-opacity-75 hover:bg-opacity-100"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaInstagram className="text-xl rounded-lg" />
              Instagram
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </li>
        <li className="col-span-1">
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 bg-[#F3F3F3] bg-opacity-75 hover:bg-opacity-100"
            href="mailto:malikkotb@icloud.com"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </li>
        <li className="col-span-1">
          <a
            className="flex justify-between gap-2 items-center no-underline cursor-pointer
            rounded-lg p-4 bg-[#F3F3F3] bg-opacity-75 hover:bg-opacity-100"
            href="https://www.discordapp.com/users/malikkotb"
            target="_blank"
          >
            <div className="flex gap-2 text-center items-center">
              <FaDiscord className="text-xl" />
              Discord
            </div>
            <HiMiniArrowUpRight className="text-xl" />
          </a>
        </li>
        
      </ul>
    </div>
  );
}
