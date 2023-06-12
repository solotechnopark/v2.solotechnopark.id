import Image from "next/image";
import React from "react";

function CardSektor({ src, title, desc, className }) {
  return (
    <div className={`text-left px-2 text-gray-700 ${className}`}>
      <div className="flex lg:justify-center">
        <Image
          className="mx-auto lg:w-1/4 lg:absolute lg:-translate-y-20"
          src={src}
          alt={src}
          width={65}
          height={65}
        />
      </div>
      <h2 className="text-primary-100 text-xl font-bold my-5 lg:mt-12">
        {title}
      </h2>
      <ul className="list-disc ml-5 ">
        {desc.map((data, i) => {
          return (
            <li key={i} className="my-2">
              {data},
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardSektor;
