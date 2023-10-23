"use client";

// import { RxHamburgerMenu } from "react-icons/rx"
import MenuDropdown from "./MenuDropdown";
import { AiFillBuild } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import MagneticWrapper from "./MagneticWrapper";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);

  // when the component is mounted on the client side, this useEffect hook will be called and mounted will be set to True
  // and then the below jsx will be rendered
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="relative md:sticky top-0 z-50 dark:bg-black bg-white">
      <nav className="px-6 md:px-6 py-3 lg:max-w-[700px] mx-auto flex justify-between items-center gap-3">
      <MagneticWrapper>
        <Link href={"/"}>
          <div>
            <AiFillBuild className="h-6 w-6" />
          </div>
        </Link>
        </MagneticWrapper>

        <ul className="hidden md:flex font-medium items-center gap-1">
          <MagneticWrapper>
            <li>
              <Link
                href={"/about"}
                className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100  transition-opacity"
              >
                About
              </Link>
            </li>
          </MagneticWrapper>
          {/* hover:text-[#EB4D37] */}
          <MagneticWrapper>
            <li>
              <Link
                href={"/projects"}
                className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100  transition-opacity"
              >
                Projects
              </Link>
            </li>
          </MagneticWrapper>
          <MagneticWrapper>
            <li>
              <a
                href="./Lebenslauf_Kotb_23.pdf"
                className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100  transition-opacity"
                target="_blank"
              >
                PDF Resume
              </a>
            </li>
          </MagneticWrapper>
          <MagneticWrapper>
            <li>
              <Link
                href={"/contact"}
                className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100  transition-opacity"
              >
                Contact
              </Link>
            </li>
          </MagneticWrapper>
          <MagneticWrapper>
            <li>
              <a
                href="https://malikkotb.github.io/blog/"
                className="px-4 py-2 cursor-pointer rounded-lg text-sm opacity-70 hover:opacity-100  transition-opacity"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </MagneticWrapper>
        </ul>
        <div className="flex items-center">
          <MenuDropdown />
          <div className="flex flex-col">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
