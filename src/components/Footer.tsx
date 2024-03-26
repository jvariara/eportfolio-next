"use client";

import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { navLinks } from "@/config";
import { motion } from "framer-motion";
import { childrenVar, parentVariant } from "@/lib/utils";

const Footer = () => {
  function sendTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-muted flex-grow-0">
      <MaxWidthWrapper>
        <motion.div
          variants={parentVariant(0.5, 0.25)}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="border-t border-primary"
        >
          {/* logo */}
          <motion.div
            variants={childrenVar("vertical", "tween")}
            className="pb-8 pt-16"
          >
            <div className="flex justify-center cursor-pointer">
              <Icons.logo
                // @ts-ignore
                onClick={sendTop}
                className="h-12 w-auto hover:scale-110 transition-all ease-in-out"
              />
            </div>
          </motion.div>
          {/* legal stuff */}
          <div className="pb-10 md:flex md:items-center md:justify-between">
            <motion.div
              variants={childrenVar("vertical", "tween")}
              className="text-center md:text-left"
            >
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </motion.div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <motion.div
                variants={parentVariant(0.3, 0.25)}
                className="flex space-x-8"
              >
                {navLinks.map((nav, i) => (
                  <motion.div variants={childrenVar("vertical", "tween")}>
                    <Link
                      key={i}
                      href={nav.href}
                      className="text-lg text-muted-foreground hover:text-primary"
                    >
                      {nav.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
