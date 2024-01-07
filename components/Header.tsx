'use client';

import { useStopScroll } from '@/hooks/useStopScroll';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const navLinks = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Skills',
    href: '/#skills',
  },
  {
    name: 'Experience',
    href: '/#experience',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Education',
    href: '/education#skills',
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Stop scrolling
  useStopScroll(isNavOpen);

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavOpen((state) => !state);
  };

  return (
    <>
      {isNavOpen ? (
        <div className="fixed inset-0 z-20 bg-bgBlack-400 bg-opacity-50"></div>
      ) : null}

      <div className="fixed left-0 right-0 top-0 z-[45] mx-auto flex h-24 items-center bg-bgBlack-800 px-10 py-2">
        <h1 className="text-2xl font-bold">
          <Link href="/">SB</Link>
        </h1>

        <nav
          className={`md:opacity-1 fixed left-0 right-0 top-24 z-40 h-0 grow overflow-hidden bg-bgBlack-400 text-opacity-0 transition-all duration-200 md:relative md:top-0 md:flex md:h-[100%] md:items-center md:justify-center md:bg-bgBlack-800 ${
            isNavOpen ? 'text-opacity-1 h-[50%]' : ''
          }`}
        >
          <div className="flex grow items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-2 p-16 md:flex-row md:gap-8">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={closeNavbar}
                    className="text-xl hover:text-accent-400 md:text-base"
                    aria-label={name}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#"
            className="hidden rounded-sm border border-accent-400 px-4 py-2 text-sm text-accent-400 md:block"
            aria-label="resume"
          >
            Resume
          </Link>
        </nav>

        <button className="ml-auto text-2xl md:hidden" onClick={toggleNavbar}>
          {!isNavOpen ? <RxHamburgerMenu /> : <IoMdClose />}
        </button>
      </div>
    </>
  );
}
