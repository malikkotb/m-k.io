import { BsSun } from "react-icons/bs";
// import { RxHamburgerMenu } from "react-icons/rx"
import MenuDropdown from "./MenuDropdown";
import { AiFillBuild } from "react-icons/ai";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="relative md:sticky top-0 z-20 bg-white">
      <nav className="px-6 md:px-6 py-3 lg:max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href={"/"}>
          <div>
            <AiFillBuild className="h-6 w-6" />
          </div>
        </Link>
        <ul className="hidden md:flex font-medium items-center gap-1">
          <li>
            <Link href={"/about"} className="px-4 py-2 cursor-pointer rounded-lg text-sm hover:text-black transition-colors text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href={"/projects"} className="px-4 py-2 cursor-pointer rounded-lg text-sm hover:text-black transition-colors text-gray-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href={"/resume"} className="px-4 py-2 cursor-pointer rounded-lg text-sm hover:text-black transition-colors text-gray-600">
              Resume
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="px-4 py-2 cursor-pointer rounded-lg text-sm hover:text-black transition-colors text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <MenuDropdown />
          <BsSun />
        </div>
      </nav>
    </header>
  );
}
