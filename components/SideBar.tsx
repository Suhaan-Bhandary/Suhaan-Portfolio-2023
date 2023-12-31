import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

export default function SideBar() {
  return (
    <>
      <div className="w-10 fixed bottom-0 left-10 right-auto z-10">
        <ul className="flex flex-col items-center justify-center gap-6 text-[1.6rem] after:content-[''] after:bg-textLight-200 after:block after:w-[1px] after:h-20 mx-auto">
          <li className="cursor-pointer hover:text-accent-400 hover:translate-y-[-5px] transition-transform duration-75">
            <Link href="https://www.linkedin.com/in/suhaan-bhandary">
              <FaLinkedin />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-accent-400 hover:translate-y-[-5px] transition-transform duration-75">
            <Link href="https://github.com/Suhaan-Bhandary">
              <FaGithub />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-accent-400 hover:translate-y-[-5px] transition-transform duration-75">
            <Link href="https://leetcode.com/suhaanbhandary1/">
              <TbBrandLeetcode />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-accent-400 hover:translate-y-[-5px] transition-transform duration-75">
            <Link href="https://auth.geeksforgeeks.org/user/suhaanbhandary1/practice">
              <SiGeeksforgeeks />
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-10 fixed bottom-0 left-auto right-10 z-10">
        <div className="flex flex-col items-center justify-center after:content-[''] after:bg-textLight-200 after:block after:w-[1px] after:h-20 after:mt-4 mx-auto">
          <Link
            href="gmail:suhaanbhandary1@gmail.com"
            className="text-sms font-mono text-[0.8rem] hover:text-accent-400 hover:translate-y-[-5px]"
            style={{
              letterSpacing: "0.1em",
              WebkitWritingMode: "vertical-rl",
              writingMode: "vertical-rl",
            }}
          >
            suhaanbhandary1@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
