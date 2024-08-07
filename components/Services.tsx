import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Cards() {
  return (
    <div className="max-w-[85rem] text-blue-500 justify-around  mx-auto px-7">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Website Development",

    link: "https://stripe.com",
  },
  {
    title: "Mobile Application Development",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Business Analytics Services",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Social Media Management",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Search Engine Optimization",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Better Reach Consultation",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
