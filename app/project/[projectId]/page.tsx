import { projects } from '@/constants/projects';
import getSlugFromString from '@/utils/getSlugFromString';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const project = projects.find(
    (project) => getSlugFromString(project.title) == params.projectId,
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project?.title} Project`,
    description: project?.detail,
    alternates: {
      canonical: `/project/${params.projectId}`,
    },
    openGraph: {
      images: [...previousImages],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: getSlugFromString(project.title),
  }));
}

export default function ProjectDetail({ params: { projectId } }: Props) {
  const project = projects.find(
    (project) => getSlugFromString(project.title) === projectId,
  );

  if (!project) {
    throw new Error('Project not Found');
  }

  return (
    <div className="pt-24">
      <p className="mb-3s text-xs font-medium tracking-wide text-textLight-400">{`${project.startDate} - ${project.endDate}`}</p>
      <h1 className="text-2xl">{project.title}</h1>
      <div>
        <Image
          src={project.image}
          alt={project.title}
          className="w-[100%]"
        ></Image>
      </div>
      <p className="mb-5 mt-3 text-textLight-400">{project.detail}</p>
      <ul className="mb-5 flex flex-wrap justify-start gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-accent-400 bg-opacity-30 px-2 py-1 text-xs text-accent-400 text-opacity-90"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.liveURL ? (
          <Link
            href={project.liveURL}
            className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
            Live
          </Link>
        ) : null}
        {project.infoURL ? (
          <Link
            href={project.infoURL}
            className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
            Detail
          </Link>
        ) : null}
        {project.codeURL ? (
          <Link
            href={project.codeURL}
            className="text-md relative block w-fit flex-grow rounded-sm border border-accent-400 px-6 py-2 text-center text-accent-400 lg:flex-grow-0"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.90] md:hover:scale-y-[0.8]"></div>
            Code
          </Link>
        ) : null}
      </div>
    </div>
  );
}
