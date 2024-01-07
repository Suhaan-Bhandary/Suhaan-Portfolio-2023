'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SkillsTabNavigatorHeader() {
  const currentRoute = usePathname();

  return (
    <div className="flex items-center justify-center gap-2 overflow-auto">
      <Link
        href="/#skills"
        scroll={false}
        className={`
          rounded-md border border-accent-400 px-2 py-1
          ${
            currentRoute === '/'
              ? 'bg-accent-400 bg-opacity-20 text-accent-400'
              : ''
          }
        `}
        aria-label="skills"
      >
        Skills
      </Link>
      <Link
        href="/education"
        scroll={false}
        className={`
          rounded-md border border-accent-400 px-2 py-1
          ${
            currentRoute === '/education'
              ? 'bg-accent-400 bg-opacity-20 text-accent-400'
              : ''
          }
        `}
        aria-label="education"
      >
        Education
      </Link>
    </div>
  );
}
