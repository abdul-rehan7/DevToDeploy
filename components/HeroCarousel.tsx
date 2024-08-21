"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";

export function ImagesCarousel() {
  const images = [
    "/01.jpg",
    "/02.jpg",
    "/03.jpg",
    "/04.jpg",
    "/05.jpg",
    "/06.jpg",
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
        <motion.p className="font-bold flex text-white flex-col justify-center items-center text-2xl md:text-5xl text-center py-4">
          <p className="lg:w-[80vw] w-screen">
            &quot;Software is a{" "}
            <span className="text-[var(--third)]">great combination </span>
            between artistry and engineering.&quot; <br /> — Bill Gates
          </p>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
