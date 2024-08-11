"use client";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-normal items-center">
      {/* ============== HERO SECTION  */}
      <section
        style={{ backgroundImage: `url(${"/texture.jpg"})` }}
        className={`flex bg-center bg-cover bg-no-repeat flex-col lg:flex-row justify-center items-center pt-24 p-10  lg:h-[100vh] h-auto w-screen`}
      >
        <div className="first h-full flex flex-col justify-center py-16    space-y-5 lg:w-[50vw]  w-[95vw]  lg:p-14 p-7">
          <h1 className="text-4xl font-semibold">
            Advanced IT Solutions:{" "}
            <span className="text-blue-500">Empowering Businesses</span> With
            Transforming Tech.
          </h1>
          <p>
            Tech Matter empowers businesses through customized, fully managed
            cloud and dependable, high-performing IT solutions. Our managed IT
            solutions and other services allow companies to concentrate on
            accomplishing their objectives rather than being weighed down by
            data backup and management tasks.
          </p>
          <button className="border-2 w-[10rem]  border-blue-600 py-3 px-7 rounded-full">
            Learn More +
          </button>
        </div>
        <div className="second lg:w-[50vw] w-[90vw] flex flex-col justify-center items-center  h-full ">
          <img src="/hero-item.png" alt="" />
        </div>
      </section>
      {/* ============== SERVICES SECTION  */}
      <section className=" px-4 py-8 w-screen flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-[2%] justify-center">
        <div className="flex space-x-5 items-center py-3 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Customer Satisfaction
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-3 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Innovation and Creativity
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-3 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            Customer Satisfaction
          </h1>
        </div>
        <div className="flex space-x-5 items-center py-3 px-3 rounded-md shadow-md bg-white shadow-[#bbbbbb]">
          <img
            className="lg:w-10 lg:h-10 w-[4rem] "
            src="/our-personnel.png"
            alt=""
          />
          <h1 className="lg:text-xl text-2xl font-semibold">
            24/7 Proactive Support
          </h1>
        </div>
      </section>
      {/* third section */}
      <section className=" lg:h-[80vh] h-auto flex flex-col lg:flex-row items-center justify-center w-screen p-5">
        <div className="first p-3 h-full  lg:w-[50vw] w-[90vw]">
          <h1 className=" lg:w-[30vw] text-4xl font-semibold">
            We Help You <br />{" "}
            <span className=" text-blue-500">satisfy Your Audience</span>
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            architecto minima nisi laborum ab, facilis sint odit, impedit nobis
            dicta recusandae eos nulla quaerat iusto nesciunt? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Minus, quae! Odit
            consectetur cum suscipit?
          </p>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            officiis quod nisi quos fuga minima iusto ex adipisci sunt, porro,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id
            explicabo officiis ea pariatur ullam recusandae hic odit obcaecati
            excepturi. harum reprehenderit mollitia aperiam natus voluptas
            perferendis dolor dolore ut impedit enim repudiandae ullam! Eius
            nostrum laudantium quae sapiente, earum maxime quasi atque quis enim
            vitae vero vel amet ex.
          </p>
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
    </main>
  );
}
