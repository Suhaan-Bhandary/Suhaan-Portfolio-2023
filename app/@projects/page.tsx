import ShowMoreProjectsButton from "@/components/ShowMoreProjectsButton";
import { projects } from "@/constants/projects";
import getSlugFromString from "@/utils/getSlugFromString";
import Image from "next/image";
import Link from "next/link";

const PROJECTS_TO_SHOW_IN_BIG = 3;

export default function Projects() {
  return (
    <div
      className="container mx-auto scroll-m-24 py-5 max-w-[1100px]"
      id="projects"
    >
      <h2 className="mb-6 md:mb-6 text-4xl text-center">Projects</h2>

      <div className="flex flex-col mx-auto">
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
                className="my-10 lg:my-14 lg:last:my-10 bg-bgBlack-400 max-w-[400px] mx-auto rounded-md lg:grid lg:grid-cols-[60%_40%] lg:max-w-[100%] lg:min-h-[380px]"
              >
                <div>
                  <Image
                    className="w-[100%] max-h-[250px] rounded-md lg:object-cover lg:rounded-tr-none lg:rounded-br-none lg:min-h-[100%]"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="p-5 self-center">
                  <p className="font-medium text-xs text-textLight-400 mb-3s tracking-wide">{`${startDate} - ${endDate}`}</p>
                  <h3 className="text-xl">{title}</h3>

                  <Link
                    href={`/project/${getSlugFromString(title)}`}
                    scroll={false}
                  >
                    <p className="text-textLight-400 mt-3 mb-5">
                      {detail.slice(0, 100)}...
                    </p>
                  </Link>

                  <ul className="flex justify-start flex-wrap gap-2 mb-5">
                    {techStack.map((tech) => (
                      <li
                        key={tech}
                        className="bg-accent-400 text-accent-400 rounded-md px-2 py-1 bg-opacity-30 text-opacity-90 text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 flex-wrap">
                    {codeURL ? (
                      <Link
                        href={codeURL}
                        className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
                      >
                        <div className="absolute hover:scale-x-[0.90] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
                        Live
                      </Link>
                    ) : null}
                    {infoURL ? (
                      <Link
                        href={infoURL}
                        className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
                      >
                        <div className="absolute hover:scale-x-[0.90] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
                        Detail
                      </Link>
                    ) : null}
                    {liveURL ? (
                      <Link
                        href={liveURL}
                        className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
                      >
                        <div className="absolute hover:scale-x-[0.90] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
                        Code
                      </Link>
                    ) : null}
                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
                      scroll={false}
                    >
                      <div className="absolute hover:scale-x-[0.90] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
      </div>

      <ShowMoreProjectsButton>
        <div className="mb-10">
          <h3 className="text-2xl text-center my-10">
            More Interesting Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects
              .slice(PROJECTS_TO_SHOW_IN_BIG, projects.length)
              .map(({ title, startDate, endDate, detail, image }) => (
                <div
                  key={title}
                  className="bg-bgBlack-400 max-w-[400px] mx-auto rounded-md"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.2) 8px 8px 20px 3px",
                  }}
                >
                  <div>
                    <Image
                      className="w-[100%] max-h-[150px] min-h-[150px] rounded-md rounded-b-none object-cover object-top"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="p-5 self-center">
                    <p className="font-medium text-xs text-textLight-400 mb-3s tracking-wide">{`${startDate} - ${endDate}`}</p>
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-textLight-400 mt-3 mb-5">
                      {detail.slice(0, 100)}...
                    </p>

                    <Link
                      href={`/project/${getSlugFromString(title)}`}
                      className="relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
                      scroll={false}
                    >
                      <div className="absolute hover:scale-x-[0.90] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
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
