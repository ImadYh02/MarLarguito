"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Home/Header";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Footer from "../Home/Footer";

function Page() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get all elements with the "images" class
    const images = document.querySelectorAll(".images");

    // Loop through each element and create animations
    images.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Page;
