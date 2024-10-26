"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

// Define the interface for props
interface ThreeDCardProps {
  name: string;         // Name prop as a string
  img: string;          // Image URL as a string
  description: string;  // Description prop as a string
}

export function ThreeDCard({ name, img, description }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var m-4 text-white"> {/* Added margin for spacing */}
      <CardBody className="bg-[var(--third)] group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-base font-bold  dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" dm:text-sm text-xs max-w-sm mt-4 dark:text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
