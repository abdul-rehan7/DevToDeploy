"use client";
import { CarouselDemo } from "@/components/Carousel";
import * as React from "react";
import Link from "next/link";
import { ImagesCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-normal items-center">
      {/* ============== HERO SECTION  */}
      <section
        style={{ backgroundImage: `url(${"/texture.jpg"})` }}
        className={`flex bg-center bg-cover bg-no-repeat flex-col lg:flex-row justify-center items-center  p-10  lg:h-[100vh] h-auto w-screen`}
      >
        <div className="first h-full flex flex-col justify-center py-6    space-y-5 lg:w-[50vw]  w-[95vw]  lg:p-14 p-7">
          <h1 className="text-4xl font-semibold">
            Advanced IT Solutions: <br />
            <span className="text-blue-500">Empowering Businesses</span> With
            Transforming Tech.
          </h1>
          <p>
            DevToDeploy elevates your business with customized, fully managed
            software development solutions. From web and mobile application
            development to business analytics, social media management, and SEO,
            our comprehensive services ensure you can focus on your core
            objectives while we manage the tech complexities and drive your
            digital success.
          </p>
          <Link
            href="/contact"
            className="border-2 w-[10rem] hover:text-white hover:bg-[var(--third)] transition-all hover:border-white  border-blue-600 py-3 px-7 rounded-full"
          >
            Learn More +
          </Link>
        </div>
        <div className="second lg:w-[50vw] w-[90vw] flex flex-col justify-center items-center">
          <img className="h-[70vh]" src="/hero-item.png" alt="" />
        </div>
      </section>
      {/* ============== SERVICES SECTION  */}

      <section className=" px-4 py-8 w-screen flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-[2%] justify-center">
        <div className="flex space-x-5 items-center py-5 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img

            className=" spin lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Customer Satisfaction
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-5 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="spin  lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Innovation and Creativity
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-5 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="spin lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Customer Satisfaction
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-5 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="spin lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            24/7 Proactive Support
          </h1>
        </div>
      </section>

      {/* third section */}
      <section className=" lg:h-[80vh] h-auto flex flex-col lg:flex-row items-center justify-center w-screen p-12">
        <div className="first p-3 h-full  lg:w-[50vw] w-[90vw]">
          <h1 className=" lg:w-[30vw] text-4xl font-semibold">
            We Help You <br />{" "}
            <span className=" text-blue-500">satisfy Your Audience</span>
          </h1>
          <p className="mt-3">
            Creating an outstanding product goes beyond coding—it demands a
            blend of expertise from web developers, app developers, analysts,
            and digital strategists. At DevToDeploy, we excel in delivering
            exceptional Web Development, Mobile Application Development,
            Business Analytics Services, Social Media Management, and SEO
            solutions.
          </p>
          <p className="my-5">
            Our team is dedicated to building, launching, and growing your
            digital presence with precision and creativity. We thrive on
            collaboration and problem-solving, ensuring your audience receives
            an engaging and impactful experience. With DevToDeploy, you get a
            partner committed to elevating your brand and achieving your goals.
          </p>
          <div>
            <Link
              href="/about"
              className="mt-5 px-8 py-2 bg-white border-2 hover:text-white hover:bg-[var(--third)] transition-all hover:border-white border-blue-500 rounded-full"
            >
              About +
            </Link>
          </div>
        </div>
        <div className="second  flex items-center justify-center p-3 h-full lg:w-[50vw] w-[95vw]">
          <iframe
            width="560"
            height="320"
            src="https://www.youtube.com/embed/TjnwKDVjUYc?si=BZo-70xRfHnW6yoG"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
      {/* Fourth Section */}
      <section className="flex flex-col space-y-7 items-center w-screen p-12">
        <h1 className="text-4xl font-semibold text-center ">Our Services</h1>
        <CarouselDemo />
      </section>

      {/* ===================CONSULTATION */}
      <div className=" w-screen flex px-16 py-8 flex-col justify-center items-center lg:flex-row">
        <div className=" lg:w-[60vw] w-[90vw] hidden lg:block">
          <img src="/consultation.jpg" alt="" />
        </div>
        <div className="bg-white border-[1px] border-gray-200 lg:-translate-x-[30%] rounded-md p-6 flex flex-col space-y-3 lg:w-[50vw] w-[90vw]">
          <h1 className="lg:text-4xl text-2xl font-semibold lg:w-[60%] w-[80%]">
            Schedule a Free Consultation
          </h1>
          <p className="lg:text-base  text-sm">
            We&apos;re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>
          <form action="" className="flex flex-col space-y-4 ">
            <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-4 justify-between w-full">
              <input placeholder="Name" type="text" className=" border-[1px] border-gray-200 p-2 rounded-md lg:text-lg text-sm" />
              <input placeholder="Email" type="text" className=" border-[1px] border-gray-200 p-2 rounded-md lg:text-lg text-sm" />
            </div>
            <div className="flex flex-col space-y-5 justify-between w-full">
              <input type="text" placeholder="Subject" className=" border-[1px] border-gray-200 p-2 rounded-md lg:text-lg text-sm w-full" />

              <textarea placeholder="Message" className="rounded-md p-2" rows={5} name="" id=""></textarea>
            </div>
            <button type="submit" className="w-full font-semibold active:bg-[#161616] bg-black rounded-md text-white p-4">Submit</button>
           
          </form>
        </div>
      </div>
    </main>
  );
}
