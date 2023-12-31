import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#educatiton",
  },
];

export default function Header() {
  return (
    <div className="container mx-auto flex items-center px-6 py-2 h-24">
      <h1 className="font-bold">Portfolio</h1>

      <div className="grow hidden md:flex">
        <div className="grow">
          <ul className="flex items-center justify-center gap-2 md:gap-8">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Link href="#" className="font-bold">
            Resume
          </Link>
        </div>
      </div>

      <button className="ml-auto md:hidden">Show</button>
    </div>
  );
}
