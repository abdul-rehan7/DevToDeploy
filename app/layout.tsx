import type { Metadata } from "next";
import { Providers } from "./providers";
import Script from 'next/script'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevToDeploy | Where Code Meets Creativity",
  description:
    "Leading web development company specializing in creating dynamic, responsive websites. Experts in delivering scalable web solutions tailored to your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />

          {children}
          <Footer />
        </Providers>
        <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
        <Script>AOS.init();</Script>
      </body>
    </html>
  );
}
