import * as React from "react";
import { Card, CardTitle } from "@/components/ui/card-hover-effect";
import {
  TbDeviceDesktopCode,
  TbDeviceMobileCode,
  TbDeviceAnalytics,
  TbUsersGroup,
} from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { Poppins } from "@next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardData = [
  {
    img: "/services/web_dev.jpeg", // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business's success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but... ",
  },
  {
    img:"/services/mob_dev.jpg", // Add your image URLs here
    title: "Mobile Application Development",
    desc: "In a world dominated by mobile devices, a powerful app can set your business apart and engage users like never before. At DevToDeploy, we specialize in creating high-impact mobile applications...",
  },
  {
    img: "/services/bus-anal.jpg", // Add your image URLs here
    title: "Business Analytics Services",
    desc: "Unlock the potential of your data with DevToDeploy's advanced business analytics services. We transform complex datasets into clear, actionable insights that empower you to make strategic decisions and drive...",
  },
  {
    img: "/services/soc_man.jpeg", // Add your image URLs here
    title: "Social Media Management",
    desc: "In today&apos;s digital age, social media is a crucial element of your brand&apos;s success. DevToDeploy offers comprehensive social media management services designed to amplify your online presence and engage your...",
  },
  {
    img: "/services/seo.jpg", // Add your image URLs here
    title: "SEO (Search Engine Optimization)",
    desc: "Achieve outstanding search engine visibility and attract quality traffic with &apos;s expert SEO services. In a competitive digital marketplace, being easily discoverable on search engines...",
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function CarouselDemo() {
  return (
    <Carousel className={`${poppins.className} w-full lg:max-w-5xl max-w-xs1`}>
      <CarouselContent>
        {CardData.map((card, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardTitle className="relative flex w-full flex-col lg:space-y-4 space-y-2 aspect-square items-baseline justify-evenly lg:p-0  ">
                  <span className="text-center  bg-green-500 w-full lg:text-6xl text-5xl">
                    <img className="h-[15rem]" src={card.img} alt="" />
                  </span>
                  <span className="lg:text-base px-4  text-sm text-center font-semibold">
                    {card.title}
                  </span>
                  <span className="text-sm px-4 text-justify font-normal">
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
