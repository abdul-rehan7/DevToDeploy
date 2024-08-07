"use client";
import Hero from "@/components/Hero";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-normal items-center">
      <Hero
        title="Where Code Meets Creativity"
        description="Discover the best solutions tailored to your needs. Our team is dedicated to providing top-notch services and exceptional support. "
        image="/hero.jpg"
      />
    </main>
  );
}
