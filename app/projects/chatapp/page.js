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
              href="https://github.com/malikkotb/vue_chat"
              target="_blank"
              className="underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              Visit Project ↗
            </a>
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            Chat App
          </h1>
          <p className="text-lg opacity-70">
            Developed and designed a Chat App using Vue.js, Vuex, Vue-Router,
            and Firebase. The app includes authentication and secure data
            storage.
          </p>
        </div>
        <div className="h-12"></div>

        <div className="prose flex flex-col gap-4 sm:gap-12 px-4 md:px-6 py-2 max-w-[1024px] mx-auto">
        <img className="rounded-lg" alt="picture of project" src="/m-k.io/chat1.png"></img>
          <img className="rounded-lg" alt="picture of project" src="/m-k.io/chat2.png"></img>
          <img className="rounded-lg" alt="picture of project" src="/m-k.io/chat3.png"></img>
          <img className="rounded-lg" alt="picture of project" src="/m-k.io/chat4.png"></img>
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
              Vue.js
            </div>
            <div className="px-4 py-1.5 rounded-lg dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 opacity-70 text-sm whitespace-nowrap">
              Firebase
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
