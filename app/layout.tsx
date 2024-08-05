import type { Metadata } from "next";
import { Providers } from './providers'
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
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar/>
         
          {children}
          <Footer/>
          </Providers>
      </body>
    </html>
  )
}