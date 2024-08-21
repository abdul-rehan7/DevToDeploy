import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <section
        style={{
          backgroundImage: `url(${"/contact1.jpg"})`,
          backgroundBlendMode: "overlay",
        }}
        className={`flex bg-center bg-[#000000a2] bg-cover bg-no-repeat flex-col lg:flex-row justify-center items-center pt-24 p-10  lg:h-[60vh] h-auto w-screen`}
      >
        <div className="first text-white h-full flex flex-col text-center justify-center py-16    space-y-5 lg:w-[90vw]  w-[95vw]  lg:p-14 p-7">
          <h1 className="text-5xl font-bold">
            Tell us What&apos;s on
            <span className="text-blue-500"> your Mind</span>
          </h1>
          <p className="text-lg">
            Give us a few minutes, and we&apos;ll give you clarity and direction
            about your tech needs.
          </p>
        </div>
      </section>
      {/* Form Section */}

      <section className=" flex flex-col lg:px-24 px-7 py-3">
        <div className="flex flex-col lg:flex-row lg:space-x-2 lg:w-full w-[96%] ">
          <div className="flex w-full  flex-col m-2 space-y-2 ">
            <label htmlFor="Name">Name &#42;</label>
            <input
              placeholder="Your Name"
              className="border-[1px] border-gray-500 px-4 py-3 "
              type="text"
            />
          </div>
          <div className="flex w-full  flex-col m-2 space-y-2 ">
            <label htmlFor="Email">Email &#42;</label>
            <input
              placeholder="Your Email"
              className="border-[1px] border-gray-500 px-4 py-3 "
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  lg:space-x-2 lg:w-full w-[96%] ">
          <div className="flex w-full  flex-col m-2 space-y-2 ">
            <label htmlFor="Company Name">
              Company Name{" "}
              <span className="text-gray-400">&#40;Optional&#41;</span>{" "}
            </label>
            <input
              placeholder="Your Company Name"
              className="border-[1px] border-gray-500 px-4 py-3 "
              type="text"
            />
          </div>
          <div className="flex w-full  flex-col m-2 space-y-2 ">
            <label htmlFor="Phone ">
              Phone <span className="text-gray-400">&#40;Optional&#41;</span>{" "}
            </label>
            <input
              placeholder="Your Phone"
              className="border-[1px] border-gray-500 px-4 py-3 "
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-full w-[96%] ">
          <div className="flex w-full  flex-col m-2 space-y-2 ">
            <label htmlFor="message">Speak your mind! &#42;</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="border-[1px] flex justify-start  border-gray-500 px-4 py-3 "
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-0 p-2 lg:justify-between lg:flex-row lg:w-full w-[100%] ">
          <p className="lg:w-[60%] font-semibold">
            Never share sensitive information &#40;credit card numbers&#44;
            social security numbers&#44; passwords&#41; through this form.
          </p>
          <a
            className="lg:w-[30%] py-3 px-5 active:bg-blue-400 cursor-pointer text-white font-bold bg-[var(--third)] flex justify-center
          items-center"
          >
            Submit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
