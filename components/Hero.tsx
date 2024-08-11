import React from "react";

interface HeroProps {
  title?: string;
  description?: string;
  classes?: string;
  img?: string;
  color?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  classes,
  img,
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})`, backgroundBlendMode: "overlay" }}
      className={`${classes} flex space-y-7  bg-center bg-cover bg-no-repeat flex-col lg:flex-row justify-center items-center  h-[100vh] w-screen`}
    >
      <div className={`text-center  items-center h-full justify-center flex space-y-5 flex-col text-black  lg:w-[100vw] w-[90vw] `}>
        <h1 className="heading text-center lg:w-[70vw] w-[90vw]">{title}</h1>
        <p className="para text-center lg:w-[70vw] w-[90vw]">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
