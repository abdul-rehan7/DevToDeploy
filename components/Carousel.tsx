import * as React from "react";
import { Card, CardTitle } from "@/components/ui/card-hover-effect";
import { TbDeviceDesktopCode,TbDeviceMobileCode,TbDeviceAnalytics,TbUsersGroup } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { Poppins } from '@next/font/google';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardData = [
  {
    img: <TbDeviceDesktopCode/>, // Add your image URLs here
    title: "Web Development",
    desc: "In an era where your digital footprint defines your business's success, DevToDeploy is your partner in crafting an extraordinary online presence. Our web development services are designed to create not just websites but... ",
  },
  {
    img: <TbDeviceMobileCode/>, // Add your image URLs here
    title: "Mobile Application Development",
    desc: "In a world dominated by mobile devices, a powerful app can set your business apart and engage users like never before. At DevToDeploy, we specialize in creating high-impact mobile applications...",
  },
  {
    img: <TbDeviceAnalytics/>, // Add your image URLs here
    title: "Business Analytics Services",
    desc: "Unlock the potential of your data with DevToDeploy's advanced business analytics services. We transform complex datasets into clear, actionable insights that empower you to make strategic decisions and drive...",
  },
  {
    img: <TbUsersGroup/>, // Add your image URLs here
    title: "Social Media Management",
    desc: "In today’s digital age, social media is a crucial element of your brand’s success. DevToDeploy offers comprehensive social media management services designed to amplify your online presence and engage your...",
  },
  {
    img: <FaGears/>, // Add your image URLs here
    title: "SEO (Search Engine Optimization)",
    desc: "Achieve outstanding search engine visibility and attract quality traffic with DevToDeploy’s expert SEO services. In a competitive digital marketplace, being easily discoverable on search engines...",
  },
 
];

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export function CarouselDemo() {
  return (
    <Carousel className={`${poppins.className} w-full lg:max-w-5xl max-w-xs1`} >
      <CarouselContent>
        {CardData.map((card, index) => (
          <CarouselItem key={index}>
            <div >
              <Card>
                <CardTitle className="flex flex-col lg:space-y-5 space-y-2 aspect-square items-center justify-center lg:p-4 py-3 ">
                  <span className="text-center lg:text-6xl text-5xl">{card.img}</span>
                  <span className="lg:text-xl text-sm text-center font-semibold">{card.title}</span>
                  <span className="text-sm text-justify font-normal">
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
