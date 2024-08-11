import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF ,FaTwitter,FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-100  text-black pt-5 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start  items-start gap-6 ">
          <img
            src="/logo-trans.png"
            className="lg:w-[10rem] lg:h-[4rem] w-[12rem] h-[5rem]"
            alt=""
          />
          <p className="text-base text-justify text-black lg:w-[25rem] w-[27rem]">
            Markdev Solutions provides web, mobile, and AI solutions, crafting
            visually captivating designs and executing result-driven digital
            marketing strategies to amplify your brand's reach.
          </p>
          <div className="socials flex space-x-4">
            <a
              target="_blank"
              className="icon p-3 hover:bg-[var(--third)] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              className="icon p-3 hover:bg-[var(--third)] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              className="icon p-3 hover:bg-[var(--third)] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              className="icon p-3 hover:bg-[var(--third)] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-10">
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-[var(--third)]">Useful Links</h1>
              <div className="lg:flex hidden flex-col space-y-3">
                <Link href={""}>How it Works</Link>
                <Link href={""}>Featured</Link>
                <Link href={""}>Partnership</Link>
                <Link href={""}>Business Relation</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-[var(--third)]">Portfolio</h1>
              <div className="lg:flex hidden flex-col space-y-3">
                <Link href={""}>Events</Link>
                <Link href={""}>Blogs</Link>
                <Link href={""}>PodCast</Link>
                <Link href={""}>Invite a Friend</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-[var(--third)]">Contact Us</h1>
              <div className="hidden lg:flex lg:flex-col space-y-3">
                <Link href={""}>Discord</Link>
                <Link href={""}>Instagram</Link>
                <Link href={""}>Twitter</Link>
                <Link href={""}>Facebook</Link>
              </div>
              <div className="flex flex-col ">
                <div className="text-gray-400 font-semibold">PHONE</div>
                <span className="text-[var(--third)] font-semibold"> + 92 333 7777777 </span>
                <span className="text-[var(--third)] font-semibold"> + 92 333 7777777 </span>
                <div className="text-gray-400 font-semibold">Email</div>
                <span className="text-[var(--third)] font-semibold">example@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center flex-wrap  sm:px-16 px-6 py-5  text-xs md:text-base">
        <p>@2024 DevToDeploy. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
