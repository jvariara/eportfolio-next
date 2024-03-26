"use client";

import { childrenVar, parentVariant } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/config";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = PROJECTS;

  return (
    <section id="projects">
      <motion.div
        variants={parentVariant(0.6, 0.3)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="mx-auto px-4 py-16 sm:px-6 sm:py-24 sm:gap-x-4 md:gap-x-6"
      >
        <SectionHeading
          title={`<>Projects</>`}
          subtitle="View my work &amp; experiences below."
        />

        {/* Project Card */}
        <div className="flex w-full flex-col items-center justify-start gap-5 mt-6">
          <div className="flex w-full flex-wrap items-start justify-center gap-10">
            {projects.map((project, i) => (
              <motion.div key={i} variants={childrenVar("vertical", "spring")}>
                {/* @ts-ignore */}
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
