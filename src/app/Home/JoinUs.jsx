import React from "react";
import Image from "next/image";
import Link from "next/link";
import WaveIc from "../../../public/wave-ic.png";
import Diver from "../../../public/diver-header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function JoinUs() {
  return (
    <>
      <div className="bg-[#f7fafc] text-black w-full h-full mt-[1300px] xl:mt-20 flex flex-row lg:flex-row">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 sm:w-full flex flex-col justify-center mx-7 textDiv">
            <Image src={WaveIc} width={50} height={50} alt="Wave Icon" />
            <h2 className="md:text-5xl text-4xl text-left font-semibold">
              Dive into Your Dreams
            </h2>
            <p className="mt-5 text-left text-lg lg:w-[85%]">
              Do you dream of exploring the mysteries beneath the oceans
              surface? Our experienced instructors are here to turn your
              underwater dreams into reality. From teaching you the basics to
              guiding you through the enchanting marine world, we have got it
              all covered.
            </p>
            <p className="mt-5 text-left text-lg lg:w-[85%]">
              Contact us today, and we pledge to provide everything you need to
              embark on this thrilling journey beneath the waves. Safety is our
              utmost priority, ensuring you can unwind and relish every moment
              of your underwater adventure. The time has come to transform your
              dreams into a breathtaking reality!
            </p>
            <Link className="text-yellow-500 mt-5 font-bold flex" href="/About">
              READ MORE{" "}
              <FontAwesomeIcon
                width={25}
                height={25}
                className="ml-3 mt-1"
                icon={faArrowRight}
                bounce
              />
            </Link>
          </div>

          <div className="sm:w-full lg:w-1/2 flex flex-col justify-center images">
            <div className="absolute">
              <h1 className="font-bold text-9xl lg:w-[80%] text-center opacity-50">
                JOIN <span className="text-yellow-500">US</span> NOW
              </h1>
            </div>
            <div>
              <Image
                className="relative xl:top-10 lg:right-10 right-1"
                src={Diver}
                alt="Diver"
              />
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f7fafc"
          fill-opacity="1"
          d="M0,96L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default JoinUs;
