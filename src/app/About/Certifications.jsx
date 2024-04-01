"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../public/about-5.jpeg";

function Certifications() {
  return (
    <div className="w-full h-[65vh] flex flex-col-reverse lg:flex-row justify-center lg:mt-10 mt-[250px]">
      <div className="lg:w-[60%] lg:mt-16 flex-col gap-5 mx-9 lg:ml-20 textDiv">
        <h1 className="text-4xl lg:text-5xl md:text-center lg:text-center text-center font-semibold leading-1 tracking-wider text-yellow-500">
          Certifications
        </h1>
        <p
          className="md:my-[60px] my-[10px] text-lg lg:text-left md:text-center md:text-lg text-center "
          style={{ textAlign: "justify" }}
        >
          At Marlarguito Diving Club, we pride ourselves on our commitment to
          excellence. We hold prestigious international certifications from both{" "}
          <span className="text-yellow-500 underline"> PADI</span> and{" "}
          <span className="text-yellow-500 underline">CMAS</span>, recognizing
          the dedication of our members who have completed rigorous training and
          gained hands-on experience in the world of diving. Our operations
          adhere strictly to global diving standards, and we are proudly
          affiliated with the Royal Federation of Diving and Underwater
          Activities. Join us to explore the depths with confidence and
          professionalism.
        </p>
      </div>

      <div className="lg:w-[40%] flex justify-center items-center mx-10 images">
        <Image
          src={Img1}
          alt="About MarLarguito"
          className="w-[80%] h-[80%] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Certifications;
