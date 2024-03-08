"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../public/about-1.jpeg";

function About() {
  return (
    <div className="w-full h-[89vh] flex flex-col lg:flex-row justify-center lg:mt-0 mt-[300px]">
      <div className="lg:w-1/2 flex justify-center items-center mx-10 images">
        <Image
          src={Img1}
          alt="About MarLarguito"
          className="w-[80%] h-[80%] rounded-2xl"
        />
      </div>

      <div className="lg:w-1/2 lg:mt-16 flex-col gap-5 mx-9 textDiv">
        <h1 className="text-4xl lg:text-5xl md:text-center lg:text-center text-center font-semibold leading-1 tracking-wider text-yellow-500">
          MarLarguito
        </h1>
        <p
          className="md:my-[60px] my-[10px] text-lg lg:text-left md:text-center md:text-lg text-center "
          style={{ textAlign: "justify" }}
        >
          Club Marlarguito, established in 1975 by the renowned diver{" "}
          <span className="text-yellow-500 underline">Muhammad Ahakkam</span>,
          is a prestigious Moroccan diving club. Our club adheres to
          international diving standards and is proudly affiliated with the
          Royal Federation of Diving and Underwater Activities. We offer
          internationally recognized certifications from PADI and CMAS, along
          with top-notch sports equipment and apparel for our valued members.
          Our primary mission is to introduce people of all ages, starting from
          8 years old, to the thrilling world of diving, guided by our team of
          expert coaches. At Marlarguito, our core mission is to promote the
          sport of diving among individuals of diverse backgrounds and ages in
          Morocco. We achieve this by providing high-quality instruction and
          state-of-the-art equipment to our extended family of members, always
          in full compliance with rigorous international safety and professional
          standards.
        </p>
      </div>
    </div>
  );
}

export default About;
