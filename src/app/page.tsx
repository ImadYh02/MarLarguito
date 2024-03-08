"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Header from '@/app/Home/Header';
import Hero from './Home/Hero';
import Booking from '@/app/Home/Book';
import Offres from '@/app/Home/Offres';
import JoinUs from '@/app/Home/JoinUs';
import NosArtist from '@/app/Home/NosArtist';
import Testimonial from '@/app/Home/Testimonial';
import Apply from '@/app/Home/Apply';
import Footer from '@/app/Home/Footer';
import Head from 'next/head';


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get all elements with the "textDiv" class
    const textDiv = document.querySelectorAll(".textDiv");

    // Loop through each element and create animations
    textDiv.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
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
  }, [])

  return (
    <div>
      <Header />
      <Hero />
      <Booking />
      <Offres />
      <JoinUs />
      <NosArtist />
      <Apply />
      <Testimonial />
      <Footer />
    </div>
  )
}