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
    title: "Here I am",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora tenetur repudiandae quasi illum, quis voluptas eligendi enim ad debitis",
  },
  {
    img: "/our-personnel.png",
    title: "Here I How",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora tenetur repudiandae quasi illum, quis voluptas eligendi enim ad debitis",
  },
  {
    img: "/our-personnel.png",
    title: "Here I How",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora tenetur repudiandae quasi illum, quis voluptas eligendi enim ad debitis",
  },
  {
    img: "/our-personnel.png",
    title: "Here I How",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora tenetur repudiandae quasi illum, quis voluptas eligendi enim ad debitis",
  },
  {
    img: "/our-personnel.png",
    title: "Here I How",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora tenetur repudiandae quasi illum, quis voluptas eligendi enim ad debitis",
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
                  <span className="text-3xl font-semibold">{card.title}</span>
                  <span className="text-base text-center font-normal">{card.desc}</span>
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
