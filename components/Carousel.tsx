import * as React from "react";
import { Card, CardTitle } from "@/components/ui/card-hover-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardData = [
  {
    img: "/our-personnel.png", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business&apos;s success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but immersive digital experiences that captivate your audience and drive engagement.",
  },
  {
    img: "/our-personnel.png", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business&apos;s success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but immersive digital experiences that captivate your audience and drive engagement.",
  },
  {
    img: "/our-personnel.png", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business&apos;s success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but immersive digital experiences that captivate your audience and drive engagement.",
  },
  {
    img: "/our-personnel.png", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business&apos;s success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but immersive digital experiences that captivate your audience and drive engagement.",
  },
  {
    img: "/our-personnel.png", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business&apos;s success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but immersive digital experiences that captivate your audience and drive engagement.",
  },
 
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full lg:max-w-5xl max-w-xs">
      <CarouselContent>
        {CardData.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardTitle className="flex flex-col space-y-2 aspect-square items-center justify-center p-6">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[6rem] h-[6rem] object-cover"
                  />
                  <span className="text-3xl text-center font-semibold">{card.title}</span>
                  <span className="text-xs text-justify font-normal">
                    {card.desc}
                  </span>
                </CardTitle>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
