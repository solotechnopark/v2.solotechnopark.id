import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiLogoutCircleRLine } from "react-icons/ri";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function NavbarAdmin() {
  const router = useRouter();

  const logoutHandler = async () => {
    console.log("gaes");
  };

  //   useEffect(() => {
  //     if (isLogout) {
  //       router.push("/admin");
  //     }
  //   }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 px-5">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 mr-5 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              //   onClick={() => {
              //     return dispatch({
              //       type: "SET_SIDEBAR_IS_OPEN",
              //       payload: !state.isOpenSidebar,
              //     });
              //   }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <Image
              src={LogoSTP}
              alt="Logo IBT"
              width={120}
              height={26}
              priority={true}
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div
                onClick={() => {
                  Cookies.remove("token");
                  router.push("/login");
                }}
              >
                <button className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-all">
                  <RiLogoutCircleRLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
