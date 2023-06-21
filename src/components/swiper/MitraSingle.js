import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

export default function MitraSingle({ data, index }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        // loop={true}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false,
        }}
        className="mitra"
        slidesPerView={9}
        // breakpoints={{
        //   // Konfigurasi untuk perangkat mobile
        //   640: {f
        //     slidesPerView: 8,
        //   },
        //   // Konfigurasi untuk perangkat desktop
        //   1024: {
        //     slidesPerView: 10,
        //   },
        // }}
      >
        {data &&
          data.map((val, i) => (
            <SwiperSlide key={i}>
              <div className="p-2">
                <Image
                  className="w-20 h-20 object-contain rounded-md"
                  src={val.image}
                  width={120}
                  height={120}
                  alt="mitra"
                  // style={{  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
                  // filter: grayscale(100%);}}
                  style={{
                    WebkitFilter: "grayscale(100%)",
                    filter: "grayscale(100%)",
                    opacity: 0.75,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
