"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TbSolarPanel } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

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
        "absolute px-5 py-4 flex justify-between items-center bg-white inset-x-0 max-w-[100vw] z-50",
        className
      )}
    >
      <div className="logo">
        <img src="/logo-trans.png" className="w-[10rem] h-[4rem]" alt="" />
      </div>
      <div className="hidden lg:block">
        <Menu setActive={setActive}>
          <HoveredLink href="/">Home</HoveredLink>

          <MenuItem
            link="/services"
            setActive={setActive}
            active={active}
            item="Services"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/about">About</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
        </Menu>
      </div>
      <div className="button hidden lg:block">
        <a
          className="py-3 px-5 rounded-full border-2 border-black"
          href="/www.linkedin.com"
        >
          Get Started +
        </a>
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
          <div className="links flex flex-col text-2xl w-[100vw] h-[70vh]  top-0 right-0 bg-white absolute p-7 space-y-4">
            <div className="cursor-pointer font-bold flex items-center justify-between">
              <span><img src="/logo-trans.png" alt="DevToDeploy" className="w-[10rem] h-[4rem]" /></span>
              <span onClick={() => setIsOpen(false)}><IoClose className="text-4xl"/></span>
            </div>
            <a className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300" href="/">
              Home
            </a>
            <a className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300" href="/about">
              About
            </a>
            <a className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300" href="/services">
              Services
            </a>
            <a className="text-black hover:text-[var(--third)] border-b-[1px] py-3 border-gray-300" href="/contact">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
