"use client";
import { BsSun } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

// import { RxHamburgerMenu } from "react-icons/rx"
import MenuDropdown from "./MenuDropdown";
import { AiFillBuild } from "react-icons/ai";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('light');

  // when the component is mounted on the client side, this useEffect hook will be called and mounted will be set to True
  // and then the belox jsx will be rendered
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="relative md:sticky top-0 z-50 dark:bg-[#121212] bg-white">
      <nav className="px-6 md:px-6 py-3 lg:max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href={"/"}>
          <div>
            <AiFillBuild className="h-6 w-6" />
          </div>
        </Link>
        <ul className="hidden md:flex font-medium items-center gap-1">
          <li>
            <Link
              href={"/about"}
              className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/resume"}
              className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <MenuDropdown />
          <div className="flex flex-col">
            {/* (theme==='light') &&  */}
            {/* (theme==='dark') && */}
            { (theme==='light') && <button onClick={() => setTheme("dark")}><BsSun className="text-xl font-bold opacity-60 hover:opacity-100" /></button>}
            {  (theme==='dark') && <button onClick={() => setTheme("light")}><BsMoonFill className="text-xl font-bold opacity-60 hover:opacity-100" /></button>}
          </div>
        </div>
      </nav>
    </header>
  );
}
