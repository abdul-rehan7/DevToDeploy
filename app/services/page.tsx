"use client";
import React from "react";
import { useEffect } from "react";
import { AccordionDemo } from "@/components/Accordian";
import {
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
  TbDeviceDesktopAnalytics,
  TbWorldSearch,
} from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>;
import AOS from "aos";
import { ImagesCarousel } from "@/components/HeroCarousel";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duration of animations
      once: true, // Whether animation should happen only once
      delay: 50, // Whether animation should happen only once
    });
  });

  return (
    <div className="bg-white flex flex-col items-center poppins-regular ">
         <section
        className={` p-0 h-auto w-screen`}
      >
        <ImagesCarousel />
      </section>

      {/* I am Service */}
      <div id="webdev" className="flex flex-col ">
        <div className="flex lg:flex-row flex-col  space-y-4 justify-center items-center px-5  md:px-[7rem]  text-left bg-[var(--third)] text-white w-screen md:h-auto pb-7 pt-5">
          <div className="first text-[11rem]" data-aos="fade-right">
            <TbDeviceDesktopCode className="lg:mr-16 text-white" />
          </div>
          <div className="second flex flex-col space-y-6">
            <div id="" className="heading__2 ">Web Development</div>
            <div className="para__2">
              In an era where your digital footprint defines your
              business&apos;s success, DevToDeploy is your partner in crafting
              an extraordinary online presence. Our web development services are
              designed to create not just websites but immersive digital
              experiences that captivate your audience and drive engagement. We
              blend creativity with cutting-edge technology to deliver solutions
              that are both visually appealing and highly functional. From the
              initial concept through to the final launch, our team focuses on
              building responsive, user-friendly websites that align perfectly
              with your business goals. Whether you need a sleek corporate site,
              a dynamic e-commerce platform, or a custom web application, our
              approach is tailored to deliver excellence and exceed your
              expectations. With DevToDeploy, your website will stand out,
              perform flawlessly, and enhance your brand&apos;s online impact.
            </div>
            <ul className="para__2 list-inside ">
              <li>• Responsive Design</li>
              <li>• User Experience (UX)</li>
              <li>• Performance Optimization</li>
              <li>• SEO-Friendly</li>
              <li>• E-Commerce Integration</li>
              <li>• Maintenance & Support</li>
              <li>• Customized Solutions</li>
            </ul>
          </div>
        </div>
      </div>
      {/* I am Service */}
      <div id="mdev"  className="flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse space-y-4 justify-center items-center px-5  md:px-[7rem] text-left bg-white text-black w-screen md:h-auto  pb-7 pt-5">
          <div className="second flex flex-col space-y-6">
            <div className="heading__2">Mobile Application Development</div>
            <div className="para__2 ">
              In a world dominated by mobile devices, a powerful app can set
              your business apart and engage users like never before. At
              DevToDeploy, we specialize in creating high-impact mobile
              applications that offer seamless performance and exceptional user
              experiences. Our development process integrates the latest
              technologies with user-centric design to deliver apps that not
              only meet but anticipate user needs. From native apps that
              leverage platform-specific features to cross-platform solutions
              that provide a consistent experience across devices, our team
              ensures that your app performs optimally and stands out in a
              crowded marketplace. We handle every stage of the app development
              lifecycle—from concept and design to development, testing, and
              launch—ensuring that your mobile application is both innovative
              and effective. With our expertise, your app will captivate users,
              drive engagement, and achieve your business objectives.
            </div>
            <ul className="para__2 list-inside ">
              <li> Native & Cross-Platform Development </li>
              <li>• Performance Optimization </li>
              <li>• Custom Features </li>
              <li>• Integration Capabilities </li>
              <li>• Security Measures </li>
              <li>• App Analytics </li>
              <li>• Customized Solutions </li>
            </ul>
          </div>
          <div className="first text-[11rem]" data-aos="fade-left">
            <TbDeviceMobileCode className="lg:ml-16 text-black" />
          </div>
        </div>
      </div>
      {/* I am Service */}
      <div  id="bas" className="flex flex-col">
        <div className="flex lg:flex-row flex-col text-white space-y-4 justify-center items-center px-5  md:px-[7rem]  text-left bg-[var(--third)] w-screen md:h-auto pb-7 pt-5">
          <div className="first text-[11rem]" data-aos="fade-right">
            <TbDeviceDesktopAnalytics className="lg:mr-16 text-[var(--secondary)]" />
          </div>
          <div className="second flex  flex-col space-y-6">
            <div className="heading__2">Business Analytics Services</div>
            <div className="para__2">
              Unlock the potential of your data with DevToDeploy&apos;s advanced
              business analytics services. We transform complex datasets into
              clear, actionable insights that empower you to make strategic
              decisions and drive your business forward. Our team uses
              sophisticated analytics tools and techniques to provide you with
              comprehensive reports and visualizations that highlight key
              trends, performance metrics, and growth opportunities. Whether you
              need to optimize operational efficiency, enhance customer
              experiences, or identify new market opportunities, our analytics
              solutions are tailored to provide the clarity and foresight you
              need. By turning raw data into valuable intelligence, we help you
              navigate the complexities of your business environment and stay
              ahead of the competition. With DevToDeploy, you’ll gain a deeper
              understanding of your business dynamics and make data-driven
              decisions that foster growth and success.
            </div>
            <ul className="para__2 list-inside ">
              <li>• Data Visualization</li>
              <li>• Custom Reporting</li>
              <li>• Trend Analysis</li>
              <li>• Data Integration</li>
              <li>• Customized Solutions</li>
            </ul>
          </div>
        </div>
      </div>
      {/* I am Service */}
      <div  id="smm"  className="flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse space-y-4 justify-center items-center px-5  md:px-[7rem] text-left bg-white text-black w-screen md:h-auto  pb-7 pt-7">
          <div className="second flex flex-col space-y-6">
            <div className="heading__2">Social Media Management</div>
            <div className="para__2">
              In today&apos;s digital age, social media is a crucial element of your
              brand&apos;s success. DevToDeploy offers comprehensive social media
              management services designed to amplify your online presence and
              engage your audience effectively. Our team develops and implements
              strategic social media plans that enhance your brand&apos;s visibility,
              foster meaningful connections with your target audience, and drive
              engagement. We handle everything from content creation and
              curation to community management and targeted advertising,
              ensuring your social media channels are vibrant, interactive, and
              aligned with your business objectives. With a focus on creativity
              and analytics, we track performance, refine strategies, and
              deliver results that matter. Partner with DevToDeploy to elevate
              your social media presence and achieve impactful results in the
              ever-evolving social landscape.
            </div>
            <ul className="para__2 list-inside ">
              <li>• Strategic Planning</li>
              <li>• Content Creation</li>
              <li>• Community Engagement</li>
              <li>• Ad Campaign Management</li>
              <li>• Performance Analytics</li>
              <li>• Brand Consistency</li>
              <li>• Trend Monitoring</li>
              <li>• Customized Solutions</li>
            </ul>
          </div>
          <div className="first text-[11rem]" data-aos="fade-left">
            <FaUsersGear className="lg:ml-16 text-black" />
          </div>
        </div>
      </div>
      {/* I am Service */}
      <div id="seo"  className="flex flex-col">
        <div className="flex text-white lg:flex-row flex-col space-y-4 justify-center items-center px-5  md:px-[7rem]  text-left bg-[var(--third)] w-screen md:h-auto  pb-7 pt-5">
          <div className="first text-[11rem]" data-aos="fade-right">
            <TbWorldSearch className="lg:mr-16 text-[var(--secondary)]" />
          </div>
          <div className="second flex flex-col space-y-6">
            <div className="heading__2">
              SEO &#40;Search Engine Optimization&#41;
            </div>
            <div className="para__2">
              Achieve outstanding search engine visibility and attract quality
              traffic with DevToDeploy’s expert SEO services. In a competitive
              digital marketplace, being easily discoverable on search engines
              is essential for driving success. Our SEO strategies are
              meticulously crafted to enhance your website’s rankings, optimize
              its performance, and ensure it stands out in search results. We
              use a comprehensive approach that includes keyword research,
              on-page optimization, technical SEO, and content strategy to boost
              your online presence. Our team stays up-to-date with the latest
              SEO trends and algorithm changes to keep your website ahead of the
              curve. By focusing on both immediate results and long-term growth,
              we help you connect with your audience, improve your search
              visibility, and achieve sustained success. With DevToDeploy,
              you’ll experience enhanced rankings, increased traffic, and a
              stronger online presence.
            </div>
            <ul className="para__2 list-inside ">
              <li>• Keyword Research</li>
              <li>• On-Page Optimization</li>
              <li>• Technical SEO</li>
              <li>• Content Strategy</li>
              <li>• Link Building</li>
              <li>• SEO Audits</li>
              <li>• Local SEO</li>
              <li>• Customized Solutions</li>
            </ul>
          </div>
        </div>
      </div>
      {/* =============> Accordion Section */}
      <div className="AccordionSection w-full py-[10%] flex  flex-col lg:flex-row lg:space-x-16 justify-center items-center p-4">
        <div className="lg:w-[50vw] flex flex-col space-y-3">
          <h1 className="text-3xl lg:text-4xl font-semibold">Any Queries? We are here to assist</h1>
          <p>Contact Tech Matter to schedule an IT consultation. We&apos;ll evaluate your infrastructure, discuss your needs, and suggest personalized solutions.</p>
          <div className=" h-[30vh]">
          <AccordionDemo />
          </div>
        </div>
        <div className="">
          <img className="w-[30vw] hidden lg:block " src="/accordion-item.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
