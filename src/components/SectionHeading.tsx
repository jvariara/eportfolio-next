"use client";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div
      variants={parentVariant(0.4, 0.4)}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      className="flex flex-col justify-center items-center"
    >
      <motion.h6
        variants={childrenVar("vertical", "spring")}
        className="text-primary font-semibold text-3xl sm:text-4xl items-center"
      >
        {title}
      </motion.h6>
      <motion.h1
        variants={childrenVar("vertical", "spring")}
        className="text-3xl md:text-4xl lg:text-5xl my-4 font-bold text-center text-white"
      >
        {subtitle}
      </motion.h1>
    </motion.div>
  );
};

export default SectionHeading;
