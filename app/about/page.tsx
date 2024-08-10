import Hero from "@/components/Hero";
import React from "react";

const About = () => {
  return (
    <div>
      <Hero title="We are analog beings living in a digital world, facing a quantum future" />
      <div className="w-full lg:space-x-7 justify-center items-center py-5  lg:space-y-0 space-y-7 flex flex-col lg:flex-row lg:justify-between lg:p-16 md:h-[25rem] bg-gray-100">
        <div className="first flex flex-col space-y-4 lg:w-[45vw] w-[80vw]">
          <div className="text-xl lg:text-2xl font-bold text-[var(--third)]">
            Who We Are
          </div>
          <div className="about__para">
            With a strong foundation in digital technology stretching over 13
            years, DevToDeploy has seamlessly transitioned into the creative
            landscape, emerging as a dynamic force in the industry. Since our
            establishment, we&apos;ve been at the forefront of digital
            innovation, driving impactful changes and shaping the digital
            landscape on a global scale. Our expertise in media communication
            and technology has enabled us to offer exceptional digital solutions
            worldwide. We believe that standard solutions don't suffice; clients
            seek distinctive approaches that differentiate them from the
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
            At DevToDeploy, it’s not just about what we offer, but how we
            deliver it that sets us apart. In today's digital age, the landscape
            extends beyond mere information exchange; it’s about fostering deep
            engagement and maintaining your brand's prominence. We provide
            comprehensive solutions for a diverse range of digital needs, from
            web and mobile application development to business analytics, social
            media management, and search engine optimization. Whether you’re
            building your brand identity from scratch, enhancing your current
            website, launching an eCommerce platform, or crafting a digital
            marketing strategy, we deliver tailored solutions that turn your
            vision into reality. Our approach combines innovative ideas with
            strategic insights to create engaging, effective, and results-driven
            digital experiences that elevate your business globally.
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
    </div>
  );
};

export default About;
