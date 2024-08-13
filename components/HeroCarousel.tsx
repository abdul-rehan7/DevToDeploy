"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesCarousel() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-10 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold flex flex-col justify-center w-screen items-center text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Advanced IT Solutions:<span className="text-[var(--third)]"> Empowering Businesses </span> With Transforming Tech

        <p className="text-base lg:w-[60vw] w-[80vw]"> DevToDeploy elevates your business with customized, fully managed software development solutions. From web and mobile application development to business analytics, social media management, and SEO, our comprehensive services ensure you can focus on your core objectives while we manage the tech complexities and drive your digital success.</p>
        </motion.p>
        <Link href='/contact'  className="border-2 w-[10rem] hover:text-white hover:bg-[var(--third)] transition-all hover:border-white  border-blue-600 py-3 px-7 rounded-full">
            Learn More +
          </Link>
      </motion.div>
    </ImagesSlider>
  );
}
