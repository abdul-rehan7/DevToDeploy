import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[var(--thirdcolor)]  text-[var(--secondary)] pt-5 border-t border-gray-400">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start  items-start gap-6 ">
        <img src="/logo-trans.png"  className="lg:w-[10rem] lg:h-[4rem] w-[6rem] h-[2.5rem]" alt="" />
          <p className="text-base text-[var(--secondary)]">
            DevToDeploy 2024 <br /> All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">About</h1>
              <Link href={""}>How it Works</Link>
              <Link href={""}>Featured</Link>
              <Link href={""}>Partnership</Link>
              <Link href={""}>Business Relation</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">Company</h1>
              <Link href={""}>Events</Link>
              <Link href={""}>Blogs</Link>
              <Link href={""}>PodCast</Link>
              <Link href={""}>Invite a Friend</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base min-w-[170px]">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">Socials</h1>
              <Link href={""}>Discord</Link>
              <Link href={""}>Instagram</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>Facebook</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-between items-center flex-wrap mt-10 border-t border-gray-400 sm:px-16 px-6 py-10  text-xs md:text-base">
        <p>@2024 DevToDeploy. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href={"/"} className="text-[var(--secondary)]">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-[var(--secondary)] ">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
