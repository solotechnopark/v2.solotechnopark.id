import Link from "next/link";
import React from "react";
import {
  FaHandshake,
  FaUser,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import { AiFillMessage, AiFillTag } from "react-icons/ai";
import { RiMiniProgramFill } from "react-icons/ri";

import { useAppContext } from "@/context/AppContext";
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/router";

const navigations = [
  {
    title: "mitra",
    path: "/admin/mitra",
    icon: <FaUser size={14} />,
  },
  {
    title: "layanan",
    path: "/admin/layanan",
    icon: <AiFillTag size={14} />,
  },
  {
    title: "testimoni",
    path: "/admin/testimoni",
    icon: <RiMiniProgramFill size={14} />,
  },
  {
    title: "pesan",
    path: "/admin/pesan",
    icon: <AiFillMessage size={14} />,
  },
  {
    title: "event",
    path: "/admin/event",
    icon: <FaUserGraduate size={14} />,
  },
  {
    title: "berita",
    path: "/admin/berita",
    icon: <FaUserFriends size={14} />,
  },
  {
    title: "menu",
    path: "/admin/menu",
    icon: <FaHandshake size={14} />,
  },
];

function Sidebar() {
  const router = useRouter();
  const [state, dispatch] = useAppContext();
  const currentPage = router.pathname.split("/")[2];

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        // dispatch({
        //   type: "SET_SIDEBAR_IS_OPEN",
        //   payload: false,
        // });
      }}
    >
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform sm:translate-x-0 bg-white border-r border-gray-200`}
        aria-label="Sidebar"
      >
        {/* ${
          state.isOpenSidebar ? "" : "-translate-x-full"
        } */}
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-1 font-medium">
            {navigations.map((data, i) => (
              <li key={i}>
                <Link
                  href={data.path}
                  className={`flex gap-5 px-4 py-2 items-center transition-all rounded-lg text-sm capitalize text-gray-700 hover:bg-gray-100 ${
                    currentPage === data.title
                      ? "bg-gray-100 text-primary-100"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-md flex justify-center items-center  ${
                      currentPage === data.title
                        ? "bg-primary-100 text-white"
                        : "bg-secondary-100"
                    }`}
                  >
                    {data.icon}
                  </div>
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </OutsideClickHandler>
  );
}

export default Sidebar;
