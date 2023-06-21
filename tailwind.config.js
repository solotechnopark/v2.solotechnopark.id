/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        // "primary-100": "#f54",
        "primary-100": "#C40330",
        "primary-200": "#740330",
        "primary-50": "#fc8a7e",
        "dark-transparent-100": "rgba(0,0,0,0.5)",
        "secondary-100": "#EDF1FC",
      },
      backgroundImage: {
        "header-1":
          // "url('../../src/images/bg-header-1.png'), url('../../src/images/head-top.svg')",
          "url('../../src/images/bg-header-1.svg')",
        "header-2": "url('../../src/images/bg-header-2.png')",
        sitemap: "url('../../src/images/site-room.png')",
        "flower-1":
          "url('../../src/images/bg-header-flower.png'), linear-gradient(to bottom, #C40330, #740330)",
        "contact-patern":
          "url('../../src/images/contact-patern.png'), linear-gradient(to bottom, #C40330, #740330)",
        "rounded-1": "url('../../src/images/bg-rounded-1.png')",
        "rounded-2": "url('../../src/images/pojok-program.png')",
        // "body-1": "url('../../src/images/bg-stp-1.png')",
        // "body-2": "url('../../src/images/bg-inverse-3.1.png')",
        // "body-3": "url('../../src/images/Group-1240.png')",
        // "body-4": "url('../../src/images/Layanan.jpg')",
        // "body-5": "url('../../src/images/bg-batik-transparent.png')",
        // "body-6": "url('../../src/images/Gedung-R-D.jpg')",
        // "body-7": "url('../../src/images/Group-1247.png')",
        // "body-8": "url('../../src/images/bg-event-2.png')",
        "mega-mendung":
          "url('../../src/images/Background-Profile-Right-Side.png')",
        memphis: "url('../../src/images/memphis_1-min.png')",
        "primary-gradient-100": "linear-gradient(to bottom, #C40330, #740330)",
        "primary-gradient-x-100": "linear-gradient(to left, #C40330, #740330)",
        "primary-gradient-200": "linear-gradient(to top, #C40330, #740330)",
        "secondary-gradient-100":
          "url('/gerigi-1.png'), linear-gradient(to bottom, #C40330, #740330)",
        "secondary-gradient-200": "linear-gradient(to right, #0C44AC, #0B336E)",
        "body-primary-100":
          "url('../../src/images/background-primary-model-1.png')",
        cta: "url('../../src/images/background-cta.jpg')",
      },
      animation: {
        fadeIn: "fadeIn .2s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { display: "blockk", opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
