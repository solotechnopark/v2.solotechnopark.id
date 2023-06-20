import Aos from "aos";
import React, { useEffect } from "react";

function Button({ children, onclick, className }) {
  useEffect(() => {
    Aos.init({
      // konfigurasi AOS
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <button
      className={`${className} py-2 md:py-3 px-5 md:px-7 rounded-xl transition-all hover:opacity-50`}
      onClick={onclick}
      // data-aos="zoom-in-up"
    >
      {children}
    </button>
  );
}

export default Button;
