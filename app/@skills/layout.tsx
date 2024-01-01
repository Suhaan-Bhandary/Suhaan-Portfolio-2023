import SkillsTabNavigatorHeader from "@/components/SkillsTabNavigatorHeader";
import Image from "next/image";
import SuhaanBhandaryImage from "../../public/SuhaanBhandary.jpg";

export default function SkillsLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mt-16 mb-20 scroll-m-24" id="skills">
      <h2 className="mb-6 md:mb-14 text-4xl text-center">About Me</h2>
      <div className="md:grid md:grid-cols-2">
        <div className="hidden md:block rounded-sm mx-auto mb-6 md:mb-0 md:translate-y-2 overflow-hidden">
          <Image
            src={SuhaanBhandaryImage}
            alt="Suhaan Bhandary Standing with Hoodie On"
            className="rounded-sm mx-auto border-[2px] border-textLight-800"
            style={{
              borderRadius: "30% 70% 44% 56% / 72% 30% 70% 28%",
            }}
          ></Image>
        </div>
        <div>
          <div>
            <SkillsTabNavigatorHeader />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
