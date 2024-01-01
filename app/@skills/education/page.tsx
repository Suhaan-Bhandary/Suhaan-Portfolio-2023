import { education } from "@/constants/education";

export default function Education() {
  return (
    <div className="h-fit mt-10 mx-auto relative px-8">
      <ul>
        {education.map(({ college, role, joinDate, endDate }) => (
          <li key={`${joinDate}-${endDate}`} className="relative mb-12 mt-1">
            <p className="font-medium text-sm text-textLight-400 mb-3s tracking-wide lg:absolute lg:top-[-20px]">{`${joinDate} - ${endDate}`}</p>
            <h3 className="text-xl">{role}</h3>
            <h4 className="text-sm max-w-[70%]">{college}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
