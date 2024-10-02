import type { Metadata } from "next";
import { Providers } from "./providers";
import Script from "next/script";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevToDeploy | We Believe in Code ",
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
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />


        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <NavbarDemo />

          {children}
          <Footer />
        </Providers>
        <Script
          id="my-script"
          src="https://unpkg.com/aos@next/dist/aos.js"
        ></Script>
      </body>
    </html>
  );
}
