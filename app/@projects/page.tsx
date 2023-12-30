import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <div>
        {[1, 2, 3].map((project) => (
          <Link key={project} href={`/project/${project}`}>
            {project}
          </Link>
        ))}
      </div>
    </div>
  );
}
