"use client";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { IoMdSearch } from "react-icons/io";
import { DivideSquareIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export function NavbarDemo() {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSearchVisible, setSearchVisible] = useState(false);

  return (
    <>
      <div className="bg-transparent lg:px-20 px-7 py-2 flex justify-between items-center w-full">
        <div className="logo">
          <img src="/logo-trans.png" className="w-[10rem] h-[4rem]" alt="" />
        </div>
        <button
          className=" top-4 left-4 lg:hidden  text-white rounded"
          onClick={() => setVisible(false)}
        >
          <div className="burger lg:hidden flex flex-col space-y-1">
            <div className="line bg-black h-1 w-7 rounded-full"></div>
            <div className="line bg-black h-1 w-7 rounded-full"></div>
            <div className="line bg-black h-1 w-7 rounded-full"></div>
          </div>
        </button>
        <div className="hidden lg:flex space-x-10 text-lg ">
          <HoveredLink href="/">Home</HoveredLink>
          <MenuItem
            link="/services"
            active={active}
            setActive={setActive}
            item="Services"
          >
            <div className="flex  relative space-x-2 justify-evenly p-4 w-[96vw] h-[60vh]">
              <div className="flex flex-col space-y-2">
                <h1 className="py-1 text-xl font-semibold text-[var(--third)]">
                  Software Development
                </h1>
                <HoveredLink className="text-sm" href="/services#webdev">
                  Website Development
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#mdev">
                  Mobile App Development
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#bas">
                  Business Analytics Services
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#seo">
                  Search Engine Optimisation
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#smm">
                  Social Media Management
                </HoveredLink>
              </div>

              <div className="flex flex-col space-y-2">
                <h1 className="py-1 text-xl font-semibold text-[var(--third)]">
                  Artificial Intelligence
                </h1>
                <HoveredLink className="text-sm" href="/services#webdev">
                  AI Consulting
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#mdev">
                  Generative AI
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#bas">
                  Machine Learning
                </HoveredLink>
                <HoveredLink className="text-sm" href="/services#seo">
                  AI Frameworks
                </HoveredLink>
              </div>
            </div>
          </MenuItem>

          <HoveredLink href="/about">About</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
        </div>
        <div className="-mr-28 px-2 hidden md:flex items-center space-x-2">
          {/* Search bar with sliding animation */}
          <div
            className={`overflow-hidden p-2 transition-all duration-300 ${
              isSearchVisible
                ? "w-52 opacity-100 right-0"
                : "right-0 w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className=" focus:outline-[var(--third)] w-full px-2 py-1 border-[1px] rounded-sm border-gray-300"
            />
          </div>

          {/* Search icon to toggle the search bar */}
          <IoMdSearch
            className="cursor-pointer text-2xl"
            onClick={() => setSearchVisible(!isSearchVisible)}
          />
        
        </div>
        {/* Search bar with sliding animation */}

        <div className="button hidden lg:block">
          <Link
            className="py-3 px-5 hover:text-white hover:bg-[var(--third)] transition-all hover:border-white rounded-full border-2 border-black"
            href="/contact"
          >
            Get Started +
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bg-[#7474748d] backdrop-blur-sm z-[100] p-2 px-4 text-white h-full flex  w-[50%] transition-transform duration-500 ${
          visible ? "translate-x-full" : " translate-x-0"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <IoClose className="text-3xl " onClick={() => setVisible(true)} />
          <Link
            className="link w-[10rem]"
            href="/"
            onClick={() => setVisible(true)}
          >
            Home
          </Link>
          <Link
            className="link w-[10rem]"
            href="/services"
            onClick={() => setVisible(true)}
          >
            Services
          </Link>
          <Link
            className="link w-[10rem]"
            href="/about"
            onClick={() => setVisible(true)}
          >
            About
          </Link>
          <Link
            className="link w-[10rem]"
            href="/contact"
            onClick={() => setVisible(true)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
