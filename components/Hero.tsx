// components/Hero.tsx
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  image:string
}

const Hero: React.FC<HeroProps> = ({ title, description,image }) => {
  return (
    <section className="flex flex-col justify-center bg-no-repeat bg-cover bg-center items-start px-20 h-screen w-screen " style={{backgroundImage:`url(${image})`}}>
      <div className="space-y-5 text-white  lg:w-[40vw] w-[60vw]" >
        <h1 className="heading ">{title}</h1>
        <p className="para">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
