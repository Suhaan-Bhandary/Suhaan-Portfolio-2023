import { education } from '@/constants/education';

export default function Education() {
  return (
    <div className="relative mx-auto h-fit py-10 md:px-8">
      <ul>
        {education.map(({ college, role, joinDate, endDate }) => (
          <li key={`${joinDate}-${endDate}`} className="relative mb-12 mt-1">
            <p className="mb-3s text-sm font-medium tracking-wide text-textLight-400 lg:absolute lg:top-[-20px]">{`${joinDate} - ${endDate}`}</p>
            <h3 className="text-xl">{role}</h3>
            <h4 className="max-w-[70%] text-sm">{college}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
