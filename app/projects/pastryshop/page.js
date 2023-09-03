"use client";
import { FiArrowUpRight } from "react-icons/fa"
import { useRouter } from "next/navigation";
export default function PastryShop() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-3 px-4 md:px-6 py-2 max-w-[700px] mx-auto">
          <div className="flex gap-3 text-secondary">
            <p className="opacity-70">2023</p>
            <span className="opacity-70">·</span>
            <a href="https://tiny-cat-4b4dc8.netlify.app/" className="underline underline-offset-4 opacity-70 hover:opacity-100">Visit Project ↗</a>
          </div>
          <h1 className="text-primary text-3xl font-bold tracking-tight leading-tight">
            Pastry Shop
          </h1>
          <p className="text-lg opacity-70">
            Designed and crafted an elegant pastry shop e-commerce using
            Next.js, Tailwind CSS, and Zustand for seamless shopping.
          </p>
        </div>
        <div className="h-12"></div>

        <div className="prose project px-4 md:px-6 py-2 max-w-[1024px] mx-auto"></div>
      </article>

      <div className="flex flex-col gap-20 px-4 md:px-6 py-2 w-full max-w-[700px] mx-auto">
        <a
          class="underline cursor-pointer"
          onClick={() => router.replace("/projects")}
        >
          {" "}
          ← All Projects
        </a>
      </div>
    </div>
  );
}
