"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState({
    primary: "#000",
    secondary: "#ffffff",
    thirdcolor: "#000000e0",
    sunVisible: false,
    moonVisible: true,
  });
  const toggleTheme = () => {
    setTheme({
      sunVisible: !theme.sunVisible,
      moonVisible: !theme.moonVisible,
      primary: theme.primary === "#000" ? "#ffffff" : "#000",
      secondary: theme.secondary === "#ffffff" ? "#000" : "#ffffff",
      thirdcolor: theme.thirdcolor === "#000000e0" ? "#dedede" : "#000000e0",
    });
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--thirdcolor",theme.thirdcolor);
  };

  return (
    <div className="bg-[var(--thirdcolor)]  items-center z-50  flex justify-between text-[0.6rem] lg:text-2xl w-full text-[var(--secondary)] py-3 lg:py-4 px-2 lg:px-12">
      <div className="logo ">
        <img src="/logo-trans.png"  className="lg:w-[10rem] lg:h-[4rem] w-[6rem] h-[2.5rem]" alt="" />
      </div>
      <div className="nav-links space-x-2 lg:space-x-7">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/services">
          Services
        </Link>
        <Link className="link" href="/about">
          About
        </Link>
        <Link className="link" href="/contact">
          Contact
        </Link>
        <button className="bg-transparent text-[var(--secondary)] border-[1px] border-[var(--secondary)] rounded-sm text-[0.6rem] lg:text-xl  py-1 px-2 lg:py-2 lg:px-4">
          <a href="https://www.linkedin.com/" target="_blank">
            Connect
          </a>
        </button>
        <button
          onClick={toggleTheme}
          className="  bg-transparent text-[var(--secondary)] text-xs lg:text-xl  py-1 px-2 lg:py-2 lg:px-4"
        >
          {theme.sunVisible ? <FaSun id="sun" /> : <FaMoon id="moon" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
