import Aos from "aos";
import React, { useEffect, useState } from "react";

function Card({ children, className, index }) {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    Aos.init({
      // konfigurasi AOS
      offset: 20,
      duration: 600,
      easing: "ease-in-out",
    });

    setDelay((index + 1) * 100);
  }, []);

  return (
    <div
      className={`rounded-xl my-5 ${className}`}
      data-aos="fade-up"
      data-aos-duration="200"
      data-aos-delay={`${delay}`}
    >
      {children}
    </div>
  );
}

export default Card;
