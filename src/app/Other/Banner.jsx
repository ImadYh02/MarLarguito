import React from "react";
import Link from "next/link";

function Banner({ pageName }) {
  return (
    <div className="banner w-full h-[50vh] flex flex-col justify-center items-center text-white">
      <div className="">
        <h2 className="md:text-5xl text-4xl text-center font-semibold tracking-wider">
          {pageName}
        </h2>
      </div>

      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            {pageName}
          </li>
        </ul>
      </div>
      
      <div className="absolute h-[50vh] w-full">
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
        <div className="dot-cont">
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
