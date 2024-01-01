import { skillsList } from "@/constants/skills";

export default function Skills() {
  return (
    <div className="md:px-8 py-5 flex flex-col gap-5">
      {skillsList.map(({ label, skills }) => (
        <div key={label}>
          <h2 className="text-lg">{label}</h2>
          <ul className="flex flex-wrap text-textLight-200">
            {skills.map((skill) => (
              <li key={skill} className="mr-4">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
