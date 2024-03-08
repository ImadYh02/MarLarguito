import React from "react";
import Image from "next/image";
import Link from "next/link";
import WaveIc from "../../../public/wave-ic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Apply() {
  return (
    <div className="w-full h-[60vh] lg:mt-[100px] mt-[800px] apply-section">
      <div className="flex flex-col justify-center textDiv">
        <div className="flex flex-col justify-center items-center mt-24">
          <Image src={WaveIc} width={50} height={50} alt="Wave Icon" />
          <h2 className="md:text-5xl text-4xl text-center text-white font-semibold tracking-wider">
            What are you waiting for?
          </h2>
          <p className="text-center max-w-xl text-white mx-9 my-5">
            For more information and data to benefit from this magical
            experience, please contact us on our number.
          </p>
          <Link className="text-yellow-500 mt-5 font-bold flex" href="tel:+212771943370">
            APPLY NOW{" "}
            <FontAwesomeIcon
              width={25}
              height={25}
              className="ml-3 mt-1"
              icon={faArrowRight}
              bounce
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Apply;
