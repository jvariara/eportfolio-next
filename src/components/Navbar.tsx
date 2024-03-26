"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import MobileNav from "./MobileNav";
import { navLinks } from "@/config";
import { motion } from "framer-motion";
import { childrenVar, parentVariant } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16 bg-background">
      <header className="relative bg-background">
        <MaxWidthWrapper>
          <motion.div
            variants={parentVariant(0.5, 0.25)}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="border-b border-primary"
          >
            <div className="flex h-16 items-center">
              {/* Mobile nav */}
              <MobileNav navLinks={navLinks} />

              {/* Desktop / large devices */}
              <motion.div
                variants={childrenVar("vertical", "tween")}
                className="ml-4 flex lg:ml-0"
              >
                {/* logo */}
                <Link href="/">
                  <Icons.logo className="h-10 w-10 hover:scale-110 transition-all ease-in-out" />
                </Link>
              </motion.div>

              {/* Right side of nav */}
              <div className="ml-auto flex items-center">
                <motion.div
                  variants={parentVariant(0.2, 0.25)}
                  className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                >
                  {navLinks.map((item) => (
                    <motion.span
                      variants={childrenVar("horizontal", "spring")}
                      key={item.name}
                      className="text-center md:ml-8 md:my-0 my-7 text-xl relative"
                    >
                      <a
                        href={item.href}
                        className="text-white duration-300 hover:underline-hover hover:text-primary"
                      >
                        {item.name}
                      </a>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
