import React from "react";
import Comments from "../Other/Comments";

function Testimonial() {
  return (
    <section className="dark:bg-gray-800 w-full dark:text-gray-100">
      <div className="px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl my-8 space-y-4 text-center xl:col-span-2 xl:text-left textDiv">
            <h2 className="text-4xl font-bold">What Our Divers Say</h2>
            <p className="dark:text-gray-400">
              Discover the experiences and stories of divers who have explored
              the breathtaking depths with us. Read testimonials from
              adventurers whove ventured into the underwater wonders, and get
              inspired to embark on your own aquatic journey.
            </p>
          </div>

          <div className="p-6 xl:col-span-3 images">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <Comments
                  comment="MarLarguito exceeded my expectations! From vibrant marine life to expert guidance, every dive was unforgettable. Their teams professionalism and warm hospitality made each adventure a delight."
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  name="Leroy Jenkins"
                />

                <Comments
                  comment="Diving with MarLarguito was awe-inspiring! Pristine waters, breathtaking coral reefs, and skilled instructors made every dive a dream. I can't wait to explore the ocean with them again."
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  name="Leroy Jenkins"
                />
              </div>
              <div className="grid content-center gap-4">
                <Comments
                  comment="MarLarguito is a diver's paradise! The sheer beauty of Cozumel's marine world, coupled with their top-notch service, made it a magical experience. Truly the best dive club!"
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  name="Leroy Jenkins"
                />

                <Comments
                  comment="MMy dives with MarLarguito were extraordinary! With their guidance, I discovered Cozumel's underwater wonders. Safety, fun, and nature's beauty – they offered it all. Highly recommended!"
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  name="Leroy Jenkins"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
