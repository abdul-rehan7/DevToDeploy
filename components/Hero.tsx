// components/Hero.tsx
import React from "react";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section className="flex space-y-7 flex-col lg:flex-row justify-center items-center px-20 h-[80vh] lg:h-[70vh] w-screen bg-[var(--primary)]">
      <div className="text-center flex space-y-5 flex-col text-[var(--secondary)]  lg:w-[70vw] w-[90vw] ">
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
