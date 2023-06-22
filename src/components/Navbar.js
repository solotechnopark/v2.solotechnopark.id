import Image from "next/image";
import React, { useState } from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import ArrowDown from "@/images/down-arrow-svgrepo-com.svg";
import Link from "next/link";
import dataMenus from "@/data/dataMenus.json";
import { useRouter } from "next/router";

function Navbar() {
  const menus = dataMenus;
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onClickHamburger = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`z-40 py-2 bg-gray-100 rounded-b-3xl text-gray-700 fixed w-full top-0`}
      style={{ zIndex: 999 }}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={LogoSTP} alt="Logo STP" width={130} />
        </Link>
        {/* Navigate */}
        <div
          className="p-3 rounded-full bg-slate-50 lg:hover:bg-slate-50 cursor-pointer transition-all lg:hidden right-5 fixed z-50"
          onClick={onClickHamburger}
        >
          <div className="w-6 h-6 flex flex-col items-center justify-between">
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? "rotate-45 translate-y-3" : null
              }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? "opacity-0" : null
              }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? " -rotate-45 -translate-y-2" : null
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`text-md bg-gray-50 lg:bg-transparent fixed lg:relative left-0 right-0 top-0 bottom-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 p-5 transition-all ${
            isOpen ? "translate-x-[0%]" : "translate-x-[100%] lg:translate-x-0"
          }
          }`}
        >
          {menus.map((data, i) => {
            if (data.menu_title === "Layanan") {
              return (
                <span key={i} className=" px-3 transition-all cursor-pointer">
                  <button
                    className="flex items-center justify-between hover:text-primary-100 gap-3 mx-auto"
                    onMouseMove={() => {
                      setDropdown(true);
                    }}
                  >
                    <span>Layanan</span>
                    <Image
                      className="hidden lg:inline-block"
                      width={10}
                      height={12}
                      src={ArrowDown}
                      alt="layanan"
                    />
                  </button>
                  <div
                    className={`text-center lg:text-start lg:absolute lg:bg-white flex flex-col gap-5 lg:gap-0 lg:p-3 lg:rounded-md lg:shadow-md mt-4 ${
                      dropdown ? "flex" : "hidden"
                    }`}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    {data.menu_subtitle &&
                      data.menu_subtitle.map((data, i) => (
                        <Link
                          key={i}
                          href={data.menu_url}
                          target={data.menu_target}
                          className={`px-3  transition-all py-2 rounded-lg ${
                            data.menu_url !== ""
                              ? "hover:bg-primary-100 hover:text-white "
                              : "hover:bg-gray-50 text-gray-300"
                          }`}
                        >
                          {data.menu_title}
                        </Link>
                      ))}
                  </div>
                </span>
              );
            } else {
              return (
                <Link
                  key={i}
                  href={data.menu_url}
                  target={data.menu_target}
                  className={`px-3  transition-all hover:text-primary-100 ${
                    data.menu_url === pathname
                      ? "font-medium text-primary-100"
                      : ""
                  }`}
                >
                  {data.menu_title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
