import Link from "next/link";

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
    href: "/#educatiton",
  },
];

export default function Header() {
  return (
    <div className="fixed left-0 right-0 mx-auto flex items-center px-10 py-2 h-24 bg-bgBlack-800">
      <h1 className="font-bold text-2xl">
        <Link href="/">SB</Link>
      </h1>

      <nav className="grow hidden md:flex">
        <div className="flex justify-center items-center grow">
          <ul className="flex items-center justify-center gap-2 md:gap-8">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="hover:text-accent-400">
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

      <button className="ml-auto md:hidden">Show</button>
    </div>
  );
}
