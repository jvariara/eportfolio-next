"use client";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/config";
import { motion } from "framer-motion";
import { childrenVar, parentVariant } from "@/lib/utils";

const TechStack = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 sm:gap-x-4 md:gap-x-6">
      <SectionHeading
        title={`<>Tech Stack</>`}
        subtitle="View my skills &amp; technologies below."
      />

      <motion.div
        variants={parentVariant(0.4, 0.3)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 xs:gap-y-12 mx-4 mt-6"
      >
        {technologies.map((tech) => (
          <motion.div
            variants={childrenVar("horizontal", "spring")}
            key={tech.id}
            className="flex items-center justify-center rounded-3xl border border-primary/20 bg-gradient-to-b from-primary to-primary/40 p-2.5"
          >
            <div className="flex max-w-[300px] w-full flex-col items-center justify-center rounded-2xl border border-primary/20 bg-muted group relative">
              <div className="md:flex-shrink-0 flex justify-center p-6 transition-all duration-300">
                <div className="h-16 w-16 flex items-center justify-center text-primary">
                  <div>
                    <Image
                      src={tech.picture}
                      alt={tech.language}
                      width={100}
                      height={100}
                      className="object-fill object-center"
                    />
                  </div>
                  <span className="text-white absolute bottom-[1px] scale-0 duration-300 ease-in-out font-bold group-hover:scale-100 ">
                    {tech.language}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
