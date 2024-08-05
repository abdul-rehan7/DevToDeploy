import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#151515de] items-center fixed flex justify-between text-lg lg:text-2xl w-full text-white py-4 px-5 lg:px-12">
      <div className="logo font-bold">DevToDeploy</div>
      <div className="nav-links space-x-7">
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
        <button  className="bg-transparent active:bg-[#292929] text-white border-[1px] border-white rounded-sm text-xl lg:text-xl  py-2 px-4">
          <a href="https://www.linkedin.com/" target="_blank">Connect</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
