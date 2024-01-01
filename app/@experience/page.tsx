import { experiences } from "@/constants/experiences";
import Link from "next/link";

export default function Experience() {
  return (
    <div
      className="min-h-lvh flex justify-center items-center flex-col my-10 scroll-m-24"
      id="experience"
    >
      <h2 className="mb-10 md:mb-14 text-4xl">Experience</h2>
      <div className="max-w-[800px] mx-auto relative lg:before:content-[''] lg:before:absolute lg:before:h-full lg:before:w-[2px] lg:before:bg-textLight-400 lg:before:left-[50%] lg:before:translate-x-[-50%] lg:before:rounded-full">
        <ul>
          {experiences.map(
            ({
              role,
              company,
              detail,
              skills,
              joinDate,
              endDate,
              joiningLetter,
              certificate,
            }) => (
              <li
                key={`${joinDate}-${endDate}`}
                className="shadow-boxFade hover:shadow-boxFull transition-all duration-500 p-5 bg-bgBlack-400 rounded-s mb-6 last:mb-0 lg:relative lg:w-1/2 lg:mb-12 lg:odd:float-left lg:odd:clear-right lg:odd:translate-x-[-30px] lg:even:translate-x-[30px] lg:even:float-right lg:even:clear-left lg:after:content-[''] lg:after:absolute lg:after:h-4 lg:after:aspect-square lg:after:rounded-full top-0 lg:after:bg-textLight-400 lg:odd:after:top-0 lg:odd:after:right-[-30px] lg:odd:after:translate-x-[50%] lg:odd:after:translate-y-[-50%] lg:even:after:top-0 lg:even:after:left-[-30px] lg:even:after:translate-x-[-50%] lg:even:after:translate-y-[-50%] lg:hover:after:bg-accent-400 lg:hover:after:outline lg:hover:after:outline-2"
              >
                <div>
                  <p className="font-medium text-sm text-textLight-400 mb-3s tracking-wide lg:absolute lg:top-[-30px]">{`${joinDate} - ${endDate}`}</p>
                  <h3 className="text-xl">{role}</h3>
                  <h4 className="text-sm">{company}</h4>
                  <p className="text-textLight-400 mt-3 mb-4">{detail}</p>
                  <ul className="flex justify-start flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-accent-400 text-accent-400 rounded-md px-2 py-1 bg-opacity-30 text-opacity-90 text-xs"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Display joining letter or certificate */}
                {!!joiningLetter && (
                  <Link
                    href={joiningLetter}
                    className="absolute top-5 right-5 bg-accent-400 text-accent-400 rounded-md hover:border border-accent-400 px-2 py-1 bg-opacity-30 text-opacity-90 text-xs"
                    target="_blank"
                  >
                    Certificate
                  </Link>
                )}

                {!!certificate && (
                  <Link
                    href={certificate}
                    className="absolute top-5 right-5 bg-accent-400 text-accent-400 rounded-md hover:border border-accent-400 px-2 py-1 bg-opacity-30 text-opacity-90 text-xs"
                    target="_blank"
                  >
                    Certificate
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
