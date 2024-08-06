import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#000000d7] items-center z-50 fixed flex justify-between text-base lg:text-2xl w-full text-white py-3 lg:py-4 px-2 lg:px-12">
      <div className="logo font-bold">DevToDeploy</div>
      <div className="nav-links space-x-4 lg:space-x-7">
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
        <button  className="bg-transparent active:bg-[#292929] text-white border-[1px] border-white rounded-sm text-base lg:text-xl  py-1 px-2 lg:py-2 lg:px-4">
          <a href="https://www.linkedin.com/" target="_blank">Connect</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
