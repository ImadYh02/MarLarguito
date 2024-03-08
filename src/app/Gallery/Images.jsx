import Image from "next/image";
import React from "react";

function Images({ image }) {
  return (
    <div className="rounded-lg overflow-hidden bg-cover bg-no-repeat images">
      <Image
        class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110"
        src={image}
        alt="MarLarguito"
      />
    </div>
  );
}

export default Images;
