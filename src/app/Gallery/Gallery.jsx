import Image from "next/image";
import React from "react";
import Images from "./Images";
import Link from "next/link";

import gallerie_1 from "../../../public/galleries/gallerie_1.jpg"
import gallerie_2 from "../../../public/galleries/gallerie_2.jpg"
import gallerie_3 from "../../../public/galleries/gallerie_3.jpg"
import gallerie_4 from "../../../public/galleries/gallerie_4.jpg"
import gallerie_5 from "../../../public/galleries/gallerie_5.jpg"
import gallerie_6 from "../../../public/galleries/gallerie_6.jpg"
import gallerie_7 from "../../../public/galleries/gallerie_7.jpg"
import InstaIc from "../../../public/instagram-ic.png";

function Gallery() {
  return (
    <div>
      <div class="grid grid-cols-1 m-9 md:grid-cols-3 gap-4">
        <Images image={gallerie_1} />
        <Images image={gallerie_2} />
        <Images image={gallerie_3} />
        <Images image={gallerie_4} />
        <Images image={gallerie_5} />
        <Images image={gallerie_6} />
        <Images image={gallerie_7} />
      </div>
    </div>
  );
}

export default Gallery;
