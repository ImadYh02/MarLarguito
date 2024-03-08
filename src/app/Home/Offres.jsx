import React from "react";
import Image from "next/image";
// import WaveIc from "../public/wave-ic.png";
import WaveIc from "../../../public/wave-ic.png";
import BgCardOffre from "../../../public/bg-card-offre.jpg";
import OffreCard from "../Other/OffreCard";
import Icon1 from "../../../public/offers/scuba.png";
import Icon2 from "../../../public/offers/underwater.png";
import Icon3 from "../../../public/offers/boat.png";
import Icon4 from "../../../public/offers/snorkeling.png";
import Icon5 from "../../../public/offers/oxygen-tank.png";
import Icon6 from "../../../public/offers/camera.png";

function Offres() {
  return (
    <div className="w-full h-screen xl:mt-20 mt-[550px] flex flex-col">
      <div className="flex flex-col justify-center mx-9 items-center textDiv">
        <h2 className="md:text-5xl text-4xl text-center font-semibold tracking-wider">
          Professional Scuba Experience
        </h2>
        <Image src={WaveIc} width={50} height={50} alt="Wave Icon" />
        <p className="mt-5 text-center max-w-xl">
          Explore the underwater world of Cozumel’s National Marine Park on a
          3-hour scuba diving tour that includes two dives with your guide
        </p>
      </div>

      <div className="h-[90%] w-[95%] mx-auto my-8 flex flex-row flex-wrap images">
        <OffreCard
          image={Icon1}
          title="Dive Initiation"
          text="Witness divers preparing to unveil the hidden treasures of the ocean depths. Dive into the riches of the marine world."
        />

        <OffreCard
          image={Icon2}
          title="Underwater Dives"
          text="Our dives often take place within the Marine Reserve, a haven of aquatic wonders waiting to be explored."
        />

        <OffreCard
          image={Icon3}
          title="Boat Rentals"
          text="Embark on sea adventures with us aboard our fleet of boats. Discover the ocean's vastness."
        />

        <OffreCard
          image={Icon4}
          title="Snorkeling Experience"
          text="Immerse yourself in the thrilling world of underwater snorkeling, a mesmerizing sub-aquatic activity."
        />

        <OffreCard
          image={Icon5}
          title="Diving Courses"
          text="Master the art of diving with our expert team. Learn the essentials of underwater exploration."
        />

        <OffreCard
          image={Icon6}
          title="Photography & Videography"
          text="Capture the magic of the underwater world through photography and videography, a unique aquatic art."
        />
      </div>
    </div>
  );
}

export default Offres;
