import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoMail } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-100  text-black lg:pt-2 pt-5 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 lg:py-4 ">
        <div className="flex flex-col justify-start  items-start gap-6 ">
          <img
            src="/logo-trans.png"
            className="lg:w-[10rem] lg:h-[4rem] w-[12rem] h-[5rem]"
            alt=""
          />
          <p className="lg:text-base text-sm  text-justify text-black lg:w-[25rem] w-[85vw]">
            DevToDeploy provides web&#44; mobile&#44; and AI solutions&#44;
            crafting visually captivating designs and executing result-driven
            digital marketing strategies to amplify your brand&apos;s reach.
          </p>
          <div className="bg-gray-200 border-[1px] border-[var(--third)] lg:pl-4 pl-2 rounded-md flex items-center">
            <GoMail />
            <input
              placeholder="Your Email"
              className="lg:text-base text-xs bg-gray-200 border-none px-3 lg:w-[100%] w-[50%] focus:outline-none lg:px-4 lg:py-2 h-full"
              type="text"
            />
            <button className="bg-[var(--third)] text-white rounded-tr-md rounded-br-md lg:px-5 lg:py-3 py-2 px-10 h-full">
              Subscribe
            </button>
          </div>
          <div className="socials flex space-x-4">
            <a
              href=" https://www.facebook.com/devtodeploy"
              target="_blank"
              className="icon p-3 hover:bg-[#1f44ff] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
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
              href="https://pk.linkedin.com/in/devtodeploy-kamyab-pakistan-58ba921ba"
              target="_blank"
              className="icon p-3 hover:bg-[#1f44ff] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=" https://www.instagram.com/devtodeploy/"
              target="_blank"
              className="icon p-3 hover:bg-[#4c68d7] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com/devtodeploy/"
              target="_blank"
              className="icon p-3 hover:bg-[#ed2828] transition-all hover:text-white rounded-md cursor-pointer border-[1px] border-gray-300 bg-green"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-10">
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-[var(--third)]">Useful Links</h1>
              <div className="lg:flex hidden flex-col space-y-3">
                <Link href={"/"}>Home</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-[var(--third)]">Contact Us</h1>
              <div className="hidden lg:flex lg:flex-col space-y-3">
                <Link href={"https://www.pinterest.com/devtodeploy/"}>
                  Pinterest
                </Link>
                <Link href={" https://www.instagram.com/devtodeploy/"}>
                  Instagram
                </Link>
                <Link
                  href={
                    "https://pk.linkedin.com/in/devtodeploy-kamyab-pakistan-58ba921ba"
                  }
                >
                  LinkedIn
                </Link>
                <Link href={" https://www.facebook.com/devtodeploy"}>
                  Facebook
                </Link>
              </div>
              <div className="flex flex-col ">
                <div className="text-black font-semibold">PHONE</div>
                <span className="text-[var(--third)] font-semibold">
                  {" "}
                  +92 317 1291912
                </span>
                <div className="text-black font-semibold">Email</div>
                <span className="text-[var(--third)] font-semibold">
                  example@gmail.com
                </span>
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
