import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className="my-8">
      <h3 className="text-center text-2xl">Suhaan Bhandary</h3>
      <ul className="my-4 flex items-center justify-center gap-6 text-[1.6rem]">
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://www.linkedin.com/in/suhaan-bhandary"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://github.com/Suhaan-Bhandary"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://leetcode.com/suhaanbhandary1/"
            aria-label="Leetcode"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TbBrandLeetcode />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://auth.geeksforgeeks.org/user/suhaanbhandary1/practice"
            aria-label="GeeksForGeeks"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGeeksforgeeks />
          </Link>
        </li>
      </ul>
      <p className="text-center text-sm">Learning Bit By Bit...</p>
    </footer>
  );
}
