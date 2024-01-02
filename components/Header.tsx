"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Education",
    href: "/education#skills",
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavOpen((state) => !state);
  };

  return (
    <>
      {isNavOpen ? (
        <div className="bg-bgBlack-400 bg-opacity-50 fixed inset-0 z-20"></div>
      ) : null}

      <div className="fixed z-[45] left-0 right-0 mx-auto flex items-center px-10 py-2 h-24 bg-bgBlack-800">
        <h1 className="font-bold text-2xl">
          <Link href="/">SB</Link>
        </h1>

        <nav
          className={`bg-bgBlack-400 grow fixed top-24 h-0 text-opacity-0 md:opacity-1 overflow-hidden left-0 right-0 z-40 md:relative md:top-0 md:h-[100%] md:bg-bgBlack-800 md:flex md:justify-center md:items-center transition-all duration-200 ${
            isNavOpen ? "h-[50%] text-opacity-1" : ""
          }`}
        >
          <div className="flex justify-center items-center grow">
            <ul className="p-16 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={closeNavbar}
                    className="text-xl hover:text-accent-400 md:text-base"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#"
            className="hidden md:block border px-4 py-2 text-sm border-accent-400 text-accent-400 rounded-sm"
          >
            Resume
          </Link>
        </nav>

        <button className="ml-auto md:hidden text-2xl" onClick={toggleNavbar}>
          {!isNavOpen ? <RxHamburgerMenu /> : <IoMdClose />}
        </button>
      </div>
    </>
  );
}
