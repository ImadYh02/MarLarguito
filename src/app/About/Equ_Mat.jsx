"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../public/about-4.jpeg";

function Equ_Mat() {
  return (
    <div className="w-full mb-[190px] lg:mb-0 h-[65vh] flex flex-col lg:flex-row justify-center lg:mt-10 mt-[300px]">
      <div className="lg:w-1/2 flex justify-center items-center mx-10 images">
        <Image
          src={Img1}
          alt="About MarLarguito"
          className="w-[80%] h-[80%] rounded-2xl"
        />
      </div>

      <div className="lg:w-1/2 lg:mt-16 flex-col gap-5 mx-9 lg:mr-20 textDiv">
        <h1 className="text-4xl lg:text-5xl md:text-center lg:text-center text-center font-semibold leading-1 tracking-wider text-yellow-500">
          Equipment and Materials
        </h1>
        <p
          className="md:my-[60px] my-[10px] text-lg lg:text-left md:text-center md:text-lg text-center "
          style={{ textAlign: "justify" }}
        >
          At Club Marlarguito, we pride ourselves on offering a truly unique
          experience. What sets us apart is our commitment to providing our
          members with all the essential sports equipment and attire they need.
          From comfortable wetsuits to top-quality diving masks and reliable air
          tanks, {"we've"} got it all covered. With Club Marlarguito, you can
          dive in with confidence, knowing that everything you need for an
          exceptional underwater adventure is right at your fingertips
        </p>
      </div>
    </div>
  );
}

export default Equ_Mat;
