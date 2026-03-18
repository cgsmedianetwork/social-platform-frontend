"use client";

import { cn } from "@/lib/utils";
import { Cancel01Icon, Menu11Icon } from "hugeicons-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    const target = document.querySelector(hash);
    setIsOpen(false);

    // Wait for drawer close animation + Vaul's body style cleanup
    const scrollToTarget = () => {
      if (target) {
        // Use requestAnimationFrame to ensure DOM is settled after Vaul restores body styles
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    setTimeout(scrollToTarget, 500);
  };
  return (
    <Drawer
      direction="right"
      open={isOpen}
      onOpenChange={setIsOpen}
      noBodyStyles
    >
      <DrawerTrigger>
        <div className="sm:hidden hover:bg-slate-700/15 rounded-md cursor-pointer p-2">
          <Menu11Icon size={20} strokeWidth={1.8} className="cursor-pointer" />
        </div>
      </DrawerTrigger>
      <DrawerContent className={cn("bg-slate-50 p-3 max-w-2xs")}>
        {/* <DrawerTitle className={cn("hidden")}></DrawerTitle> */}
        <div className="px-2 flex ">
          <DrawerClose>
            <div className="bg-slate-200 p-1 rounded-md">
              <Cancel01Icon
                size={20}
                strokeWidth={2}
                className="cursor-pointer"
              />
            </div>
          </DrawerClose>
        </div>
        <ul className=" flex flex-col gap-0.5 mt-4 text-base font-medium ">
          <a
            href="#features"
            className="cursor-pointer text-slate-800 py-2 hover:bg-slate-200 rounded-md px-3"
            onClick={(e) => handleLinkClick(e, "#features")}
          >
            Features
          </a>
          <a
            href="#testimonial"
            className="cursor-pointer text-slate-800 py-2 hover:bg-slate-200 rounded-md px-3"
            onClick={(e) => handleLinkClick(e, "#testimonial")}
          >
            Testimonial
          </a>
          <a
            href="#faq"
            className="cursor-pointer text-slate-800 py-2 hover:bg-slate-200 rounded-md px-3"
            onClick={(e) => handleLinkClick(e, "#faq")}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="cursor-pointer text-slate-800 py-2 hover:bg-slate-200 rounded-md px-3"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Contact
          </a>
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
