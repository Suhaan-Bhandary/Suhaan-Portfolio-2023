import SkillsTabNavigatorHeader from "@/components/SkillsTabNavigatorHeader";
import Image from "next/image";
import SuhaanBhandaryImage from "../../public/SuhaanBhandary.jpg";

export default function SkillsLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-lvh my-10 scroll-m-24">
      <h2 className="mb-6 md:mb-14 text-4xl text-center">About Me</h2>
      <div>
        <div className="rounded-sm mx-auto mb-6">
          <h3 className="text-accent-400 text-sm">Hi everyone,</h3>
          <Image
            src={SuhaanBhandaryImage}
            alt="Suhaan Bhandary Standing with Hoodie On"
            className="rounded-sm"
          ></Image>
        </div>
        <div id="skills" className="scroll-m-24">
          <div>
            <SkillsTabNavigatorHeader />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
