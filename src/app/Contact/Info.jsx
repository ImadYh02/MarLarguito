import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="flex flex-col mx-9 mt-20">
      <div className="w-full textDiv">
        <h1 className="text-4xl md:text-5xl text-center font-semibold leading-1 tracking-wider">
          We are Available From{" "}
          <span className="bg-yellow-400 px-6 rounded-full">
            7:00 AM to 11:00 PM
          </span>{" "}
          and Contact is Available 24/7
        </h1>
      </div>

      <div className="w-full mx-auto my-10 flex flex-col flex-wrap justify-center items-center images">
        <div className="w-full p-4 flex rounded-lg flex-col lg:flex-row justify-center items-center sm:rounded-xl">
          <div className="bg-white lg:w-[33%] w-[100%] px-4 py-9 gap-7 shadow-md flex flex-col justify-center items-center rounded-lg sm:rounded-xl cursor-pointer ">
            <div class="w-20 h-20 bg-yellow-400 rounded-full p-3 flex justify-center items-center">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </div>{" "}
            <p className="text-black">Sun - Thu : 9:00 AM - 10:00 PM</p>
          </div>

          <div className="bg-white lg:w-[33%] w-[100%] px-4 py-9 my-9 lg:my-0 lg:mx-20 gap-7 shadow-md flex flex-col justify-center items-center rounded-lg sm:rounded-xl cursor-pointer ">
            <div class="w-20 h-20 bg-yellow-400 rounded-full p-3 flex justify-center items-center">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </div>
            <p className="text-black">marlarguito@gmail.com</p>
          </div>

          <div className="bg-white lg:w-[33%] w-[100%] px-4 py-9 gap-7 shadow-md flex flex-col justify-center items-center rounded-lg sm:rounded-xl cursor-pointer ">
            <div class="w-20 h-20 bg-yellow-400 rounded-full p-3 flex justify-center items-center">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <p className="text-black">+212 771-943370</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
