import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

export default function SideBar() {
  return (
    <>
      <div className="fixed bottom-0 left-10 right-auto z-10 hidden w-10 md:block">
        <ul className="mx-auto flex flex-col items-center justify-center gap-6 text-[1.6rem] after:block after:h-20 after:w-[1px] after:bg-textLight-200 after:content-['']">
          <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
            <Link
              href="https://www.linkedin.com/in/suhaan-bhandary"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
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
      </div>

      <div className="fixed bottom-0 left-auto right-10 z-10 hidden w-10 md:block">
        <div className="mx-auto flex flex-col items-center justify-center after:mt-4 after:block after:h-20 after:w-[1px] after:bg-textLight-200 after:content-['']">
          <Link
            href="gmail:suhaanbhandary1@gmail.com"
            className="text-sms font-mono text-[0.8rem] hover:translate-y-[-5px] hover:text-accent-400"
            style={{
              letterSpacing: '0.1em',
              WebkitWritingMode: 'vertical-rl',
              writingMode: 'vertical-rl',
            }}
            target="_blank"
            rel="noreferrer noopener"
          >
            suhaanbhandary1@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
