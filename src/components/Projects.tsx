"use client";

import { trpc } from "@/trpc/client";
import ProjectCard from "./ProjectCard";
import { Project } from "@/payload-types";
import SectionHeading from "./SectionHeading";
import { useEffect, useState } from "react";

const Projects = () => {
  const { data, isLoading } = trpc.getAllProjects.useQuery();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = data?.projects.flat();

  let map: (Project | null)[] = [];
  if (projects && projects.length) {
    map = projects.reverse();
  } else if (isLoading) {
    // if loading set map to empty for skeleton loading state
    map = new Array<null>(2).fill(null);
  }

  return (
    <section id="projects">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 sm:gap-x-4 md:gap-x-6">
        <SectionHeading
          title={`<>Projects</>`}
          subtitle="View my work &amp; experiences below."
        />

        {/* Project Card */}
        <div className="flex w-full flex-col items-center justify-start gap-5 mt-6">
          <div className="flex w-full flex-wrap items-start justify-center gap-10">
            {isMounted && map.map((project, i) => (
              <ProjectCard project={project} index={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
