import ShowMoreProjectsButton from '@/components/ShowMoreProjectsButton';
import { projects } from '@/constants/projects';
import getSlugFromString from '@/utils/getSlugFromString';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS_TO_SHOW_IN_BIG = 2;

export default function Projects() {
  return (
    <div
      className="container mx-auto max-w-[1100px] scroll-m-24 py-5"
      id="projects"
    >
      <h2 className="mb-2 text-center text-4xl font-semibold">Projects</h2>
      <p className="mb-10 text-center text-textLight-400">
        Things that I built as side projects...
      </p>

      <div className="mx-auto mb-10 grid gap-10 md:grid-cols-2">
        {projects
          .slice(0, PROJECTS_TO_SHOW_IN_BIG)
          .map(
            ({
              title,
              startDate,
              endDate,
              detail,
              techStack,
              image,
              codeURL,
              infoURL,
              liveURL,
            }) => (
              <div
                key={title}
                className="mx-auto flex max-w-[500px] flex-col rounded-md bg-bgBlack-400"
              >
                <div>
                  <Image
                    className="max-h-[220px] w-[100%] rounded-md rounded-b-none object-cover object-top"
                    src={image}
                    alt={title}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs font-medium tracking-wide text-textLight-400">{`${startDate}${
                    endDate ? ` - ${endDate}` : ''
                  }`}</p>
                  <h3 className="text-xl">{title}</h3>

                  <Link
                    href={`/project/${getSlugFromString(title)}`}
                    scroll={false}
                  >
                    <p className="mb-5 mt-3 text-textLight-400">
                      {detail.slice(0, 100)}...
                    </p>
                  </Link>

                  <ul className="mb-5 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-accent-400 bg-opacity-30 px-2 py-1 text-xs text-accent-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {liveURL && (
                      <Link
                        href={liveURL}
                        className="text-md relative block w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400 hover:scale-95"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Live
                      </Link>
                    )}
                    {infoURL && (
                      <Link
                        href={infoURL}
                        className="text-md relative block w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400 hover:scale-95"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Detail
                      </Link>
                    )}
                    {codeURL && (
                      <Link
                        href={codeURL}
                        className="text-md relative block w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400 hover:scale-95"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Code
                      </Link>
                    )}
                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="text-md relative block w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400 hover:scale-95"
                      scroll={false}
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ),
          )}
      </div>

      <ShowMoreProjectsButton>
        <div className="mb-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(PROJECTS_TO_SHOW_IN_BIG, projects.length)
              .map(({ title, startDate, endDate, detail, image }) => (
                <div
                  key={title}
                  className="mx-auto flex max-w-[400px] flex-col rounded-md bg-bgBlack-400"
                >
                  <div>
                    <Image
                      className="max-h-[150px] min-h-[150px] w-full rounded-md rounded-b-none object-cover object-top"
                      src={image}
                      alt={title}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-3 text-xs font-medium tracking-wide text-textLight-400">
                      {`${startDate}${endDate ? ` - ${endDate}` : ''}`}
                    </p>
                    <h3 className="text-xl">{title}</h3>
                    <p className="mt-3 mb-5 text-textLight-400">
                      {detail.slice(0, 100)}...
                    </p>

                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="text-md relative mt-auto w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400 hover:scale-95"
                      scroll={false}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </ShowMoreProjectsButton>
    </div>
  );
}
