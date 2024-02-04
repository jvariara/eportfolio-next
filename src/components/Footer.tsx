"use client";

import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { navLinks } from "@/config";

const Footer = () => {
  return (
    <footer className="bg-muted flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-primary">
          {/* logo */}
          <div className="pb-8 pt-16">
            <div className="flex justify-center">
              <Link href="/">
                <Icons.logo className="h-12 w-auto hover:scale-110 transition-all ease-in-out" />
              </Link>
            </div>
          </div>
          {/* legal stuff */}
          <div className="pb-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                {navLinks.map((nav, i) => (
                  <Link
                    key={i}
                    href={nav.href}
                    className="text-lg text-muted-foreground hover:text-primary"
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
