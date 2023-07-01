import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules

export default function ProfilInstruktur({ data }) {
  return (
    <>
      <Swiper
        className="profil-instruktur mt-20"
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          // Konfigurasi untuk perangkat mobile
          640: {
            slidesPerView: 2,
          },
          // Konfigurasi untuk perangkat desktop
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data &&
          data.map((item, i) => (
            <SwiperSlide key={i} className="cursor-pointer">
              <div className="head-4 text-white bg-primary-100 py-4 px-5 rounded-2xl text-center">
                {item.kategori}
              </div>
              <div className="bg-white mt-5 px-5 rounded-2xl text-center py-10">
                <div className="w-40 h-40 overflow-hidden bg-primary-gradient-100 rounded-full mx-auto flex justify-center items-center mb-10">
                  <Image
                    src={item.image}
                    width={160}
                    height={160}
                    alt={item.nama}
                  />
                </div>
                <h2 className="head-3 text-primary-100 my-5">{item.nama}</h2>
                <p className="text-gray-600 my-2">{item.peran}</p>
                <p className="text-gray-600">{item.pengalaman}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
