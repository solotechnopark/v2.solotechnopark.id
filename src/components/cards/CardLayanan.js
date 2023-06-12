import React from "react";
import Card from "./Card";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

function CardLayanan({ id, src, title, index }) {
  const [state, dispatch] = useAppContext();

  return (
    <>
      <div
        onClick={() =>
          dispatch({
            type: "SET_MODAL",
            payload: { id: id, value: true },
          })
        }
      >
        <Card
          className="w-full transition-all cursor-pointer hover:text-primary-100 hover:font-bold p-5 lg:p-3"
          index={index}
        >
          <div className="w-full auto mb-5 rounded-md overflow-hidden object-cover flex justify-center items-start ">
            <Image
              className="object-cover w-full h-full"
              src={src}
              width={120}
              height={120}
              alt={src}
            />
          </div>

          <h3 className="head-4 capitalize mx-auto">{title}</h3>
        </Card>
      </div>
    </>
  );
}

export default CardLayanan;
