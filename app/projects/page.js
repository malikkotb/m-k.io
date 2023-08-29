"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <motion.h1
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.35 }}
            className="text-3xl font-bold"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-sm text-gray-500"
          >
            Here are some of the projects I&apos;ve worked on.
          </motion.p>
        </div>
      </div>
      <motion.ul
        variants={animationVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.35, duration: 0.4 }}
        className="flex flex-col"
      >
        <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 first:pt-0 last:pb-0">
          <Link
            className="w-full md:w-2/5 aspect-video rounded-lg border hover:scale-105 transition-transform duration-300 overflow-clip select-none"
            href={"/projects/pastryshop"}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src="./pastry_shop.png" alt="pastry shop" />
            </div>
          </Link>

          <div className="w-full md:w-3/5 space-y-1">
            <div>
              <Link
                class="text-primary font-medium hover:underline"
                href="/projects/pastryshop"
              >
                Pastry Shop
              </Link>
              <span class="text-gray-500"> • 2023</span>
            </div>
            <p className="line-clamp-3 text-gray-500">
              Designed and crafted an elegant pastry shop e-commerce using
              Next.js, Tailwind CSS, and Zustand for seamless shopping.
            </p>
          </div>
        </li>
        <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 first:pt-0 last:pb-0">
          <Link
            className="w-full md:w-2/5 aspect-video rounded-lg border hover:scale-105 transition-transform duration-300 overflow-clip select-none"
            href={"/projects/sticky"}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src="./sticky_notes.png" alt="sticky notes" />
            </div>
          </Link>

          <div className="w-full md:w-3/5 space-y-1">
            <div>
              <Link
                class="text-primary font-medium hover:underline"
                href="/projects/sticky"
              >
                Sticky Notes
              </Link>
              <span class="text-gray-500"> • 2023</span>
            </div>
            <p className="line-clamp-3 text-gray-500">
              Designed and developed a dynamic sticky-notes app with Next.js,
              TypeScript, Tailwind CSS, Pocketbase, and Framer Motion for
              efficient notetaking.
            </p>
          </div>
        </li>
        <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 first:pt-0 last:pb-0">
          <Link
            className="w-full md:w-2/5 aspect-video rounded-lg border hover:scale-105 transition-transform duration-300 overflow-clip select-none"
            href={"/projects/foodpal"}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src="./foodpal.png" alt="foodpal" />
            </div>
          </Link>

          <div className="w-full md:w-3/5 space-y-1">
            <div>
              <Link
                class="text-primary font-medium hover:underline"
                href="/projects/foodpal"
              >
                Foodpal
              </Link>
              <span class="text-gray-500"> • 2022</span>
            </div>
            <p className="line-clamp-3 text-gray-500">
              Built and designed FoodPal, a food tracker app. It helps you
              monitor nutrition, set goals, and make informed choices. Vue.js,
              Firebase, Chart.js power the experience.
            </p>
          </div>
        </li>
        <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 first:pt-0 last:pb-0">
          <Link
            className="w-full md:w-2/5 aspect-video rounded-lg border hover:scale-105 transition-transform duration-300 overflow-clip select-none"
            href={"/projects/chatapp"}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src="./vue_chat.png" alt="vue chat" />
            </div>
          </Link>

          <div className="w-full md:w-3/5 space-y-1">
            <div>
              <Link
                class="text-primary font-medium hover:underline"
                href="/projects/chatapp"
              >
                Chat App
              </Link>
              <span class="text-gray-500"> • 2022</span>
            </div>
            <p className="line-clamp-3 text-gray-500">
              Developed and designed a Chat App using Vue.js, Vuex, Vue-Router,
              and Firebase. The app includes authentication and secure data
              storage."
            </p>
          </div>
        </li>
      </motion.ul>
    </div>
  );
}
