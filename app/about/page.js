"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume() {
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
            About Me
          </motion.h1>
          <motion.p
            variants={animationVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-sm text-gray-500"
          >
            Malik Kotb - Software Engineer
          </motion.p>
        </div>

        {/* Sections */}
        <motion.div
          className="flex flex-col gap-16 md:gap-24"
          variants={animationVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
            {/* shrink-0 to prevent a flex item from shrinking */}
            <h2 className="md:w-28 text-secondary shrink-0 text-gray-500">
              About
            </h2>
            <div className="flex flex-col w-full gap-8">
              <p>Hello World, I{"\'"}m Malik Kotb</p>
              <p>
                Software engineer who loves building cool things with code. In
              </p>

              <p>
                In addition to coding, I enjoy reading 📚, playing basketball
                and lifting weights 🏋🏾.
              </p>
              <p>
                I have a passion for design and am always looking for ways to
                incorporate it into my engineering work.
              </p>
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
            <h2 className="md:w-28 text-secondary shrink-0 text-gray-500">
              Skills
            </h2>
            <div className="flex flex-col w-full gap-8">
              <p>JavaScript, TypeScript, React, Next.js, Node.js</p>
              <p>
                Python - Data Mining, Web Scraping, PyTorch, Numpy, Pandas,
                Matplotlib
              </p>
              <p>Web - TailwindCSS, Firebase, NoSQL, SQL, Netlify,</p>
              <p>Design - Figma, Canva</p>
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
            <h2 className="md:w-28 text-secondary shrink-0 text-gray-500">
              Projects
            </h2>
            <div className="w-full">
              Checkout my latest{" "}
              <Link href={"/projects"} className="underline inline">
                projects
              </Link>
              .
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
            <h2 className="md:w-28 text-secondary shrink-0 text-gray-500">
              Education, Work
            </h2>
            <div className="flex flex-col w-full gap-8"></div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
