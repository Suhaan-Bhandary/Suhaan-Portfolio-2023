import ShowMoreProjectsButton from "@/components/ShowMoreProjectsButton";
import { projects } from "@/constants/projects";
import Link from "next/link";

const PROJECTS_TO_SHOW_IN_BIG = 3;

export default function Projects() {
  return (
    <div className="py-5">
      <h2 className="mb-6 md:mb-14 text-4xl text-center">Projects</h2>

      <div>
        {projects.slice(0, PROJECTS_TO_SHOW_IN_BIG).map(({ project }) => (
          <div key={project}>
            <p>{project}</p>
          </div>
        ))}
      </div>

      <ShowMoreProjectsButton>
        <div>
          {projects
            .slice(PROJECTS_TO_SHOW_IN_BIG, projects.length)
            .map(({ project }) => (
              <Link key={project} href={`/project/${project}`} scroll={false}>
                <p>{project}</p>
              </Link>
            ))}
        </div>
      </ShowMoreProjectsButton>
    </div>
  );
}
