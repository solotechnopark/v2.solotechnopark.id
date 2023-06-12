import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./cards/Card";
import SkeletonInnerImage from "./skeleton/SkeletonInnerImage";

function Event({ title, date, image }) {
  return (
    <Card className="p-0 overflow-hidden transition-all cursor-pointer hover:bg-slate-50 border bg-gray-100">
      <div className="bg-primary-gradient-x-100 w-full h-52 overflow-hidden flex justify-center items-center">
        {image ? (
          <Image
            className="object-cover w-[100%] h-[100%]"
            src={image}
            alt="My Image"
            width={350}
            height={350}
          />
        ) : (
          <SkeletonInnerImage />
        )}
      </div>
      <div className="p-5">
        <h4 className="capitalize head-4 text-gray-800">{title}</h4>
        <span className="text-sm text-gray-600 mt-2 inline-block">{date}</span>
        {/* <p className="text-gray-700 text-sm">{desc}</p> */}
      </div>
    </Card>
  );
}

export default Event;
