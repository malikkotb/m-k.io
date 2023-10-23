"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function PastryShop() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-3 px-4 md:px-6 py-2 max-w-[700px] mx-auto">
          <div className="flex gap-3">
            <p className="opacity-70">2023</p>
            <span className="opacity-70">·</span>
            <a
              href="https://github.com/malikkotb/sticky_notes"
              target="_blank"
              className="underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              Visit Project ↗
            </a>
          </div>
          <h1 className="  text-3xl font-bold tracking-tight leading-tight">
            Sticky Notes
          </h1>
          <p className="text-lg opacity-70">
            Designed and developed a dynamic sticky-notes app with Next.js,
            TypeScript, Tailwind CSS, Pocketbase, and Framer Motion for
            efficient notetaking.
          </p>
        </div>
        <div className="h-12"></div>

        <div className="prose flex flex-col gap-4 sm:gap-12 px-4 md:px-6 py-2 max-w-[1024px] mx-auto">
          <img className="rounded-lg" alt="picture of project" src="../../sticky1.png"></img>
          <img className="rounded-lg" alt="picture of project" src="../../sticky2.png"></img>
          <img className="rounded-lg" alt="picture of project" src="../../sticky3.png"></img>
          <img className="rounded-lg" alt="picture of project" src="../../sticky4.png"></img>

          {/* <Image
            src="../../sticky1.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-full h-auto rounded-lg"
          /> */}
        </div>
      </article>

      <div className="flex flex-col gap-20 px-4 md:px-6 py-2 w-full max-w-[700px] mx-auto">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Web Development
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Design
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Frontend
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Next.js
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              PocketBase
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Tailwindcss
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Framer Motion
            </div>
          </div>
        </div>
        <a
          className="underline cursor-pointer opacity-70 hover:opacity-100"
          onClick={() => router.replace("/projects")}
        >
          ← All Projects
        </a>
      </div>
    </div>
  );
}
