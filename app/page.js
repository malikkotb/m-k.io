"use client";
import Link from "next/link";
import Project from "../components/project";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function Home() {
  const projects = [
    {
      title1: "Sticky",
      title2: "Notes",
      src: "sticky_notes.png",
    },
    {
      title1: "Pastry",
      title2: "Shop",
      src: "pastry_shop.png",
    },
    {
      title1: "Foodpal",
      title2: "Huit",
      src: "foodpal.png",
    },
    {
      title1: "Vue.js",
      title2: "Chat App",
      src: "vue_chat.png",
    },
    {
      title1: "PyTorch",
      title2: "CNN",
      src: "image_cnn.png",
    },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Malik Kotb</h1>
          <p className="text-gray-600">I do cool things with code.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          <img src="profile.png" className="w-40 rounded-full"></img>
        </div>
        <p className="text-primary max-w-lg text-gray-600">
          Hi, I'm Malik Kotb, a software engineer who loves building cool things
          with code. I am currently focusing on creative web development, but my
          interest lie in all things development. I studied Computer Science
          Games Engineering at TUM.
        </p>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
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
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="pb-4">Projects</p>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
