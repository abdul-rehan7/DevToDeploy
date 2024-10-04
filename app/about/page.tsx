"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
  TbDeviceDesktopAnalytics,
  TbWorldSearch,
} from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { AccordionDemo } from "@/components/Accordian";
interface CounterProps {
  target: number;
}

// =============> Counter Component
const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Track if counting has started
  const counterRef = useRef<HTMLParagraphElement>(null); // Ref for the counter element
  const speed = 97;

  useEffect(() => {
    const increment = Math.ceil(target / speed);

    if (hasStarted && count < target) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + increment, target));
      }, 40);

      return () => clearTimeout(timer);
    }
  }, [count, target, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true); // Start counting when the element is in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <p ref={counterRef} className="count text-8xl lg:text-9xl">
      {count}
    </p>
  );
};

const About = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${"/about.jpg"})`, backgroundBlendMode:"overlay"}}
        className={`flex bg-center bg-[#000000b5] bg-cover bg-no-repeat flex-col lg:flex-row justify-center items-center pt-24 p-10  lg:h-[80vh] h-auto w-screen`}
      >
        <div className="first h-full flex flex-col justify-center py-16    space-y-5 lg:w-[70vw]  w-[96vw]  lg:p-14 p-4">
          <h1 className="md:text-4xl  text-2xl text-center text-white font-semibold">
            Grow Your Business with
            <span className="text-blue-500"> Strategic IT Solutions</span> With
            DevToDeploy
          </h1>
        </div>
      </section>

      <div className="w-full lg:space-x-7 justify-center items-center py-5  lg:space-y-0 space-y-7 flex flex-col lg:flex-row lg:justify-between lg:p-16 md:h-[25rem] bg-gray-100">
        <div className="first flex flex-col space-y-4 lg:w-[45vw] w-[80vw]">
          <div className="text-xl lg:text-2xl font-bold text-[var(--third)]">
          Who We Are?
          </div>
          <div className="about__para">
            With a strong foundation in digital technology stretching over 13
            years, DevToDeploy has seamlessly transitioned into the creative
            landscape, emerging as a dynamic force in the industry. Since our
            establishment, we&apos;ve been at the forefront of digital
            innovation, driving impactful changes and shaping the digital
            landscape on a global scale. Our expertise in media communication
            and technology has enabled us to offer exceptional digital solutions
            worldwide. We believe that standard solutions don&apos;t suffice;
            clients seek distinctive approaches that differentiate them from the
            competition and deliver true value. At DevToDeploy, our mission is
            to surpass industry norms, ensuring not just customer satisfaction
            but a continual sense of anticipation and engagement.
          </div>
        </div>
        <div className="secondflex flex-col space-y-4 lg:w-[45vw] w-[80vw]">
          <div className="text-xl lg:text-2xl font-bold text-[var(--third)]">
            What We Do
          </div>
          <div className="about__para">
            At DevToDeploy, it&apos;s not just about what we offer, but how we
            deliver it that sets us apart. In today&apos;s digital age, the
            landscape extends beyond mere information exchange; it&apos;s about
            fostering deep engagement and maintaining your brand&apos;s
            prominence. We provide comprehensive solutions for a diverse range
            of digital needs, from web and mobile application development to
            business analytics, social media management, and search engine
            optimization. Whether you&apos;re building your brand identity from
            scratch, enhancing your current website, launching an eCommerce
            platform, or crafting a digital marketing strategy, we deliver
            tailored solutions that turn your vision into reality. Our approach
            combines innovative ideas with strategic insights to create
            engaging, effective, and results-driven digital experiences that
            elevate your business globally.
          </div>
        </div>
      </div>

      <div
        className="third w-full   flex items-center text-center bg-center bg-cover bg-no-repeat justify-center md:h-[15rem] h-[10rem] bg-[#00000084]"
        style={{ backgroundImage: `url(${"/banner.jpg"}) ` }}
      >
        <div className="text-xl lg:text-4xl font-bold text-white absolute opacity-100 z-50 lg:w-[60%] w-[90%]">
          “Being human in the digital world is about building a digital world
          for humans”
        </div>
      </div>

      <div className="flex flex-col  space-y-2 lg:space-y-5  py-10 lg:py-14 lg:px-10 justify-center items-center">
        <div className="flex flex-col lg:flex-row px-10 space-y-2 w-screen lg:w-[100%] justify-around">
          <div className=" flex items-center space-x-3 counter item text-center">
            <TbDeviceDesktopCode className="text-7xl lg:text-8xl" />
            <p className="font-normal text-[var(--third)] hover:text-black transition-all cursor-pointer text-xl lg:text-xl">
              Web Development
            </p>
          </div>
          <div className=" flex items-center space-x-3 counter item text-center">
            <TbDeviceMobileCode className="text-7xl lg:text-8xl" />
            <p className="font-normal text-[var(--third)] hover:text-black transition-all cursor-pointer text-xl lg:text-xl">
              Mobile Application Development
            </p>
          </div>
          <div className=" flex items-center space-x-3 counter item text-center">
            <TbDeviceDesktopAnalytics className="text-7xl lg:text-8xl" />
            <p className="font-normal text-[var(--third)] hover:text-black transition-all cursor-pointer text-xl lg:text-xl">
              Business Analytics Services
            </p>
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row px-10 space-y-2 w-screen lg:w-[80%] justify-around">
          <div className=" flex items-center space-x-3 counter item text-center">
            <FaUsersGear className="text-7xl lg:text-8xl" />
            <p className="font-normal text-[var(--third)] hover:text-black transition-all cursor-pointer text-xl lg:text-xl">
              Social Media Management
            </p>
          </div>
          <div className=" flex items-center space-x-3 counter item text-center">
            <TbWorldSearch className="text-7xl lg:text-8xl" />
            <p className="font-normal text-[var(--third)] hover:text-black transition-all cursor-pointer text-xl lg:text-xl">
              SEO (Search Engine Optimization)
            </p>
          </div>
        </div>
      </div>
      {/* =============> Counter Section */}
      <div className="fourth flex flex-col lg:flex-row space-y-7 lg:space-y-0  py-10 lg:py-16 lg:px-10 lg:justify-around">
        <div className="flex w-screen lg:w-[50%] justify-around">
          <div className="counter item text-center">
            <Counter target={24} />
            <p className="font-medium text-base lg:text-xl">
              Football Games Played
            </p>
          </div>
          <div className="counter item text-center">
            <Counter target={39} />
            <p className="font-medium text-base lg:text-xl">
              Cups of Tea Consumed
            </p>
          </div>
        </div>
        <div className="flex w-screen lg:w-[50%] justify-around">
          <div className="counter item text-center">
            <Counter target={17} />
            <p className="font-medium text-base lg:text-xl">
              Projects Finished
            </p>
          </div>
          <div className="counter item text-center">
            <Counter target={37} />
            <p className="font-medium text-base lg:text-xl">
              Digital Inhabitants
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
