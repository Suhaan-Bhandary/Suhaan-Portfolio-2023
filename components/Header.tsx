import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center px-6 py-2 h-24">
      <h1 className="font-bold">Portfolio</h1>

      <div className="flex grow">
        <div className="grow">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <Link href="#home">Home</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#educatiton">Education</Link>
          </div>
        </div>

        <div>
          <Link href="#" className="font-bold">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
