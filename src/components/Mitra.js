import React, { useEffect, useState } from "react";
import MitraSwiper from "./swiper/MitraSwiper";

function Mitra({ data }) {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const rows = data.length / 3;
    const rowsTop = data.slice(0, rows);
    const rowsMidle = data.slice(rows, rows * 2);
    const rowsBottom = data.slice(rows * 2);

    setPartners([rowsTop, rowsMidle, rowsBottom]);
  }, []);

  return (
    <>
      {partners.map((part, index) => (
        <div
          key={index}
          className="bg-gray-100 flex-wrap justify-center text-center py-2 px-4 mt-5  rounded-3xl"
        >
          <MitraSwiper data={part} index={index + 1} />
        </div>
      ))}
    </>
  );
}

export default Mitra;
