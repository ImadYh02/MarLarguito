import React from "react";
import Image from "next/image";

function OffreCard({image, title, text}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 flex rounded-lg sm:rounded-xl">
      <div className="bg-white p-4 shadow-md flex-col rounded-lg sm:rounded-xl cursor-pointer offre-card">
        <Image
          className="mx-auto animate-bounce"
          src={image}
          alt="Scuba"
          width={80}
          height={80}
        />
        <h3 className="text-center font-semibold my-5">{title}</h3>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
}

export default OffreCard;
