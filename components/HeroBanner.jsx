import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel>
        <div>
          <img
            src="../public/gatoOne.jpeg"
            className="aspect-[16/10] md:as"
            alt="Gato color anaranjado"
          />
          <div className="px-[15px] md:px-[40] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="../public/gatoDos.png"
            className="aspect-[16/10] md:as"
            alt="Gato color negro"
          />
          <div className="px-[15px] md:px-[40] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="../public/gatoTres.png"
            className="aspect-[16/10] md:as"
            alt="Gato multicolor"
          />
          <div className="px-[15px] md:px-[40] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
