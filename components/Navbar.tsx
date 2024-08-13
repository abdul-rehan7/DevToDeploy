"use client";
import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TbSolarPanel } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "absolute lg:px-20 px-7 py-4 flex justify-between items-center lg:bg-transparent  bg-white inset-x-0 max-w-[100vw] ",
        className
      )}
    >
      <div className="logo">
        <img src="/logo-trans.png" className="w-[10rem] h-[4rem]" alt="" />
      </div>
      <div className="hidden lg:flex space-x-10 text-lg ">
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem
          link="/services"
          active={active}
          setActive={setActive}
          item='Services'
        >
          <HoveredLink className="text-sm" href="/">
            Website Development
          </HoveredLink>
          <HoveredLink className="text-sm" href="/">
            Mobile App Development
          </HoveredLink>
          <HoveredLink className="text-sm" href="/">
            Business Analytics Services
          </HoveredLink>
        </MenuItem>

        <HoveredLink href="/about">About</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </div>
      <div className="button hidden lg:block">
        <Link
          className="py-3 px-5 hover:text-white hover:bg-[var(--third)] transition-all hover:border-white rounded-full border-2 border-black"
          href="/contact"
        >
          Get Started +
        </Link>
      </div>
      <div className="lg:hidden">
        <div
          className="hamburger cursor-pointer space-y-1"
          onClick={() => setIsOpen(true)}
        >
          <div className="line bg-black w-7 h-1 rounded-full"></div>
          <div className="line bg-black w-7 h-1 rounded-full"></div>
          <div className="line bg-black w-7 h-1 rounded-full"></div>
        </div>
        {isOpen && (
          <div className="links flex flex-col text-2xl w-[100vw] h-auto  top-0 right-0 bg-gray-100 absolute py-4 px-11 space-y-4">
            <div className="cursor-pointer  font-bold flex items-center justify-between">
              <span>
                <img
                  src="/logo-trans.png"
                  alt="DevToDeploy"
                  className="w-[10rem] h-[4rem]"
                />
              </span>
              <span onClick={() => setIsOpen(false)}>
                <IoClose className="text-4xl" />
              </span>
            </div>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300"
              href="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300"
              href="/services"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
