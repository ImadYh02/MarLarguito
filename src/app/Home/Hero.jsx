import React from "react";
import videoBg from "../../../public/bg_diving.mp4";
import Link from "next/link";
// import videoTest from '@/app/assets/videoBg.mp4'

function Hero() {
  return (
    <div className="hero md:w-full w-full h-screen relative overflow-hidden">
      <video
        className="object-cover w-full h-full absolute top-0 left-0"
        autoPlay
        loop
        muted
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="text-center z-10 flex-col max-w-screen-2xl justify-around content-between w-[80%] mx-auto textDiv">
        {/* <h1>Ready for a Water Adventure</h1> */}
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold leading-1 tracking-wider">
          Dive into Adventure: Explore the Depths with{" "}
          <span className="text-yellow-500">MarLarguito</span>
        </h1>

        <p className="text-white md:my-[60px] my-[30px] text-lg text-center md:text-xl">
          Discover a world of underwater wonders with{" "}
          <span className="text-yellow-500 font-bold">MarLarguito</span>. Join
          us for thrilling dives, breathtaking marine life, and unforgettable
          adventures beneath the waves. Experience the magic of the ocean like
          never before.
        </p>
        {/* <button className='bg-yellow-500 text-white px-5 py-2 border-r-2'> Booking Now </button> */}

        <Link
          href="tel:+212771943370"
          className="btn btn-warning hover:bg-yellow-300"
        >
          {" "}
          Booking Now
        </Link>

        <Link
          href="#Book"
          className="flex justify-center items-center text-white animate-bounce h-10"
        >
          <svg
            className="w-full h-full mt-[150px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
