import ShowMoreProjectsButton from '@/components/ShowMoreProjectsButton';
import { projects } from '@/constants/projects';
import getSlugFromString from '@/utils/getSlugFromString';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS_TO_SHOW_IN_BIG = 3;

export default function Projects() {
  return (
    <div
      className="container mx-auto max-w-[1100px] scroll-m-24 py-5"
      id="projects"
    >
      <h2 className="mb-6 text-center text-4xl md:mb-0">Projects</h2>

      <div className="mx-auto flex flex-col">
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
                className="mx-auto my-10 max-w-[400px] rounded-md bg-bgBlack-400 lg:my-14 lg:grid lg:min-h-[380px] lg:max-w-[100%] lg:grid-cols-[60%_40%] lg:last:my-10"
              >
                <div>
                  <Image
                    className="max-h-[250px] w-[100%] rounded-md lg:min-h-[100%] lg:rounded-br-none lg:rounded-tr-none lg:object-cover"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="self-center p-5">
                  <p className="mb-3s text-xs font-medium tracking-wide text-textLight-400">{`${startDate}${
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

                  <ul className="mb-5 flex flex-wrap justify-start gap-2">
                    {techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-accent-400 bg-opacity-30 px-2 py-1 text-xs text-accent-400 text-opacity-90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {liveURL ? (
                      <Link
                        href={liveURL}
                        className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
                        Live
                      </Link>
                    ) : null}
                    {infoURL ? (
                      <Link
                        href={infoURL}
                        className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
                        Detail
                      </Link>
                    ) : null}
                    {codeURL ? (
                      <Link
                        href={codeURL}
                        className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
                        Code
                      </Link>
                    ) : null}
                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
                      scroll={false}
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
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
          <h3 className="my-10 text-center text-2xl">
            More Interesting Projects
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(PROJECTS_TO_SHOW_IN_BIG, projects.length)
              .map(({ title, startDate, endDate, detail, image }) => (
                <div
                  key={title}
                  className="mx-auto max-w-[400px] rounded-md bg-bgBlack-400"
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.2) 8px 8px 20px 3px',
                  }}
                >
                  <div>
                    <Image
                      className="max-h-[150px] min-h-[150px] w-[100%] rounded-md rounded-b-none object-cover object-top"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="self-center p-5">
                    <p className="mb-3s text-xs font-medium tracking-wide text-textLight-400">{`${startDate}${
                      endDate ? ` - ${endDate}` : ''
                    }`}</p>
                    <h3 className="text-xl">{title}</h3>
                    <p className="mb-5 mt-3 text-textLight-400">
                      {detail.slice(0, 100)}...
                    </p>

                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="text-md relative block w-fit rounded-sm border border-accent-400 px-6 py-2 text-accent-400"
                      scroll={false}
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
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
