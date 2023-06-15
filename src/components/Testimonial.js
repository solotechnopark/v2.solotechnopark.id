import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import Slider from "./testimonial/Slider";
import SwiperNavButton from "./button/SwiperNavButton";

function Testimonial({ data }) {
  const dataTestimoni = data;

  return (
    <>
      <Swiper
        loop={true}
        // loopAdditionalSlides={dataTestimoni.meta.jumlah_data}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="testimonial"
        breakpoints={{
          // Konfigurasi untuk perangkat mobile
          640: {
            slidesPerView: 1,
          },
          // Konfigurasi untuk perangkat desktop
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {dataTestimoni &&
          dataTestimoni.map((data, i) => {
            return (
              <SwiperSlide key={i} style={{ paddingTop: "10rem" }}>
                <Slider
                  src={data.image}
                  title={data.nama}
                  position={data.divisi}
                  office={data.kerja}
                  desc={data.pesan}
                />
              </SwiperSlide>
            );
          })}

        <SwiperNavButton />
      </Swiper>
    </>
  );
}

export default Testimonial;
