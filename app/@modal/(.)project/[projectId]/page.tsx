import Modal from "@/components/Modal";
import { projects } from "@/constants/projects";
import getSlugFromString from "@/utils/getSlugFromString";
import Image from "next/image";
import Link from "next/link";

type props = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailModal({ params: { projectId } }: props) {
  const project = projects.find(
    (project) => getSlugFromString(project.title) === projectId
  );

  if (!project) {
    throw new Error("Project not Found");
  }

  return (
    <Modal>
      <div>
        <p className="font-medium text-xs text-textLight-400 mb-3s tracking-wide">{`${project.startDate} - ${project.endDate}`}</p>
        <h1 className="text-2xl">{project.title}</h1>
        <div>
          <Image
            src={project.image}
            alt={project.title}
            className="w-[100%]"
          ></Image>
        </div>
        <p className="text-textLight-400 mt-3 mb-5">{project.detail}</p>
        <ul className="flex justify-start flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="bg-accent-400 text-accent-400 rounded-md px-2 py-1 bg-opacity-30 text-opacity-90 text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 flex-wrap">
          {project.codeURL ? (
            <Link
              href={project.codeURL}
              className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
            >
              <div className="absolute md:hover:scale-x-[0.90] md:hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
              Live
            </Link>
          ) : null}
          {project.infoURL ? (
            <Link
              href={project.infoURL}
              className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
            >
              <div className="absolute md:hover:scale-x-[0.90] md:hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
              Detail
            </Link>
          ) : null}
          {project.liveURL ? (
            <Link
              href={project.liveURL}
              className="text-center flex-grow lg:flex-grow-0 relative block border px-6 py-2 text-md border-accent-400 text-accent-400 rounded-sm w-fit"
            >
              <div className="absolute md:hover:scale-x-[0.90] md:hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
              Code
            </Link>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}
