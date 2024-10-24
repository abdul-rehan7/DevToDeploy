"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  link: string;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={link}
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)} // Add this to reset active state
      className="relative "
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer  font-semibold hover:text-[var(--third)] text-black hover:opacity-[0.9] dark:text-black"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute  z-50 top-[calc(100%_+_0.1rem)] left-20 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="bg-[#ffffffd1] w-[100vw] h-auto dark:bg-white  overflow-hidden  shadow-xl"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="flex z-50 flex-col space-y-2 w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // This resets the state for the entire nav
      className="relative rounded-lg shadow-input flex justify-center space-x-4 px-8 py-5 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ className,  children, ...rest }: any) => {
  return (
    <Link
      {...rest}
     className={cn("dark:text-black font-semibold  hover:text-[var(--third)] ",className)}
    >
      {children}
    </Link>
  );
};
