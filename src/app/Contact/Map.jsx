import React from "react";
import Link from "next/link";

function Map() {
  return (
    <div className="h-[90vh] flex flex-col lg:flex-row mx-9 lg:mb-0 mb-[650px] textDiv">
      <div className="lg:w-1/2 w-full px-7">
        <h1 className="text-4xl font-bold text-center lg:text-left">
          Get in Touch
        </h1>
        <form action="">
          <div className="flex flex-col gap-4 lg:w-[40%] w-full lg:mt-16 mt-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type Your Mail Here:"
              className="border-b border-yellow-400 outline-none bg-transparent"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type Your Name Here:"
              className="border-b border-yellow-400 mt-7 outline-none bg-transparent"
            />{" "}
          </div>
          <div>
            <textarea
              className="border border-yellow-400 rounded lg:w-96 w-full h-24 px-3 py-2 bg-transparent mt-10"
              style={{ resize: "none" }}
              name="message"
              id="message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <Link
            href="/booking"
            className="btn btn-warning mt-7 flex xl:w-[30%] w-[100%]"
          >
            {" "}
            Explore Now{" "}
          </Link>
        </form>
        <div className="divider"></div>
        <h3 className="text-center font-semibold">Or just contact us</h3>
        <div className="flex gap-20 justify-center items-center mt-5">
          <div className="flex gap-20 justify-center items-center">
            <Link
              href="https://www.facebook.com/larguitaa?mibextid=LQQJ4d"
              target="_blank"
            >
              <svg
                className="w-10 h-10 hover:text-yellow-500 transition duration-3000"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/mar_larguito/"
              target="_blank"
            >
              <svg
                className="w-10 h-10 hover:text-yellow-500 transition duration-3000"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <Link href="tel:+212 771-943370" target="_blank">
              <svg
                className="w-10 h-10 hover:text-yellow-500 transition duration-3000"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full mt-20 lg:mt-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center">
            Reach Out to us Dircetly
          </h1>
          <div className="flex justify-center items-center my-5">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                fill="currentColor"
              />
            </svg>

            <div className="divider divider-horizontal"></div>

            <p className="max-w-[20%]">MMMP+5HC, Mdiq</p>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365325.8069532445!2d-5.743727168661046!3d35.66053261449587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5d28d14ddcdf%3A0x78d09cbb033eeb74!2sClub%20de%20plongee%20MARLARGUITO%20M%E2%80%99diq!5e0!3m2!1sen!2sma!4v1695672515181!5m2!1sen!2sma"
              height="450"
              style={{ border: 0 }}
              className="w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
