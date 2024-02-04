import Landing from "@/components/Landing";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="bg-inherit">
        <Landing />
        <TechStack />
        <Projects />
        <ContactMe />
      </div>
    </MaxWidthWrapper>
  );
}
