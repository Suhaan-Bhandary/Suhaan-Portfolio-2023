import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto min-h-svh flex flex-col justify-center">
      <h1 className="mb-1">
        <span className="mb-4 block text-accent-400 text-base md:text-xl ml-1">
          Hi, my name is
        </span>
        <span className="block font-bold text-textLight-600 text-2xl md:text-4xl lg:text-6xl">
          Suhaan Bhandary.
        </span>
      </h1>
      <h2 className="mb-4 font-bold text-textLight-400 text-2xl md:text-3xl lg:text-5xl">
        I engineer solutions for users.
      </h2>
      <p className="md:max-w-[50ch] text-textLight-400 mb-4">
        Full Stack Developer with a passion for innovation, specializing in
        React, Express, and TypeScript, dedicated to crafting seamless solutions
        and enhancing user experiences.
      </p>

      <Link
        href="#"
        className="relative block border px-6 py-4 text-sm border-accent-400 text-accent-400 rounded-sm w-fit"
      >
        <div className="absolute hover:scale-x-[0.95] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
        Check out my resume!
      </Link>
    </section>
  );
}
