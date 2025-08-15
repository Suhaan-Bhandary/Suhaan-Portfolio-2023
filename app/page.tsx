import { resumeLink } from '@/constants/experiences';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-svhScreen container mx-auto flex flex-col justify-center">
      <h1 className="mb-1">
        <span className="ml-1 block text-base text-accent-400 md:mb-4 md:text-xl">
          Hello there, I’m
        </span>
        <span className="block text-2xl font-bold text-textLight-600 md:text-4xl lg:text-6xl">
          Suhaan Bhandary.
        </span>
      </h1>
      <h2 className="text-2xl font-bold text-textLight-400 md:text-3xl lg:text-5xl">
        Building Software for Scale
      </h2>
      <p className="my-4 text-textLight-400 md:max-w-[55ch]">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      <Link
        href={resumeLink}
        className="relative block w-fit rounded-sm border border-accent-400 px-6 py-4 text-sm text-accent-400"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 hover:scale-x-[0.95] hover:scale-y-[0.8]"></div>
        Check out my resume!
      </Link>
    </section>
  );
}
