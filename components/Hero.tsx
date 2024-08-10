import React from "react";

interface HeroProps {
  title?: string;
  description?: string;
  classes?:string
  img?:string
}

const Hero: React.FC<HeroProps> = ({ title, description, classes, img }) => {
  return (
    <section style={{backgroundImage:`url(${img})`}} className={`${classes} flex space-y-7 flex-col lg:flex-row justify-center items-center px-20 h-[30vh] lg:h-[70vh] w-screen bg-[var(--primary)]`}>
      <div className="text-center flex space-y-5 flex-col text-[var(--secondary)]  lg:w-[70vw] w-[90vw] ">
        <h1 className="heading text-center">{title}</h1>
        <p className="para text-center">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
