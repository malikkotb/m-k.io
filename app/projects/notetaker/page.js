"use client";
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
              href="https://malikkotb.github.io/notetaker/"
              target="_blank"
              className="underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              Visit Project ↗
            </a>
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            NoteTaker
          </h1>
          <p className="text-lg opacity-70">
            I personally designed and developed NoteTaker, a full-stack
            note-taking application, leveraging the power of Next.js for
            server-side rendering, TailwindCSS for intuitive and responsive
            design, Pocketbase for seamless backend management, and Zustand for
            efficient state handling.
          </p>
        </div>
        <div className="h-12"></div>

        <div className="prose flex flex-col gap-4 sm:gap-12 px-4 md:px-6 py-2 max-w-[1024px] mx-auto">
        <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="/m-k.io/dark-mode-with-coding.png"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Full-stack note-taking app equipped with code syntax highlighting.
            </div>
          </div>

          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="/m-k.io/light-mode-tasks.png"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              It also integrates a WYSIWYG editor and task lists, enhancing the
              overall UX.
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="/m-k.io/light_mode.jpg"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Applciation uses preferred system theme.
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="/m-k.io/dark_mode.jpg"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Or can be manually set to light or dark mode.
            </div>
          </div>
          {/* local version only: */}
          {/* <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="../../dark-mode-with-coding.png"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Full-stack note-taking app equipped with code syntax highlighting.
            </div>
          </div>

          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="../../light-mode-tasks.png"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              It also integrates a WYSIWYG editor and task lists, enhancing the
              overall UX.
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="../../light_mode.jpg"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Applciation uses preferred system theme.
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              alt="picture of project"
              src="../../dark_mode.jpg"
            ></img>
            <div className="text-sm opacity-70 text-center mt-[10px]">
              Or can be manually set to light or dark mode.
            </div>
          </div> */}

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
              Full-Stack
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              TailwindCSS
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Next.js
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Pocketbase
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Zustand
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
