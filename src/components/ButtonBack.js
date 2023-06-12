import React from "react";
import ArrowDown from "@/images/down-arrow-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

function ButtonBack({ href }) {
  return (
    <Link
      href={href}
      className="bg-gray-100 inline-block p-4 rounded-full cursor-pointer"
    >
      <div className="flex justify-center items-center gap-2 px-4">
        <Image className="rotate-90" src={ArrowDown} alt="back" width={20} />
        <span>Kembali</span>
      </div>
    </Link>
  );
}

export default ButtonBack;
