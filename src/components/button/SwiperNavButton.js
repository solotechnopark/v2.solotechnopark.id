import { useAppContext } from "@/context/AppContext";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSwiper } from "swiper/react";

function SwiperNavButton() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between items-end w-full gap-5 mt-10 -translate-y-[40rem] lg:-translate-y-[33rem] absolute z-20">
      <h2 className="capitalize head-2">
        Kesan Untuk <br /> Solo Technopark
      </h2>
      <div className="flex gap-5">
        <button
          className="w-16 h-16 border border-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <AiOutlineArrowLeft size={24} />
        </button>
        <button
          className="w-16 h-16 border border-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default SwiperNavButton;
