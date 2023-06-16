import Image from "next/image";
import React from "react";

function Slider({ src, title, position, office, desc }) {
  return (
    <div className="bg-white shadow-lg border-t mx-2 rounded-3xl p-5 cursor-grab">
      <div className="text-start flex items-center gap-5">
        <div className="bg-gray-300 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
          <Image src={src} width={120} height={120} alt={"image"} />
        </div>
        <div>
          <h3 className="font-bold text-md">{title}</h3>
          <p className="text-sm text-gray-600 my-1">{position}</p>
          <p className="text-sm text-gray-600">{office}</p>
        </div>
      </div>
      <div className="col-span-3 flex items-center paragraph">
        <p>
          <strong className="text-4xl"> &quot; </strong> {desc}{" "}
          <strong className="text-xl"> &quot; </strong>
        </p>
      </div>
    </div>
  );
}

export default Slider;
