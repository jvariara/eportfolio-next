"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { childrenVar, parentVariant } from "@/lib/utils";

const links = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/justinvariara/",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/jvariara",
  },
  {
    name: "Resume",
    icon: FileText,
    href: "/Resume.pdf",
  },
];

const Landing = () => {
  return (
    <motion.div
      variants={parentVariant(0.5, 0.25)}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      className="mx-auto lg:h-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 sm:gap-x-4 md:gap-x-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      {/* Left side */}
      <div className="lg:max-w-lg lg:self-end">
        <section className="mt-4">
          <motion.h4
            variants={childrenVar("vertical", "spring")}
            className="text-primary text-2xl max-w-prose"
          >
            Hi, my name is
          </motion.h4>
          <motion.h1
            variants={childrenVar("vertical", "spring")}
            className="text-5xl sm:text-7xl font-bold tracking-tight mt-4"
          >
            Justin Variara
          </motion.h1>
          <motion.h2
            variants={childrenVar("vertical", "spring")}
            className="text-primary text-4xl sm:text-5xl max-w-prose font-semibold mt-4"
          >
            Software Developer
          </motion.h2>
          <div className="mt-4 space-y-6">
            <motion.p
              variants={childrenVar("vertical", "spring")}
              className="text-muted-foreground text-2xl"
            >
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                Software Developer
              </span>{" "}
              with a passion for web development with{" "}
              <span className="text-primary font-semibold">amazing</span> client
              & user experiences with the use of modern technologies like{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Tailwind CSS</span>{" "}
              and <span className="text-primary font-semibold">Next.js</span>
            </motion.p>
          </div>
          {/* Socials & Resume */}
          <motion.div
            variants={parentVariant(0.5, 0.25)}
            className="flex flex-row gap-4 mt-6"
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                variants={childrenVar("horizontal", "spring")}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-center items-center group relative flex flex-col"
                >
                  <div className="md:flex-shrink-0 flex justify-center hover:scale-125 transition-all duration-300">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-muted text-primary">
                      {<link.icon />}
                    </div>
                  </div>
                  <span className="text-white absolute bottom-[-30px] scale-0 duration-300 ease-in-out font-bold group-hover:scale-100">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Right side, image */}
      <motion.div
        variants={childrenVar("vertical", "spring")}
        className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center relative"
        aria-hidden="true"
      >
        <div className="aspect-square rounded-lg">
          <Image
            fill
            loading="eager"
            className="-z-10 h-full w-full object-fill object-center"
            src="/header-img.svg"
            alt="header image"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
