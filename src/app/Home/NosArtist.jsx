"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WaveIc from "../../../public/wave-ic.png";
import Artist1 from "../../../public/artist-1.jpg";
import Artist2 from "../../../public/artist-2.jpg";
import Artist3 from "../../../public/artist-3.jpg";
import InstaIc from "../../../public/instagram-ic.png";

function NosArtist() {
  return (
    <div className="w-full h-[80vh] mt-10 sm:mt-[-1000px] lg:mt-[-60px] flex flex-col">
      <div className="flex flex-col justify-center items-center textDiv">
        <h2 className="md:text-5xl text-4xl text-center font-semibold tracking-wider">
          Celebrity Dive Adventures
        </h2>
        <Image src={WaveIc} width={50} height={50} alt="Wave Icon" />
        <p className="mt-5 mx-9 text-center max-w-xl">
          Join us as we dive alongside world-famous artists and discover the
          mesmerizing underwater world through their eyes.
        </p>
      </div>

      <div className="w-full flex flex-row lg:flex-row justify-between images">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex">
            <Image
              className="mx-auto rounded-lg sm:rounded-xl"
              src={Artist1}
              alt="Scuba"
              width={280}
              height={280}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex">
            <Image
              className="mx-auto rounded-lg sm:rounded-xl"
              src={Artist2}
              alt="Scuba"
              width={280}
              height={280}
            />
          </div>

          <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex">
            <Image
              className="mx-auto rounded-lg sm:rounded-xl"
              src={Artist3}
              alt="Scuba"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[15%] h-6 self-center mt-3 textDiv">
        <Link
          className="flex justify-center min-w-[90px] insta-link rounded-xl shadow-md bg-white px-6 py-3 items-center"
          href="https://www.instagram.com/mar_larguito/"
          target="_blank"
        >
          <p className="insta-h text-[#E4405F]">See More</p>
          <Image
            src={InstaIc}
            alt="Insta"
            width={25}
            height={25}
            className="ml-5 insta-ic"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default NosArtist;
