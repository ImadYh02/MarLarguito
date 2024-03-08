import React from "react";
import Image from "next/image";
import Link from "next/link";
import WaveIc from "../../../public/wave-ic.png";
import Artist1 from "../../../public/artist-1.jpg";
import Artist2 from "../../../public/artist-2.jpg";
import Artist3 from "../../../public/artist-3.jpg";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="0.8"
          d="M0,0L48,5.3C96,11,192,21,288,64C384,107,480,181,576,181.3C672,181,768,107,864,96C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="w-full h-full lg:mt-[-1px]">
        <div className=" w-full footer opacity-80 h-1/2 flex lg:flex-row text-black flex-col lg:px-20">
          <div className="lg:w-[35%] lg:mt-[-50px] ml-12">
            <h3 className="text-xl text-center font-semibold">MarLarguito</h3>
            <p className="max-w-[80%] mt-5">
              Moroccan diving club founded in 1975 by Muhammad Ahakkam, a
              well-known diver who saved many divers in the region.
            </p>
          </div>

          <div className="flex flex-col lg:mt-[-50px] lg:w-[35%] ml-12">
            <h3 className="text-xl text-center font-semibold">Contact Us</h3>
            <div className="flex flex-col mt-5">
              <Link
                className="hover:text-white hover:ps-2 transition-all"
                target="_blank"
                href="https://maps.app.goo.gl/oH3X79XEAp8HVgY27"
              >
                MMMP+5HC, Mdiq
              </Link>
              <Link
                className="my-3 hover:text-white hover:ps-2 transition-all"
                target="_blank"
                href="tel:212771943370"
              >
                +212 771-943370
              </Link>
              <Link
                className="hover:text-white hover:ps-2 transition-all"
                target="_blank"
                href="mailto:marlarguito@gmail.com"
              >
                marlarguito@gmail.com
              </Link>
            </div>
          </div>

          <div className="lg:w-[35%] ml-12">
            <div className="lg:mt-[-50px]">
              <h3 className="text-xl text-left font-semibold">Social Links</h3>
              <div className="flex gap-2 mt-5">
                <Link href="#">
                  <Image
                    src={Artist1}
                    width={80}
                    height={80}
                    alt="Our Social"
                  />
                </Link>

                <Link href="#">
                  <Image
                    src={Artist2}
                    width={80}
                    height={80}
                    alt="Our Social"
                  />
                </Link>

                <Link href="#">
                  <Image
                    src={Artist3}
                    width={80}
                    height={80}
                    alt="Our Social"
                  />
                </Link>
              </div>
              <div className="flex mt-3 gap-3">
                <Link
                  className="hover:text-white"
                  href="https://www.facebook.com/larguitaa?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>

                <Link
                  className="hover:text-white"
                  href="https://www.instagram.com/mar_larguito/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>

                <Link
                  className="hover:text-white"
                  href="tel:+212 771-943370"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full footer-l opacity-80 text-center">
          <p className="py-3 text-black">
            Created with 💖 by {""}
            <Link
              href="https://www.linkedin.com/in/imad-yahyaoui/"
              target="_blanc"
              className="font-semibold underline hover:text-white"
            >
              iMad Yahyaoui
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
