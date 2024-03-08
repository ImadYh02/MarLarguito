 "use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../public/desc-1.jpg";
import Img2 from "../../../public/desc-2.jpg";
import Img3 from "../../../public/desc-3.jpg";
import Link from "next/link";

function Book() {
  return (
    <div
      className="booking w-full h-screen flex lg:flex-row xl:flex-row md:flex-col relative"
      id="Book"
    >
      <div className="booking-desc flex-col items-center lg:mt-24 content-center md:w-[100%] flex-wrap m-9 textDiv">
        <h2 className="text-4xl md:text-5xl md:text-center lg:text-left text-center font-semibold leading-1 tracking-wider">
          Book Your{" "}
          <span className="text-yellow-500 font-bold decoration-yellow-500">
            Dive Adventure
          </span>{" "}
          Today
        </h2>
        <p className="md:my-[30px] my-[15px] text-lg lg:text-left md:text-center md:text-lg text-center">
          Plan your next underwater expedition with ease. Reserve your spot and
          embark on an unforgettable journey beneath the waves. Explore the
          mesmerizing world of marine life with Mara Larguito, where adventure
          knows no bounds. Dive into the azure waters of Cozumels National
          Marine Park with Club Mar Larguito. Our team of experienced guides and
          instructors is dedicated to ensuring your safety and enjoyment
          throughout your diving experience. Whether you are a seasoned diver or
          a beginner, we offer a range of dive packages and courses to suit your
          skill level. Join us and discover the wonders of the underwater world.
        </p>
        <Link
          href="https://www.instagram.com/mar_larguito/"
          target="_blank"
          className="btn btn-warning xl:w-[30%] w-[100%] hover:bg-yellow-300"
        >
          {" "}
          Explore Now{" "}
        </Link>
      </div>

      <div className="booking-img flex md:w-[100%] images">
        <div className="first-sect mt-[70px] ml-6">
          <Image src={Img1} alt="jhg" width={350} height={300} />
          <Image
            className="mt-6"
            src={Img2}
            alt="jhg"
            width={350}
            height={300}
          />
        </div>

        <div className="second-sect mt-[120px] ml-6 mr-6">
          <Image src={Img3} alt="jhg" width={550} height={300} />
        </div>
      </div>
    </div>
  );
}

export default Book;
