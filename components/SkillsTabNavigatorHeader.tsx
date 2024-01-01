"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SkillsTabNavigatorHeader() {
  const currentRoute = usePathname();

  return (
    <div className="flex overflow-auto gap-2 items-center justify-center">
      <Link
        href="/#skills"
        className={`
          border border-accent-400 rounded-md py-1 px-2
          ${
            currentRoute === "/"
              ? "bg-accent-400 bg-opacity-20 text-accent-400"
              : ""
          }
        `}
      >
        Skills
      </Link>
      <Link
        href="/education"
        className={`
          border border-accent-400 rounded-md py-1 px-2
          ${
            currentRoute === "/education"
              ? "bg-accent-400 bg-opacity-20 text-accent-400"
              : ""
          }
        `}
      >
        Education
      </Link>
    </div>
  );
}
