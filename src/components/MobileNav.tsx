"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinksProp {
  name: string;
  href: string;
}

const MobileNav = ({ navLinks }: { navLinks: NavLinksProp[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-4/5">
          <div className="relative flex w-full h-full max-w-sm flex-col overflow-y-auto bg-background pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2">
              <div className="space-y-6 px-4 py-6">
                {navLinks.map((item) => (
                  <div className="flow-root relative" key={item.name}>
                    <a
                      href={item.href}
                      className="-mx-2 block p-4 font-medium text-4xl text-white hover:underline-hover hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
